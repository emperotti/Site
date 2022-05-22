const image = document.querySelector('wpp');
image.addEventListener('click', (event) => {
  const { src } = event.target;
  alert(`Atributo de origem da imagem: "${src}".`);
  // Redirecionar para outra página:
  location.replace(src);
});