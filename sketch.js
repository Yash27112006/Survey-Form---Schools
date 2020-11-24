var peopleCount = 0;
var database;

function setup(){
    var canvas = createCanvas(displayWidth+400,displayHeight+5);
    database = firebase.database();
    form = new Form();
    form.display();
    user = new User();
}

function draw(){
    background("pink")
}


