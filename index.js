const littleblack = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
];

const $image = document.getElementById("gallery");
const image = [ ];

for(let img of littleblack) {
    image.push(`<div data-picture="cat${img}-2.jpg" class="image"><img src="image/${img}.jpg"></div>`)
}

console.log(image)

$image.innerHTML = image.join(' ') + $image.innerHTML;




//const pix = [
//    value inside the pic. sample: 1.jpg, cat.jpg, dog.jpg
//]
//const HTMLforPics = [];
//for(i = 0, i< pix.length; i++){
//    
//}
//for of loop
//for(let picture of pix){
//   consloe.log(picture)
//     HTMLforPics.push(``)
//}
//console.log(HTMLforPics); show on the page(insert)

const $Allimages = document.querySelectorAll(".image");
const $gallery = document.querySelector(".gallery");
const $overlay = document.getElementById("overlay");

for(let myimage of $Allimages) {
    myimage.addEventListener("click", function(event){
        $overlay.classList.add("show")
        $overlay.innerHTML = `<img src="./image/${myimage.getAttribute(`data-picture`)}">`
    })
}
$overlay.addEventListener("click", function(event){
    $overlay.classList.remove("show")
})




//add text over image

//const textOver = "I'm Thinking";
//const thinking = document.getElementById("textOver");
//thinking.textContent = textOver;