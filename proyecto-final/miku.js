let currentIndex = 0;

  function moveSlide(direction) {
    const images = document.getElementById('carouselImages');
    const totalImages = images.children.length;

    currentIndex += direction;

    if (currentIndex < 0) currentIndex = totalImages - 1;
    if (currentIndex >= totalImages) currentIndex = 0;

    const offset = -currentIndex * 78;
    images.style.transform = `translateX(${offset}%)`;
  }
  const colores = ['#e13974', '#00a6ff', '#000000', '#f375ec', '#ff00ff', '#00ffff', '#ffffff'];
      
  document.addEventListener('mousemove', e => {
    const star = document.createElement('div');
    star.classList.add('star');

    const color = colores[Math.floor(Math.random() * colores.length)];
    star.style.backgroundColor = color;

    star.style.left = `${e.pageX - 10}px`; // Centra la estrella
    star.style.top = `${e.pageY - 10}px`;

    document.body.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 1000);
  });
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".close");
  
  document.querySelectorAll(".item img").forEach(img => {
    img.addEventListener("click", () => {
      const imgOriginal = new Image();
      imgOriginal.src = img.src;
  
      imgOriginal.onload = () => {
        const screenW = window.innerWidth * 0.9;
        const screenH = window.innerHeight * 0.9;
  
        let width = imgOriginal.width;
        let height = imgOriginal.height;
  
        // Escalar si la imagen es demasiado grande
        if (width > screenW || height > screenH) {
          const widthRatio = screenW / width;
          const heightRatio = screenH / height;
          const scale = Math.min(widthRatio, heightRatio);
  
          width *= scale;
          height *= scale;
        }
  
        lightboxImg.style.width = width + "px";
        lightboxImg.style.height = height + "px";
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
  
        lightbox.style.display = "flex";
      };
    });
  });
  
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
  
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
  function abrecierra(){
    document.querySelector('.menu-flex').classList.toggle('alto');
}
  
