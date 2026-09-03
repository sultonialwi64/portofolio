<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'Software Engineer',
    company: 'CV Putra Melati',
    date: 'April 2026 – Sep 2026',
    points: [
      'Architected and developed a comprehensive Enterprise Resource Planning (ERP) system to optimize overarching business efficiency, enabling flexible, real-time data tracking and centralized management.',
      'Engineered a custom AI-driven Business Intelligence module by integrating Large Language Models (including Gemini and Grok), empowering business owners to instantly extract complex business insights via natural language queries.',
    ],
    stack: ['Laravel', 'Vue.js', 'MySQL', 'LLM Integration (Gemini, Grok)']
  },
  {
    role: 'IT & Systems Management',
    company: 'Missi Private Course',
    date: 'Jan 2026 – Present',
    points: [
      'Spearheaded the digital transformation of the institution by architecting and developing a tailored Management Information System (MIS) from the ground up.',
      'Acted as the technical lead to bridge business requirements with robust system architecture, specifically focusing on a comprehensive tutoring management system.',
      'Significantly reduced manual administrative overhead and improved overall institutional efficiency.'
    ],
    stack: []
  },
  {
    role: 'Programmer Intern',
    company: 'Rumah Sakit PKU Muhammadiyah Wonosobo',
    date: 'Agust 2026 – Present',
    points: [
      'Developed and maintained specialized non-clinical web applications, successfully transitioning manual administrative workflows into efficient digital systems.',
      'Engineered a dynamic scheduling management platform that optimized staff and resource allocation.',
      'Built a real-time automated security patrol reporting system, ensuring continuous compliance with facility safety standards and completely eliminating paper-based tracking logs.'
    ],
    stack: []
  },
  {
    role: 'IT Staff Intern',
    company: 'Dinas Pendidikan Pemuda dan Olahraga Kota Yogyakarta',
    date: 'Nov 2024 – Dec 2024',
    points: [
      'Developed an automated Room Booking System to replace manual paper-based logs, reducing booking processing time by 50% (from 10 minutes to under 5 minutes per request).',
      'Eliminated 100% of scheduling conflicts (double bookings) across the General & Personnel subdivision by implementing real-time database validation using Laravel.',
      'Digitized facility management for 9 divisions, improving data accuracy and approval speed by 30%.',
      'Achieved an "A" performance rating (95.6/100), recognized for excellence in discipline, teamwork, and technical initiative.'
    ],
    stack: ['Laravel']
  }
];

const projects = [
  {
    title: 'B2B Supply Chain & Inventory System',
    company: 'MBG Kitchen Supplier',
    date: 'Feb 2026',
    image: '/asset/B2B.png',
    bgImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
    points: [
      'Engineered a centralized B2B procurement system using Laravel 12 and Tailwind CSS to manage inventory and daily distributions across 3 distinct commercial kitchens.',
      'Automated daily grocery procurement by developing a dynamic "Shopping List" aggregator that automatically groups required items by category, date, and kitchen.',
      'Streamlined administrative operations by integrating automated email notifications, dynamic PDF invoice generation, and a scheduled daily database backup to Google Drive.'
    ],
    stack: ['Laravel 12', 'Tailwind CSS']
  },
  {
    title: 'Missi Private Course Management System',
    company: 'Missi Private Course',
    date: 'Jan 2026',
    image: '/asset/bimbel.png',
    bgImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop',
    points: [
      'Architected and developed a comprehensive Tutoring Management Information System (MIS) from the ground up, digitalizing core operations including student enrollment, scheduling, and payment processing.',
      'Engineered a dynamic tutor-student scheduling module that streamlined class coordination and eliminated manual scheduling conflicts.',
      'Built automated reporting dashboards to track student progress, daily attendance, and financial metrics, significantly reducing administrative overhead.'
    ],
    stack: ['Dashboard', 'Management', 'Analytics']
  },
  {
    title: 'Enterprise Resource Planning (ERP)',
    company: 'CV Putra Melati',
    date: 'Sep 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    points: [
      'Architected and developed a comprehensive ERP system to optimize overarching business efficiency.',
      'Enabled flexible, real-time operational data tracking and centralized management.',
      'Engineered a custom AI-driven Business Intelligence module by integrating LLMs (Gemini & Grok), empowering business owners to extract complex insights instantly via natural language queries.'
    ],
    stack: ['Laravel', 'Vue.js', 'LLM Integration']
  },
  {
    title: 'Operation Scheduling System',
    company: 'RS PKU Muhammadiyah Wonosobo',
    date: 'Ags 2026',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop',
    bgImage: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop',
    points: [
      'Developed a dynamic scheduling management platform that optimizes the allocation of medical staff and resources.',
      'Drastically reduced scheduling conflicts and accelerated coordination time across multiple hospital departments.',
      'Digitalized manual administrative workflows into a highly efficient, integrated digital system.'
    ],
    stack: ['Laravel', 'MySQL']
  },
  {
    title: 'Government Room Booking System',
    company: 'Dinas Pendidikan Pemuda dan Olahraga',
    date: 'Nov 2024',
    image: '/asset/ruang.png',
    bgImage: 'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?q=80&w=800&auto=format&fit=crop',
    points: [
      'Engineered an internal reservation system for the Department of Education featuring automated scheduling and conflict detection.',
      'Implemented real-time database validation, completely eliminating double-booking incidents across all government meeting rooms.',
      'Significantly accelerated the room reservation process by transitioning from paper-based forms to a centralized digital workflow.'
    ],
    stack: ['Laravel', 'MySQL']
  },
  {
    title: 'Sport Hub UI',
    company: 'UI/UX Design',
    date: '2024',
    image: '/asset/ux.png',
    bgImage: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=800&auto=format&fit=crop',
    points: [
      'Mobile app design for finding sports partners.',
      'Designed an intuitive user journey to ensure a seamless and engaging user experience.',
      'Delivered interactive prototyping and high-fidelity visual designs using Figma.'
    ],
    stack: ['Figma', 'Prototyping', 'UI/UX']
  }
];

