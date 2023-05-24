// Seleccionamos el botón para mostrar/ocultar contraseña
const togglePassword = document.querySelector('.toggle-password');

// Seleccionamos el campo de contraseña
const password = document.querySelector('#password');

// Añadimos un evento de clic al botón de mostrar/ocultar contraseña
togglePassword.addEventListener('click', function() {
  // Cambia el tipo de entrada del campo de contraseña para mostrar u ocultar la contraseña
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  
  // Cambia el icono del botón de mostrar/ocultar contraseña
  togglePassword.querySelector('i').classList.toggle('fa-eye-slash');
  togglePassword.querySelector('i').classList.toggle('fa-eye');
});
