function mostrarInfo(elemento) {
  const info = elemento.querySelector('.info');
  info.style.display = info.style.display === 'block' ? 'none' : 'block';

  // Marcar como completada al hacer doble clic
  if (elemento.classList.contains('completada')) {
    elemento.classList.remove('completada');
  } else {
    elemento.classList.add('completada');
  }
}
