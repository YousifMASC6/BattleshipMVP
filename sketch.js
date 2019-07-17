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
    destroyer();

    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]   
    const dif = 42.75

	for (var x = 0; x < width; x += width / 11) {
		for (var y = 0; y < height; y += height / 11) {
			stroke(0);
			strokeWeight(2);
			line(x, 0, x, height);
            line(0, y, width, y);
            
            text("1", 11.3625, 84.5)
            text("2", 11.3625, 128.25)
            text("3", 11.3625, 173)
            text("4", 11.3625, 218.75)
            text("5", 11.3625, 262.5)
            text("6", 11.3625, 310.25)
            text("7", 11.3625, 358)
            text("8", 11.3625, 400.75)
            text("9", 11.3625, 445.5)
            text("10", 0, 494.25)
            
            text("A", 54.5, 38.45)
            text("B", 100, 38.45)
            text("C", 145.45, 38.45)
            text("D", 190.9, 38.45)
            text("E", 236.35, 38.45)
            text("F", 283.8, 38.45)
            text("G", 325.25, 38.45)
            text("H", 372.7, 38.45)
            text("I", 426.15, 38.45)
            text("J", 467.6, 38.45)

            fill(255, 255, 255)
            textSize(40)
		}
	}
}

//carrier = 5 | Gray
function carrier(){
    fill(50)
    rect(181.8, 181.8, 45.45, 227.25)

}
//battleship = 4 | Yellow
function battleship(){
    fill(255, 204, 0)
    rect(318.15, 136.35, 181.8, 45.45)

}
//submarine = 3 | Red
function submarine(){
    fill('red')
    rect(45.45, 45.45, 45.45, 136.35)

}
//cruiser = 3 | Pink
function cruiser(){
    fill('#fae')
    rect(409.05, 363.6, 45.45, 136.35)

}
//destroyer = 2 | Green
function destroyer(){
    fill(0, 255, 0)
    rect(90.9, 409.45, 90.9, 45.45)

}
