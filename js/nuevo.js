const btn = document.querySelector('.btnCortina');


const typed = new Typed('.typed', {
    strings: [
        '<i class="palabra_spanA">Alfredo Castillo</i>', 
        '<i class="palabra_spanV">Desarrollador</i>',
        '<i class="palabra_spanV">Front-End</i>'
    ],
    // stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	// smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
}); 

/* -----------------------------------------------------------------------Efectos cuando la pantalla se carga */
function logoLinea(){
	let tl = gsap.timeline({
		repeat: 0
	})

	tl.from('.cont__linea1', {
	    duration: 1,
	    x: 500, 
	    scale: 0,
	    delay: 1,
	});

	tl.from('.cont__linea2', {
	    duration: 1,
	    x: -500, 
	    scale: 0,
	    delay: 0,
	} ,'-=0.5' );

	tl.from('.logosC_I', {
	    duration: 1,
	    y: -200, 
	    scale: 0,
	    stagger: 0.14,
		ease: 'back'

	} ,'-=1' );

	tl.to('.imgL', {
	    duration: 1,
		repeat: -1,
	    y: -5, 
	    stagger: 0.5,
		// ease: 'back',
		delay: 0.5,
		yoyo: true
	});
}

logoLinea();

function arriba(){
	let tween = gsap.from('.viewport2', {
		duration: 1,
		y: -300,
		scale: 0,
		// opacity: 1,
	});
}

function abajo(){
	let tween = gsap.to('.view1', {
		duration: 1,
		y: 300,
		scale: 0,
		opacity: 0,
		// display: none,
	});
}

btn.addEventListener('click', () => {
	const view2 = document.querySelector('.viewport2');
	const view1 = document.querySelector('.view1');
	abajo();
	setTimeout(() => {
		view1.style.display = 'none';
	}, 1000);
	setTimeout(() => {
		view2.style.display = 'block';
		view2.style.opacity = '1';
		arriba();
	}, 1000);
})