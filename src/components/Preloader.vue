<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const fonts = [
  'Arial, sans-serif',
  '"Times New Roman", serif',
  '"Courier New", monospace',
  'Georgia, serif',
  'Impact, sans-serif',
  '"Trebuchet MS", sans-serif',
  '"Brush Script MT", cursive',
  '"Lucida Console", monospace',
  '"Inter", sans-serif'
];

const currentFont = ref(fonts[0]);
const preloaderRef = ref(null);
const textRef = ref(null);

onMounted(() => {
  let fontIndex = 0;
  
  // Disable scroll during preloader
  document.body.style.overflow = 'hidden';
  
  const fontInterval = setInterval(() => {
    fontIndex++;
    if (fontIndex < fonts.length) {
      currentFont.value = fonts[fontIndex];
    } else {
      clearInterval(fontInterval);
      
      // Animate out sequence
      const tl = gsap.timeline();
      
      tl.to(textRef.value, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: 'power2.in'
      })
      .to(preloaderRef.value, {
        yPercent: -100,
        duration: 1.2,
        ease: 'expo.inOut',
        onComplete: () => {
          document.body.style.overflow = '';
        }
      });
    }
  }, 200); // Change font every 200ms
});
</script>

<template>
  <div 
    ref="preloaderRef" 
    class="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f172a] text-white"
  >
    <div class="flex items-center gap-5">
      <span class="text-4xl md:text-5xl font-bold text-primary">//</span>
      <h1 
        ref="textRef"
        class="text-5xl md:text-6xl text-white transition-all duration-75 m-0 p-0 leading-none"
        :style="{ fontFamily: currentFont }"
      >
        Hallo
      </h1>
    </div>
  </div>
</template>
