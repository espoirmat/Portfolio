
if (window.matchMedia("(min-width: 401px)").matches) 
{
    let slides = document.getElementsByClassName("slider__slide");
    let navlinks = document.getElementsByClassName("slider__navlink");
    let currentSlide = 0;

    document.getElementById("nav-button--next").addEventListener("click", () => {
        changeSlide(currentSlide + 1)
    });
    document.getElementById("nav-button--prev").addEventListener("click", () => {
        changeSlide(currentSlide - 1)
    });
    /* c'est ici que la magie à commencer à opérer chercher pas à savoir j'ai la flemme d'ecrire la réation des codes si dessous 
        bref je m'en fous devine!   */
        
    function changeSlide(moveTo) {
        if (moveTo >= slides.length) {moveTo = 0;}
        if (moveTo < 0) {moveTo = slides.length - 1;}
        
        slides[currentSlide].classList.toggle("active");
        navlinks[currentSlide].classList.toggle("active");
        slides[moveTo].classList.toggle("active");
        navlinks[moveTo].classList.toggle("active");
        
        currentSlide = moveTo;
    }

    document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
        bullet.addEventListener('click', () => {
            if (currentSlide !== bulletIndex) {
                changeSlide(bulletIndex);
            }
        })
    })
} else
{
    alert("PAge en desous de 600px");
}



