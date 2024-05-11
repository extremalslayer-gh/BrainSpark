let moreText = document.querySelectorAll('.card-container');

let moreButton1 = moreText[1].querySelector('.more');
let text1 = moreText[1].querySelector('.not-visible');
moreButton1.onclick = function(evt) {
    evt.preventDefault();
    moreButton1.classList.remove('visible');
    moreButton1.classList.add('not-visible');
    text1.classList.remove('not-visible');
    text1.classList.add('visible');

};

let moreButton2 = moreText[2].querySelector('.more');
let text2 = moreText[2].querySelector('.not-visible');
moreButton2.onclick = function(evt) {
    evt.preventDefault();
    moreButton2.classList.remove('visible');
    moreButton2.classList.add('not-visible');
    text2.classList.remove('not-visible');
    text2.classList.add('visible');
};

//gallery

let mainImage = document.querySelector('.main-gallery-image');
console.log(mainImage.src);

let galleryList = document.querySelectorAll('.gallery-link-button');
for (let image of galleryList){

    image.onclick = function(evt) {
        evt.preventDefault();
        document.querySelector('.gallery-active').classList.remove('gallery-active');
        image.classList.add('gallery-active');
        mainImage.src = image.href;
    };
}