<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  gsap.from('.nav-item', {
    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'power3.out',
    delay: 0.5
  });
});
</script>

<template>
  <nav class="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference text-white">
    <a href="#home" class="text-xl font-bold nav-item">
      SULTONI.<span class="text-slate-400 font-light">ALWI</span>
    </a>
    <div class="flex gap-6">
      <a href="#work" class="nav-item magnetic px-2 hover:text-slate-300 transition-colors">Work</a>
      <a href="#selected-projects" class="nav-item magnetic px-2 hover:text-slate-300 transition-colors">Project</a>
      <a href="#contact" class="nav-item magnetic px-2 hover:text-slate-300 transition-colors">Contact</a>
    </div>
  </nav>
</template>
