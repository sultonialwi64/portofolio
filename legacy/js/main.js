document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi Project Horizontal Swiper
    let projectsSwiper;
    if (typeof Swiper !== 'undefined') {
        projectsSwiper = new Swiper('.projectsSwiper', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            freeMode: true,
            scrollbar: {
                el: '.projectsSwiper .swiper-scrollbar',
                draggable: true,
            },
            breakpoints: {
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3 }
            }
        });
    }

    // 2. Setup Variable Untuk Navbar & Translasi
    let currentLanguage = localStorage.getItem('language') || 'en';
    const navBtns = document.querySelectorAll(".nav-btn");
    const indicator = document.getElementById("nav-indicator");
    const navContainer = document.querySelector('.glass-nav');

    // 3. Logic: Scroll Observer (Tracking section mana yang sedang dilihat)
    const sections = document.querySelectorAll('section');
    
    // Observer options
    const observerOptions = {
        root: null, // Use viewport
        rootMargin: '-50% 0px -50% 0px', // Trigger ketika section berada di tengah layar
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cari tombol nav yang cocok dengan id section
                const activeId = entry.target.id;
                const activeBtn = Array.from(navBtns).find(btn => btn.getAttribute('href') === `#${activeId}`);
                
                if (activeBtn) {
                    updateNavPill(activeBtn);
                }
            }
        });
    }, observerOptions);

    // Mulai mengawasi semua section
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Handle recalculation on window resize
    window.addEventListener('resize', () => {
        const activeBtn = document.querySelector('.nav-btn.active');
        if (activeBtn) updateNavPill(activeBtn);
        if (projectsSwiper && typeof projectsSwiper.update === 'function') projectsSwiper.update();
    });

    // 4. Logic: Menggerakkan Indikator Putih Navigasi
    function updateNavPill(activeBtn) {
        // Reset warna semua tombol
        navBtns.forEach((btn) => {
            btn.classList.remove("active", "text-slate-900");
            btn.classList.add("text-slate-400");
        });

        if (activeBtn && indicator && indicator.parentElement) {
            // Aktifkan tombol yang dipilih
            activeBtn.classList.add("active", "text-slate-900");
            activeBtn.classList.remove("text-slate-400");

            // Hitung posisi
            const navContainer = indicator.parentElement;
            const left = activeBtn.offsetLeft - (navContainer.scrollLeft || 0);
            const top = activeBtn.offsetTop;
            const w = activeBtn.offsetWidth;
            const h = activeBtn.offsetHeight;

            // Pindahkan pill
            indicator.style.width = `${w}px`;
            indicator.style.height = `${h}px`;
            indicator.style.left = `${left}px`;
            indicator.style.top = `${top}px`;
            indicator.style.opacity = "1";
        }
    }

    // Initialize nav pill at the top
    setTimeout(() => {
        const homeBtn = document.querySelector('.nav-btn[href="#home"]');
        if(homeBtn && window.scrollY < 100) updateNavPill(homeBtn);
    }, 100);

    // 5. Logic: Language Selector & Translator
    window.changeLanguage = function(lang) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        updatePageContent();
        updateLanguageButtonStyle();
    };

    function updateLanguageButtonStyle() {
        const enBtn = document.getElementById('lang-en');
        const idBtn = document.getElementById('lang-id');
        
        if (currentLanguage === 'en') {
            enBtn.classList.add('bg-white', 'text-slate-900', 'font-bold');
            enBtn.classList.remove('text-slate-300');
            idBtn.classList.remove('bg-white', 'text-slate-900', 'font-bold');
            idBtn.classList.add('text-slate-300');
        } else {
            idBtn.classList.add('bg-white', 'text-slate-900', 'font-bold');
            idBtn.classList.remove('text-slate-300');
            enBtn.classList.remove('bg-white', 'text-slate-900', 'font-bold');
            enBtn.classList.add('text-slate-300');
        }
    }

    function updatePageContent() {
        if(!window.translations) return; // Guard clause if lang.js not loaded
        
        const t = window.translations[currentLanguage];

        // Section: Home
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.querySelector('p[class*="animate-pulse"]').textContent = t.hello;
            homeSection.querySelector('h1').textContent = 'Ahmad Sultoni Alwi';
            homeSection.querySelector('h2').innerHTML = 
                `${t.buildingRobust} <span class="text-white font-medium">${t.robustSystems}</span> & <span class="text-white font-medium">${t.intuitiveInterfaces}</span>.`;
            homeSection.querySelector('p[class*="max-w-2xl"]').textContent = t.subtitle;
            const viewProjectsBtn = homeSection.querySelector('a[href="#projects"]');
            if(viewProjectsBtn) viewProjectsBtn.textContent = t.viewProjects;
        }

        // Section: About
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.querySelector('h3').textContent = t.aboutMe;
            aboutSection.querySelector('h2').textContent = t.bridging;
            const aboutText = aboutSection.querySelector('p[class*="leading-relaxed"]');
            
            if (currentLanguage === 'id') {
                aboutText.innerHTML = t.description;
            } else {
                aboutText.innerHTML = `I am a Software Engineer with a strong foundation in <strong>Full-Stack Web Development</strong>. Currently active as a Freelance IT Consultant, I help businesses transform their ideas into scalable digital products.`;
            }

            aboutSection.querySelector('p[class*="text-slate-500"]').textContent = t.techStack;
            const infoBoxes = aboutSection.querySelectorAll('div[class*="p-4 bg-card"]');
            if (infoBoxes.length >= 2) {
                infoBoxes[0].querySelector('h4').textContent = t.itSolutions;
                infoBoxes[0].querySelector('p').textContent = t.endToEnd;
                infoBoxes[1].querySelector('h4').textContent = t.msibLabel;
                infoBoxes[1].querySelector('p').textContent = t.microsoftAlumni;
            }
        }

        // Section: Projects
        const projectSection = document.getElementById('projects');
        if (projectSection) {
            projectSection.querySelector('h2').textContent = t.featuredProjects;
            projectSection.querySelector('p[class*="text-slate-400"]').textContent = t.scrollDown;

            const projects = projectSection.querySelectorAll('[class*="bg-gradient-to-b"]');
            if (projects.length >= 7) {
                projects[0].querySelector('h3').textContent = t.b2bTitle;
                projects[0].querySelector('p[class*="text-sm"]').textContent = t.b2bDesc;
                projects[1].querySelector('h3').textContent = t.govtRoomTitle;
                projects[1].querySelector('p[class*="text-sm"]').textContent = t.govtRoomDesc;
                projects[2].querySelector('h3').textContent = t.chessSchoolTitle;
                projects[2].querySelector('p[class*="text-sm"]').textContent = t.chessSchoolDesc;
                projects[3].querySelector('h3').textContent = t.eduCenterTitle;
                projects[3].querySelector('p[class*="text-sm"]').textContent = t.eduCenterDesc;
                projects[4].querySelector('h3').textContent = t.aiStoryTitle;
                projects[4].querySelector('p[class*="text-sm"]').textContent = t.aiStoryDesc;
                projects[5].querySelector('h3').textContent = t.footageTitle;
                projects[5].querySelector('p[class*="text-sm"]').textContent = t.footageDesc;
                projects[6].querySelector('h3').textContent = t.sportHubTitle;
                projects[6].querySelector('p[class*="text-sm"]').textContent = t.sportHubDesc;
            }
        }

        // Section: Contact
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.querySelector('h2').textContent = t.letsBuild;
            contactSection.querySelector('p[class*="text-slate-400"]').textContent = t.openFor;

            const ctaLinks = contactSection.querySelectorAll('a.flex');
            if (ctaLinks.length >= 2) {
                ctaLinks[0].innerHTML = `<i class="fab fa-whatsapp text-2xl"></i> ${t.whatsappBtn}`;
                ctaLinks[1].innerHTML = `<i class="fas fa-envelope text-xl"></i> ${t.emailBtn}`;
            }
            contactSection.querySelector('p[class*="text-slate-600"]').textContent = t.copyright;
        }
    }

    // Run initializations
    updateLanguageButtonStyle();
    updatePageContent();
});
