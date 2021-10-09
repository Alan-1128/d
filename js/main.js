const pro1 = document.querySelector('.p1');
const pro2 = document.querySelector('.p2');
const pro3 = document.querySelector('.p3');
const pro4 = document.querySelector('.p4');

const ficha = document.querySelector('.ficha');

function  efec2(){
    let tween = gsap.from('.flex-container', {
        duration: 1,
        x: -800,
        scale: 0,
        // ease: 'back'
    });
}

const html1 = () => {

    ficha.innerHTML = '';

    const html = `
            <div class="flex-container containerCarta">
            <form class="form">
                <p class="form__input parrafo">APP DEL CLIMA</p>
                <p class="form__input txt">Aplicación con el consumo de una API</p>

                <ul class="ul">
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
            <img src="img/clima.png" alt="proyecto">
            </div>
        </div>
    `
    const divFicha = document.createElement('div');
    divFicha.innerHTML = html;
    ficha.append(divFicha)
    efec2()

}

const html2 = () => {

    ficha.innerHTML = '';

    const html = `
        <div class="flex-container">
            <form class="form">
                <p class="form__input parrafo">POKEDEX</p>
                <p class="form__input txt">Aplicación con el consumo de una API</p>

                <ul class="ul">
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
            <img src="img/poke.png" alt="proyecto">
            </div>
        </div>
    `
    const divFicha = document.createElement('div');
    divFicha.innerHTML = html;
    ficha.append(divFicha)
    efec2()
}

const html3 = () => {

    ficha.innerHTML = '';

    const html = `
        <div class="flex-container">
            <form class="form">
                <p class="form__input parrafo">ECOMMERCE</p>
                <p class="form__input txt">Maquetación de una plantilla de pagina</p>
                <ul class="ul">
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
            <img src="img/ecomerce.png" alt="proyecto">
            </div>
        </div>
    `
    const divFicha = document.createElement('div');
    divFicha.innerHTML = html;
    ficha.append(divFicha)
    efec2()
}

const html4 = () => {

    ficha.innerHTML = '';

    const html = `
        <div class="flex-container">
            <form class="form">
                <p class="form__input parrafo">Pagina de Viajes</p>
                <p class="form__input txt">Pagina web creada con condigo puro </p>
                <ul class="ul">
                <li class="li txt none" >Funciona con:</li>
                <li class="nuevo txt" >HTML</li>
                <li class="nuevo txt" >CSS con Flexbox, y Responsive Design.</li>
                <li class="nuevo txt" >JavaScript</li>
                </ul>
        <br>
        
                <p class="form__input">Demo: <a target="blank" href="https://sad-curran-0ce859.netlify.app/">Haga clic aquí</a></p>
                <p class="form__input">Código en GitHub: <a target="blank" href="https://github.com/Alan-1128/Pagina-Web-Turismo">Haga clic aquí</a></p>
            </form>
            <div class="form-img">
            <img src="img/climaCompleto.png" alt="proyecto">
            </div>
        </div>
    `
    const divFicha = document.createElement('div');
    divFicha.innerHTML = html;
    ficha.append(divFicha)
    efec2()

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
