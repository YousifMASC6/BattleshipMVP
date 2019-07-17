function setup(){
    createCanvas(500, 500)
    // background(20, 50, 90)


    
}
function draw() {
	background(30, 144, 255);

    carrier();
    battleship();
    submarine();
    cruiser();
    
	for (var x = 0; x < width; x += width / 11) {
		for (var y = 0; y < height; y += height / 11) {
			stroke(0);
			strokeWeight(2);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
}
function carrier(){
    fill(50)
    rect(181.8, 181.8, 45.45, 227.25)

}
function battleship(){
    fill(255, 204, 0)
    rect(318.15, 136.35, 181.8, 45.45)

}

function submarine(){
    fill('red')
    rect(45.45, 45.45, 45.45, 136.35)

}

function cruiser(){
    fill('#fae')
    rect(x, y, w, h)

}