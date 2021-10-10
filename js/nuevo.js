const btn = document.querySelector('.btnCortina');


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