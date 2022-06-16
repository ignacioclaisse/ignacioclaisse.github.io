var p = new Boolean(true);

function play() {

  if (p) {
    document.getElementById("pruebafondoindex").style.zIndex = "1";
    p = false;
  } else {
    document.getElementById("pruebafondoindex").style.zIndex = "-1";
    p = true;
  }


}







/*
var imagenuno = document.getElementById("imagenuno");
var imagendos = document.getElementById("imagendos");
var moving = false;

imagenuno.addEventListener("mousedown", initialClick, false);
imagendos.addEventListener("mousedown", initialClick, false);


function move(e){

  var newX = e.clientX - 10;
  var newY = e.clientY - 10;

  image.style.left = newX + "px";
  image.style.top = newY + "px";


}

function initialClick(e) {

  if(moving){
    document.removeEventListener("mousemove", move);
    moving = !moving;
    return;
  }

  moving = !moving;
  image = this;

  document.addEventListener("mousemove", move, false);

}

*/




let gMouseDownX = 0;
let gMouseDownY = 0;
let gMouseDownOffsetX = 0;
let gMouseDownOffsetY = 0;

function addListeners() {
    document.getElementById('pruebafondoindex').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
}

function mouseUp() {
    window.removeEventListener('mousemove', divMove, true);
}

function mouseDown(e) {
    gMouseDownX = e.clientX;
    gMouseDownY = e.clientY;

    var div = document.getElementById('pruebafondoindex');


    //The following block gets the X offset (the difference between where it starts and where it was clicked)
    let leftPart = "";
    if(!div.style.left)
        leftPart+="0px";    //In case this was not defined as 0px explicitly.
    else
        leftPart = div.style.left;
    let leftPos = leftPart.indexOf("px");
    let leftNumString = leftPart.slice(0, leftPos); // Get the X value of the object.
    gMouseDownOffsetX = gMouseDownX - parseInt(leftNumString,10);

    //The following block gets the Y offset (the difference between where it starts and where it was clicked)
    let topPart = "";
    if(!div.style.top)
        topPart+="0px";     //In case this was not defined as 0px explicitly.
    else
        topPart = div.style.top;
    let topPos = topPart.indexOf("px");
    let topNumString = topPart.slice(0, topPos);    // Get the Y value of the object.
    gMouseDownOffsetY = gMouseDownY - parseInt(topNumString,10);

    window.addEventListener('mousemove', divMove, true);
}

function divMove(e){
    var div = document.getElementById('pruebafondoindex');

    div.style.position = 'absolute';
    let topAmount = e.clientY - gMouseDownOffsetY;
    div.style.top = topAmount + 'px';
    let leftAmount = e.clientX - gMouseDownOffsetX;
    div.style.left = leftAmount + 'px';
}

addListeners();






/*

function addListeners() {
    document.getElementById('imagenuno').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
}

function mouseUp() {
    window.removeEventListener('mousemove', divMove, true);
}

function mouseDown() {
    window.addEventListener('mousemove', divMove, true);
}

function divMove(e){
    var div = document.getElementById('imagenuno');
    div.style.position = 'absolute';
    div.style.top = e.clientY + 'px';
    div.style.left = e.clientX + 'px';
}


addListeners();

*/


/*  Proyecto

video: {
  tpl:
    '<video class="fancybox-video" controls controlsList="nodownload">' +
    '<source src="{{src}}" type="{{format}}" />' +
    "Your browser doesn't support HTML5 video" +
    "</video>",
  format: "", // custom video format
  autoStart: true
}

*/



var c = new Boolean(true);

function izquierda() {

  if (c) {
    document.getElementById("header2").style.fontFamily = "timesnewroman";
    c = false;
  } else {
    document.getElementById("header2").style.fontFamily = "Helvetica";
    c= true;
  }


}

function derecha() {

  if (c) {
    document.getElementById("header2").style.fontFamily = "timesnewroman";
    c = false;
  } else {
    document.getElementById("header2").style.fontFamily = "Helvetica";
    c= true;
  }


}


//OnclickProjects

var b = 0;

var a = new Boolean(true);
var c3 = new Boolean(true);
var c4 = new Boolean(true);
var c5 = new Boolean(true);

//Proyecto 1

function carpeta1() {

  if (b == 0) {
    document.getElementById("carpeta").style.display = "none";
    b = 1;
  } else {
    document.getElementById("carpeta").style.display = "grid";
    b = 0;
  }

}

function carpeta2() {

  if (a) {
    document.getElementById("carpeta2").style.display = "none";
    a = false;
  } else {
    document.getElementById("carpeta2").style.display = "grid";
    a = true;
  }

}

//Proyecto 2

function carpeta3() {

  if (c3) {
    document.getElementById("carpeta3").style.display = "none";
    c3 = false;
  } else {
    document.getElementById("carpeta3").style.display = "grid";
    c3 = true;
  }

}

//Proyecto 3

function carpeta4() {

  if (c4) {
    document.getElementById("carpeta4").style.display = "none";
    c4 = false;
  } else {
    document.getElementById("carpeta4").style.display = "grid";
    c4 = true;
  }

}

//Proyecto 4

