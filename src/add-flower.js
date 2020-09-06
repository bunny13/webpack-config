import flower from "./flower.jpeg";

function addImage() {
    const img = document.createElement('img');
    img.alt = 'flower';
    img.width = 300;
    img.src = flower;
    const body = document.querySelector('body');
    body.appendChild(img);

}

export default addImage;