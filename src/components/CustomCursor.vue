<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

const cursor = ref(null);

onMounted(() => {
  // Set GSAP quickSetter for performance
  const xTo = gsap.quickTo(cursor.value, "x", { duration: 0.1, ease: "power3" });
  const yTo = gsap.quickTo(cursor.value, "y", { duration: 0.1, ease: "power3" });

  const onMouseMove = (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  };

  window.addEventListener('mousemove', onMouseMove);

  // Add magnetic and hover effects to interactive elements
  const interactives = document.querySelectorAll('a, button, .magnetic');
  
  interactives.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      gsap.to(cursor.value, { scale: 3, backgroundColor: 'transparent', border: '1px solid white', duration: 0.3 });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(cursor.value, { scale: 1, backgroundColor: 'white', border: 'none', duration: 0.3 });
      gsap.to(el, { x: 0, y: 0, duration: 0.3, ease: 'power3.out' });
    });
    
    // Magnetic effect
    if (el.classList.contains('magnetic')) {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.3; // Magnet strength
            const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
            gsap.to(el, { x, y, duration: 0.3, ease: 'power3.out' });
        });
    }
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove);
  });
});
</script>

<template>
  <div ref="cursor" class="custom-cursor pointer-events-none fixed top-0 left-0 w-4 h-4 bg-white rounded-full z-[9999] mix-blend-difference hidden md:block"></div>
</template>
