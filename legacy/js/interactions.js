function switchMode(mode, updateHash = true) {
  const devContent = document.getElementById('portfolio-dev');
  const videoContent = document.getElementById('portfolio-video');
  const btnDev = document.getElementById('btn-dev');
  const btnVideo = document.getElementById('btn-video');

  if (mode === 'dev') {
    devContent.classList.remove('hidden');
    videoContent.classList.add('hidden');
    
    btnDev.className = "px-6 py-2.5 rounded-full text-sm font-medium transition-all text-slate-300 flex items-center gap-2 bg-slate-700/50";
    btnVideo.className = "px-6 py-2.5 rounded-full text-sm font-medium transition-all text-slate-300 hover:text-white flex items-center gap-2 bg-transparent";
    if (updateHash) history.replaceState(null, '', '#developer');
  } else {
    devContent.classList.add('hidden');
    videoContent.classList.remove('hidden');
    
    btnVideo.className = "px-6 py-2.5 rounded-full text-sm font-bold transition-all text-white bg-pink-600 shadow-lg shadow-pink-600/30 flex items-center gap-2";
    btnDev.className = "px-6 py-2.5 rounded-full text-sm font-medium transition-all text-slate-300 hover:text-white flex items-center gap-2 bg-transparent";
    if (updateHash) history.replaceState(null, '', '#video-editor');
  }
}

// Baca hash saat halaman pertama dibuka
(function initFromHash() {
  const hash = window.location.hash;
  if (hash === '#video-editor') {
    switchMode('video', false);
  } else {
    switchMode('dev', false);
  }
})();

function openVideoModal(type, id) {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-iframe');
  const isPortrait = (id === '1rvGuPzuXlvvy0KanpvXIaVkbMu0KG7Y0');

  // Adjust modal size for portrait videos
  const innerBox = modal.querySelector('.relative.w-full');
  if (isPortrait) {
    innerBox.className = 'relative w-full max-w-sm bg-black rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/20 aspect-[9/16]';
  } else {
    innerBox.className = 'relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/20';
  }

  if (type === 'youtube') {
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  } else {
    iframe.src = `https://drive.google.com/file/d/${id}/preview`;
  }
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-iframe');
  iframe.src = '';
  modal.classList.remove('flex');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}
