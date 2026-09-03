<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  gsap.from('.contact-reveal', {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 80%',
    }
  });
});
</script>

<template>
  <section id="contact" class="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-darker relative overflow-hidden">
    <div class="text-center w-full max-w-4xl z-10">
      <h2 class="contact-reveal text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
        Let's work<br/><span class="text-slate-500">together.</span>
      </h2>
      
      <div class="contact-reveal flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
        <a href="https://wa.me/62895339194375" class="magnetic rounded-full bg-white text-black px-12 py-5 font-bold text-lg flex items-center gap-3 hover:scale-105 transition-transform">
          <i class="fab fa-whatsapp text-2xl"></i> Chat on WhatsApp
        </a>
        <a href="mailto:Sultonialwi64@gmail.com" class="magnetic rounded-full border border-slate-600 text-white px-12 py-5 font-bold text-lg flex items-center gap-3 hover:bg-white hover:text-black transition-colors">
          <i class="fas fa-envelope text-xl"></i> Send Email
        </a>
      </div>
    </div>
    
    <div class="absolute bottom-6 text-slate-600 text-sm contact-reveal">
      <p>&copy; 2026 Ahmad Sultoni Alwi. Built with Vue & GSAP.</p>
    </div>
  </section>
</template>