function carpeta5() {

  if (c5) {
    document.getElementById("carpeta5").style.display = "none";
    c5 = false;
  } else {
    document.getElementById("carpeta5").style.display = "grid";
    c5 = true;
  }

}



function mostraruno() {

  if (a) {
      document.getElementById("hide").style.visibility = "visible";
  }



}


var m = new Boolean(true);





//MOUSEOVER  WORKS



//MENOSSEIS

function menosseismouse() {

  document.getElementById("navmenosseis").style.display = "block";
  document.getElementById("menosseis").style.backgroundColor = "yellow";

}

function menosseismouseOut() {
  document.getElementById("navmenosseis").style.display = "none";
  document.getElementById("menosseis").style.backgroundColor = "transparent";

}



//MENOSCINCO

function menoscincomouse() {

  document.getElementById("navmenoscinco").style.display = "block";
  document.getElementById("menoscinco").style.backgroundColor = "yellow";

}

function menoscincomouseOut() {
  document.getElementById("navmenoscinco").style.display = "none";
  document.getElementById("menoscinco").style.backgroundColor = "transparent";

}



//MENOSCUATRO

function menoscuatromouse() {

  document.getElementById("navmenoscuatro").style.display = "block";
  document.getElementById("menoscuatro").style.backgroundColor = "yellow";

}

function menoscuatromouseOut() {
  document.getElementById("navmenoscuatro").style.display = "none";
  document.getElementById("menoscuatro").style.backgroundColor = "transparent";

}



//MENOSTRES

function menostresmouse() {

  document.getElementById("navmenostres").style.display = "block";
  document.getElementById("menostres").style.backgroundColor = "yellow";

}

function menostresmouseOut() {
  document.getElementById("navmenostres").style.display = "none";
  document.getElementById("menostres").style.backgroundColor = "transparent";

}




//MENOSDOS

function menosdosmouse() {

  document.getElementById("navmenosdos").style.display = "block";
  document.getElementById("menosdos").style.backgroundColor = "yellow";

}

function menosdosmouseOut() {
  document.getElementById("navmenosdos").style.display = "none";
  document.getElementById("menosdos").style.backgroundColor = "transparent";

}




//MENOSUNA

function menosunamouse() {

  document.getElementById("navmenosuna").style.display = "block";
  document.getElementById("menosuna").style.backgroundColor = "yellow";

}

function menosunamouseOut() {
  document.getElementById("navmenosuna").style.display = "none";
  document.getElementById("menosuna").style.backgroundColor = "transparent";

}




//UNA

function unamouse() {

  document.getElementById("navuna").style.display = "block";
  document.getElementById("una").style.backgroundColor = "yellow";

}

function unamouseOut() {
  document.getElementById("navuna").style.display = "none";
  document.getElementById("una").style.backgroundColor = "transparent";

}


//DOS

function dosmouse() {

  document.getElementById("navdos").style.display = "block";
  document.getElementById("dos").style.backgroundColor = "yellow";

}

function dosmouseOut() {
  document.getElementById("navdos").style.display = "none";
  document.getElementById("dos").style.backgroundColor = "transparent";

}


//TRES

function tresmouse() {

  document.getElementById("navtres").style.display = "block";
  document.getElementById("tres").style.backgroundColor = "yellow";

}

function tresmouseOut() {
  document.getElementById("navtres").style.display = "none";
  document.getElementById("tres").style.backgroundColor = "transparent";

}


//CUATRO

function cuatromouse() {

  document.getElementById("navcuatro").style.display = "block";
  document.getElementById("cuatro").style.backgroundColor = "yellow";

}

function cuatromouseOut() {
  document.getElementById("navcuatro").style.display = "none";
  document.getElementById("cuatro").style.backgroundColor = "transparent";

}


//CINCO

function cincomouse() {

  document.getElementById("navcinco").style.display = "block";
  document.getElementById("cinco").style.backgroundColor = "yellow";

}

function cincomouseOut() {
  document.getElementById("navcinco").style.display = "none";
  document.getElementById("cinco").style.backgroundColor = "transparent";

}


//SEIS

function seismouse() {

  document.getElementById("navseis").style.display = "block";
  document.getElementById("seis").style.backgroundColor = "yellow";

}

function seismouseOut() {
  document.getElementById("navseis").style.display = "none";
  document.getElementById("seis").style.backgroundColor = "transparent";

}


//SIETE

function sietemouse() {

  document.getElementById("navsiete").style.display = "block";
  document.getElementById("siete").style.backgroundColor = "yellow";

}

function sietemouseOut() {
  document.getElementById("navsiete").style.display = "none";
  document.getElementById("siete").style.backgroundColor = "transparent";

}


//OCHO


function ochomouse() {

  document.getElementById("navocho").style.display = "block";
  document.getElementById("ocho").style.backgroundColor = "yellow";

}

function ochomouseOut() {
  document.getElementById("navocho").style.display = "none";
  document.getElementById("ocho").style.backgroundColor = "transparent";

}

//NUEVE

function nuevemouse() {

  document.getElementById("navnueve").style.display = "block";
  document.getElementById("nueve").style.backgroundColor = "yellow";

}

function nuevemouseOut() {
  document.getElementById("navnueve").style.display = "none";
  document.getElementById("nueve").style.backgroundColor = "transparent";

}
