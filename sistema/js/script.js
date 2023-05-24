// Selección de elementos li en el top side-menu de la barra lateral
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

// Agregar un escuchador de eventos de clic a cada elemento li
allSideMenu.forEach(item => {
	// Obtener el elemento li padre del elemento actual
	const li = item.parentElement;

	// Agregar un escuchador de eventos de clic al elemento actual
	item.addEventListener('click', function () {
		// Remover la clase 'active' de todos los elementos li
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		// Agregar la clase 'active' al elemento li actual
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR (Barra lateral)
// Mostrar u ocultar la barra lateral cuando se hace clic en el botón de menú
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})

// Manejar el botón y el formulario de búsqueda
const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	// Verifica si el ancho de la ventana es menor que 576 píxeles
	if (window.innerWidth < 576) {
		// Previene el comportamiento por defecto del botón (submit)
		e.preventDefault();
		// Añade o elimina la clase 'show' en el formulario de búsqueda
		searchForm.classList.toggle('show');
		// Si el formulario tiene la clase 'show'
		if (searchForm.classList.contains('show')) {
			// Reemplaza la clase 'bx-search' por 'bx-x' en el ícono del botón
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
			// De lo contrario, reemplaza la clase 'bx-x' por 'bx-search' en el ícono del botón
		} else {
			// De lo contrario, reemplaza la clase 'bx-x' por 'bx-search' en el ícono del botón
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





// Si el ancho de la ventana es menor que 768 píxeles
if (window.innerWidth < 768) {
	// Añade la clase 'hide' al menú lateral
	sidebar.classList.add('hide');
	// Si el ancho de la ventana es mayor que 576 píxeles
} else if (window.innerWidth > 576) {
	// Reemplaza la clase 'bx-x' por 'bx-search' en el ícono del botón de búsqueda
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	// Elimina la clase 'show' del formulario de búsqueda
	searchForm.classList.remove('show');
}

// Agrega un evento de cambio a la ventana
window.addEventListener('resize', function () {
	// Si el ancho de la ventana es mayor que 576 píxeles
	if (this.innerWidth > 576) {
		// Reemplaza la clase 'bx-x' por 'bx-search' en el ícono del botón de búsqueda
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		// Elimina la clase 'show' del formulario de búsqueda
		searchForm.classList.remove('show');
	}
})


// Obtiene el elemento de conmutación de modo
const switchMode = document.getElementById('switch-mode');

// Agrega un evento de cambio al interruptor de modo
switchMode.addEventListener('change', function () {
	// Si el interruptor está activado
	if (this.checked) {
		// Agrega la clase 'dark' al cuerpo del documento
		document.body.classList.add('dark');
	} else {
		// De lo contrario, elimina la clase 'dark' del cuerpo del documento
		document.body.classList.remove('dark');
	}
})