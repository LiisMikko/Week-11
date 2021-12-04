const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];


myButton.addEventListener('click', changeImage);

function changeImage() {

    let randomIndex = Math.floor(Math.random() * images.lenght);
    console.log(randomIndex);
    image.style.backgroundImage = images[randomIndex];
    image.src = "images/1.jpg"
    image.src = "images/2.jpg"
    image.src = "images/3.jpg"
    image.src = "images/4.jpg"

}