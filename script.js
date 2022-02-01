var imgs = [
    'Mountain.jpg', //0
    'fantasy.jpg',  //1
    "moon.jpg",     //2
    "forset.jpg",//3
    "kitten.jpg",    //4
    "smoke.jpg",      //5
    "color.jpg",    //6
    "city.jpg"      //7

];

var btn = document.querySelector('button');
var img = document.querySelector('img');
var count = 1;

btn.addEventListener('click', function() {
    if (count === 8) {
        count = 0
    }
    img.src=  imgs[count]
    count= count + 1
});
