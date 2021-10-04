const pro1 = document.querySelector('.p1');
const pro2 = document.querySelector('.p2');
const pro3 = document.querySelector('.p3');
const pro4 = document.querySelector('.p4');

const ficha = document.querySelector('.ficha');

let tween = gsap.from('.containerCarta', {
    duration: .5,
    y: -200, //'random(-500,500)',
    scale: 0,
});

const html1 = () => {

    ficha.innerHTML = '';

    const html = `
            <div class="flex-container containerCarta">
            <form class="form">
                <p class="form__input parrafo">APP DEL CLIMA</p>
                <p class="form__input txt">Aplicación con el consumo de una API, se puede utilizar para buscar 
                el clima y temperaturas de los paises y ciudades del mundo.</p>

                <ul>
                <li class="li txt none" >API: Open Weather Map</li>
                <li class="li txt none" >Funciona con:</li>
                <li class="nuevo txt" >HTML</li>
                <li class="nuevo txt" >CSS con Flexbox, y Responsive Design.</li>
                <li class="nuevo txt" >JavaScript</li>
                </ul>
        <br>
                <p class="form__input">Demo: <a target="blank" href="https://github.com/Alan-1128/App-Clima">Haga clic aquí</a></p>
                <p class="form__input">Código en GitHub: <a target="blank" href="https://github.com/Alan-1128/App-Clima">Haga clic aquí</a></p>
            </form>
            
            <div class="form-img">
            <img src="clima.png" alt="proyecto">
            </div>
        </div>
    `
    const divFicha = document.createElement('div');
    divFicha.innerHTML = html;
    ficha.append(divFicha)
}

const html2 = () => {

    ficha.innerHTML = '';

    const html = `
        <div class="flex-container">
            <form class="form">
                <p class="form__input parrafo">POKEDEX</p>
                <p class="form__input txt">Aplicación con el consumo de una API, se puede utilizar para buscar 
                pokemones </p>

                <ul>
                <li class="li txt none" >API: PokeApi</li>
                <li class="li txt none" >Funciona con:</li>
                <li class="nuevo txt" >HTML</li>
                <li class="nuevo txt" >CSS con Flexbox, y Responsive Design.</li>
                <li class="nuevo txt" >JavaScript</li>
                </ul>
        <br>
                <p class="form__input"  >Demo: <a target="blank" href="https://alan-1128.github.io/App-Pokemon/">Haga clic aquí</a></p>
                <p class="form__input" >Código en GitHub: <a target="blank" href="https://github.com/Alan-1128/App-Pokemon">Haga clic aquí</a></p>

            </form>
            <div class="form-img">
            <img src="poke.png" alt="proyecto">
            </div>
        </div>
    `
    const divFicha = document.createElement('div');
    divFicha.innerHTML = html;
    ficha.append(divFicha)
}

const html3 = () => {

    ficha.innerHTML = '';

    const html = `
        <div class="flex-container">
            <form class="form">
                <p class="form__input parrafo">ECOMMERCE</p>
                <p class="form__input txt">Maquetación de una plantilla de pagina web, con algunas modificaciones. En su mayoria esta echa con codigo puro, solo se utilizo una libreria</p>
                <ul>
                <li class="li txt none " >Libreria: Particles.js</li>
                <li class="li txt none" >Funciona con:</li>
                <li class="nuevo txt" >HTML</li>
                <li class="nuevo txt" >CSS con Flexbox, y Responsive Design.</li>
                <li class="nuevo txt" >JavaScript</li>
                </ul>
        <br>
                <p class="form__input">Demo: <a target="blank" href="https://alan-1128.github.io/Ecommerce/">Haga clic aquí</a></p>
                <p class="form__input">Código en GitHub: <a target="blank" href="https://github.com/Alan-1128/Ecommerce
                ">Haga clic aquí</a></p>
            </form>
            <div class="form-img">
            <img src="ecomerce.png" alt="proyecto">
            </div>
        </div>
    `
    const divFicha = document.createElement('div');
    divFicha.innerHTML = html;
    ficha.append(divFicha)
}

const html4 = () => {

    ficha.innerHTML = '';

    const html = `
        <div class="flex-container">
            <form class="form">
                <p class="form__input parrafo">Pagina de Viajes</p>
                <p class="form__input txt">Pagina web creada con condigo puro </p>
                <ul>
                <li class="li txt none" >Funciona con:</li>
                <li class="nuevo txt" >HTML</li>
                <li class="nuevo txt" >CSS con Flexbox, y Responsive Design.</li>
                <li class="nuevo txt" >JavaScript</li>
                </ul>
        <br>
                <p class="form__input">Demo: <a target="blank" href="https://alan-1128.github.io/Pagina-Web-Turismo/">Haga clic aquí</a></p>
                <p class="form__input">Código en GitHub: <a target="blank" href="https://github.com/Alan-1128/Pagina-Web-Turismo">Haga clic aquí</a></p>
            </form>
            <div class="form-img">
            <img src="climaCompleto.png" alt="proyecto">
            </div>
        </div>
    `
    const divFicha = document.createElement('div');
    divFicha.innerHTML = html;
    ficha.append(divFicha)
}


pro1.addEventListener('click', (e) => {
    e.preventDefault();
    pro1.classList.add('activo');
    pro2.classList.remove('activo');
    pro3.classList.remove('activo');
    pro4.classList.remove('activo');
    html1();


})

pro2.addEventListener('click', (e) => {
    e.preventDefault();
    pro1.classList.remove('activo');
    pro2.classList.add('activo');
    pro3.classList.remove('activo');
    pro4.classList.remove('activo');
    html2();

})

pro3.addEventListener('click', (e) => {
    e.preventDefault();
    pro1.classList.remove('activo');
    pro2.classList.remove('activo');
    pro3.classList.add('activo');
    pro4.classList.remove('activo');
    html3();

})

pro4.addEventListener('click', (e) => {
    e.preventDefault();
    pro1.classList.remove('activo');
    pro2.classList.remove('activo');
    pro3.classList.remove('activo');
    pro4.classList.add('activo');
    html4();

})
