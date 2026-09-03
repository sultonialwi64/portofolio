<script setup>
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import CustomCursor from './components/CustomCursor.vue'
import Preloader from './components/Preloader.vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/sections/Hero.vue'
import Projects from './components/sections/Projects.vue'
import Contact from './components/sections/Contact.vue'

gsap.registerPlugin(ScrollTrigger)

let lenis;

onMounted(() => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    infinite: false,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  
  gsap.ticker.lagSmoothing(0)

  // Premium page transition
  let isAnimating = false;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      if (isAnimating) return;
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      let targetName = this.innerText.trim();
      
      if (!targetElement) return;

      isAnimating = true;

      const overlay = document.querySelector('.transition-overlay');
      const text = document.querySelector('.transition-text');
      
      if (targetName.includes('SULTONI') || targetName === '') {
        targetName = 'Home';
      }
      
      text.innerText = targetName;
      
      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating = false;
        }
      });
      
      // Force reset any conflicting tweens
      gsap.killTweensOf([overlay, text]);
      
      tl.set(overlay, { yPercent: 100, display: "flex" })
        .set(text, { opacity: 0, y: 30 })
        .to(overlay, {
          yPercent: 0,
          duration: 0.8,
          ease: "expo.inOut"
        })
        .to(text, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => {
            history.pushState(null, null, targetId);
            lenis.scrollTo(targetElement, { immediate: true });
          }
        })
        .to(text, {
          opacity: 0,
          y: -30,
          duration: 0.4,
          delay: 0.4,
          ease: "power2.in"
        })
        .to(overlay, {
          yPercent: -100,
          duration: 0.8,
          ease: "expo.inOut"
        })
        .set(overlay, { display: "none" });
    });
  });
})

onUnmounted(() => {
  if (lenis) {
    lenis.destroy()
  }
})
</script>

<template>
  <Preloader />
  <CustomCursor />
  <Navbar />
  
  <!-- Premium Transition Overlay -->
  <div class="transition-overlay fixed inset-0 z-[100] bg-[#0a1120] flex items-center justify-center" style="display: none;">
    <h2 class="transition-text text-4xl md:text-6xl font-bold text-white opacity-0 transform"></h2>
  </div>

  <main class="relative z-10 w-full overflow-hidden bg-darker">
    <Hero />
    <Projects />
    <Contact />
  </main>
</template>