onMounted(() => {
  const items = gsap.utils.toArray('.history-item');
  
  items.forEach((item) => {
    gsap.from(item, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
      }
    });
  });
});
</script>

<template>
  <section id="projects" class="bg-[#0f172a] relative py-32 px-6">
    <div class="max-w-5xl mx-auto w-full">
      <div class="mb-20">
        <h2 class="text-4xl md:text-6xl font-bold text-white mb-4">Experience & Work.</h2>
        <p class="text-slate-400 text-lg">A timeline of my professional journey and selected projects.</p>
      </div>
      
      <!-- Work Experience -->
      <div class="mb-32">
        <h3 id="work" class="scroll-mt-32 text-2xl font-bold text-slate-300 mb-12 border-b border-slate-800 pb-4">Work Experience</h3>
        
        <div class="relative border-l border-slate-700 ml-3 md:ml-0">
          <div v-for="(exp, index) in experiences" :key="index" class="history-item mb-16 pl-8 md:pl-12 relative group">
            <!-- Timeline dot -->
            <div class="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1.5 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            
            <div class="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h4 class="text-xl md:text-2xl font-bold text-white">{{ exp.role }}</h4>
              <span class="text-sm font-medium text-primary mt-1 md:mt-0">{{ exp.date }}</span>
            </div>
            <div class="text-lg text-slate-300 mb-4 font-medium">{{ exp.company }}</div>
            
            <ul class="list-disc list-outside ml-4 text-slate-400 space-y-2 mb-4">
              <li v-for="(point, i) in exp.points" :key="i" class="leading-relaxed">{{ point }}</li>
            </ul>
            
            <div v-if="exp.stack.length" class="flex flex-wrap gap-2 mt-4">
              <span v-for="tech in exp.stack" :key="tech" class="text-xs border border-slate-700 bg-slate-800/50 text-slate-300 px-3 py-1 rounded-full">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Selected Projects -->
      <div>
        <h3 id="selected-projects" class="scroll-mt-32 text-2xl font-bold text-slate-300 mb-12 border-b border-slate-800 pb-4">Selected Projects</h3>
        
        <div class="grid md:grid-cols-2 gap-8 lg:gap-16 items-start pb-20">
          <div v-for="(project, index) in projects" :key="index" 
               class="history-item group cursor-pointer"
               :class="{'md:mt-32': index % 2 !== 0}">
               
            <div class="relative overflow-hidden rounded-3xl aspect-[4/3] mb-8 magnetic shadow-2xl bg-slate-900 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)] transition-shadow duration-500">
              <!-- Background Industry Image -->
              <img :src="project.bgImage" alt="Industry Context" class="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-10 transition-opacity duration-700" />
              
              <!-- Floating UI Screenshot -->
              <div class="absolute inset-0 flex items-center justify-center p-4 md:p-8 perspective-1000">
                <img :src="project.image" :alt="project.title" class="w-full h-full object-cover rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] transform -rotate-3 scale-95 group-hover:rotate-0 group-hover:scale-100 transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]" />
              </div>
            </div>
            
            <div class="flex flex-col px-2">
              <h4 class="text-2xl lg:text-3xl font-bold text-white group-hover:text-primary transition-colors mb-4 leading-tight">
                {{ project.title }}
              </h4>
              <p class="text-slate-400 text-base leading-relaxed mb-6">
                {{ project.points[0] }}
              </p>
              
              <div class="flex gap-2 flex-wrap mt-auto">
                <span v-for="tag in project.stack" :key="tag" class="text-xs border border-slate-700 bg-slate-800/50 text-slate-300 px-3 py-1 rounded-full">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
