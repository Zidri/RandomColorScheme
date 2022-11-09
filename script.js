//initialise RGB values
var red = 0;
var green = 0;
var blue = 0;

function randNum() {
    var min = 0;
    var max = 255;

    //random number with min and max
    var rand = Math.floor(Math.random() * (parseInt(max) - parseInt(min))) + parseInt(min) + 1;

    return rand;
}

function randColor() {
    //get RBG values for color
    red = randNum();
    green = randNum();
    blue = randNum();
}

function generate() {


    //get bg color
    randColor();

    //display color
    //change CSS color
    document.querySelector(':root').style.setProperty('--bgColor', 'rgb(' + red + ',' + green + ',' + blue + ')');
    //display rgb
    document.getElementById("bgRGB").innerHTML = 'rgb(' + red + ',' + green + ',' + blue + ')';

    //get head color
    randColor();
    //display color
    //change CSS color
    document.querySelector(':root').style.setProperty('--headColor', 'rgb(' + red + ',' + green + ',' + blue + ')');
    //display rgb
    document.getElementById("headRGB").innerHTML = 'rgb(' + red + ',' + green + ',' + blue + ')';

    //get text color
    randColor();
    //display color
    //change CSS color
    document.querySelector(':root').style.setProperty('--textColor', 'rgb(' + red + ',' + green + ',' + blue + ')');
    //display rgb
    document.getElementById("textRGB").innerHTML = 'rgb(' + red + ',' + green + ',' + blue + ')';

    //get accent color
    randColor();
    //display color
    //change CSS color
    document.querySelector(':root').style.setProperty('--accentColor', 'rgb(' + red + ',' + green + ',' + blue + ')');
    //display rgb
    document.getElementById("accentRGB").innerHTML = 'rgb(' + red + ',' + green + ',' + blue + ')';


    //get btnbg color
    randColor();
    //display color
    //change CSS color
    document.querySelector(':root').style.setProperty('--btnbgColor', 'rgb(' + red + ',' + green + ',' + blue + ')');
    //display rgb
    document.getElementById("btnbgRGB").innerHTML = 'rgb(' + red + ',' + green + ',' + blue + ')';



}