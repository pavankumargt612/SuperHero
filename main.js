var canvas=new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_object="";
var block_image_object="";

function player_update(){

fabric.Image.fromURL("player.png" , function(Img){
player_object=Img;

player_object.scaleToWidth(150);
player_object.scaleToHeigth(140);
player_object.set({
left:player_x,
top:player_y    
});
canvas.add(player_object);
});
}

function new_image(get_image){

    fabric.Image.fromURL(get_image , function(Img){
    block_image_object=Img;
    
    block_image_object.scaleToWidth(150);
    block_image_object.scaleToHeigth(140);
    block_image_object.set({
    left:player_x,
    top:player_y    
    });
    canvas.add(block_image_object);
    });
    }