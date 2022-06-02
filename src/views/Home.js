import next from '@icons/next.png';
import Characters from '@images/Characters.png';
import Planets from '@images/Planets.png';
import Films from '@images/Films.png';
import Species from '@images/Species.png';
import Vehicles from '@images/Vehicles.png';
import Starships from '@images/Starships.png';


const home = () => {
    const mainContent = document.getElementById('root');
    const view = `
    <h2 class="main-message">WELCOME MY YOUNG PADAWAN</h2>
    <section class="carousel-container">
        <div id="left-arrow" class="carousel-container__left-arrow">
            <img src=${next} alt="left arrow">
        </div>
        <div id="right-arrow" class="carousel-container__right-arrow">
            <img src=${next}>
        </div>
        <section id="carousel" class="carousel">
            <div class="carousel-element">
                <a href="/#/Characters">
                    <img class="carousel-element__image" src=${Characters} alt="Characters">
                    <div class="carousel-element__content">
                        <h3>Characters</h3>
                    </div>
                </a>
            </div>
            <div class="carousel-element">
                <a href="/#/Planets">
                    <img class="carousel-element__image" src=${Planets} alt="Planets">
                    <div class="carousel-element__content">
                        <h3>Planets</h3>
                    </div>
                </a>
            </div>
            <div class="carousel-element">
                <a href="/#/Films">
                    <img class="carousel-element__image" src=${Films} alt="Films">
                    <div class="carousel-element__content">
                        <h3>Films</h3>
                    </div>
                </a>
            </div>
            <div class="carousel-element">
                <a href="/#/Species">
                    <img class="carousel-element__image" src=${Species} alt="Species">
                    <div class="carousel-element__content">
                        <h3>Species</h3>
                    </div>
                </a>
            </div>
            <div class="carousel-element">
                <a href="/#/Vehicles">
                    <img class="carousel-element__image" src=${Vehicles} alt="Vehicles">
                    <div class="carousel-element__content">
                        <h3>Vehicles</h3>
                    </div>
                </a>
            </div>
            <div class="carousel-element">
                <a href="/#/Starships">
                    <img class="carousel-element__image" src=${Starships} alt="Starships">
                    <div class="carousel-element__content">
                        <h3>Starships</h3>
                    </div>    
                </a>
            </div>
        </section>
    </section>
    `
    mainContent.innerHTML = view;
    addEvents();
}

function addEvents() {
    const carousel = document.getElementById('carousel');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    
    leftArrow.addEventListener("click", function() {
        move(carousel, 'left')
    });
    
    rightArrow.addEventListener("click", function() {
        move(carousel, 'right')
    });
}

function move(element, direction) {
    const step = 500;
    let currentScroll = element.scrollLeft;
    
    if (direction === 'right') {
        element.scrollTo(currentScroll + step, 0);
    } else if (direction === 'left') {
        element.scrollTo(currentScroll - step, 0);
    }
}

export default home;