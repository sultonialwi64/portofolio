<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  const tl = gsap.timeline({ delay: 2.8 });
  
  tl.from('.hero-title span', {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.1,
    ease: 'power4.out',
  })
  .from('.hero-subtitle', {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'power3.out',
  }, "-=0.8")
  .from('.hero-image', {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
  }, "-=1");

  // Parallax on image
  gsap.to('.hero-image', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '#home',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });
});
</script>

<template>
  <section id="home" class="min-h-screen relative flex items-center justify-center p-6 overflow-hidden py-32">
    <div class="absolute top-20 right-20 w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[100px] -z-10"></div>
    
    <div class="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div class="z-10 mt-10">
        <p class="hero-subtitle text-primary font-semibold mb-4 tracking-wider uppercase text-sm">Hello, I am</p>
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] overflow-hidden">
          <div class="hero-title"><span class="inline-block">Ahmad</span></div>
          <div class="hero-title"><span class="inline-block">Sultoni</span></div>
          <div class="hero-title"><span class="inline-block">Alwi.</span></div>
        </h1>
        
        <h2 class="hero-subtitle text-2xl md:text-3xl font-bold text-slate-200 mb-6 leading-tight">
          Bridging the gap between Design and Engineering.
        </h2>
        
        <p class="hero-subtitle max-w-lg text-lg text-slate-400 mb-8 leading-relaxed">
          I am a Software Engineer with a strong foundation in <strong>Full-Stack Web Development</strong>. Currently active as a Freelance IT Consultant, I help businesses transform their ideas into scalable digital products.
        </p>

        <div class="hero-subtitle mb-8">
          <p class="text-sm text-slate-500 mb-4 uppercase tracking-widest">Tech Stack</p>
          <div class="flex flex-wrap gap-6 text-3xl text-slate-400">
            <i class="fab fa-laravel hover:text-red-600 transition-colors" title="Laravel"></i>
            <i class="fab fa-php hover:text-purple-600 transition-colors" title="PHP"></i>
            <i class="fab fa-js hover:text-yellow-400 transition-colors" title="JavaScript"></i>
            <i class="fab fa-figma hover:text-pink-500 transition-colors" title="Figma"></i>
            <i class="fas fa-database hover:text-blue-400 transition-colors" title="Database"></i>
            <img src="/asset/antigrav.png" alt="Antigravity" class="h-[32px] w-auto object-contain opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all cursor-pointer" title="Antigravity">
            <img src="/asset/opencode-logo-dark.png" alt="OpenCode" class="h-[32px] w-auto object-contain opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all cursor-pointer" title="OpenCode">
          </div>
        </div>
      </div>
      
      <div class="hero-image relative group mx-auto md:ml-auto max-w-sm md:max-w-md w-full">
        <div class="absolute -inset-2 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-30"></div>
        <img src="/asset/foto_profile1.png" alt="Profile" class="relative rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover transition-all duration-700" />
      </div>
    </div>
  </section>
</template>
