let socket = io();

socket.on("connect", () => {
    console.log("connected to the server via sockets")
})

function setup() {
    createCanvas(400, 400);
    background(220,123,43);
    fill(124,233,21);
    noStroke();
  }
  
  function mouseDragged() {
   
    circle(mouseX, mouseY, 20);
    let dataObj = {
        x : mouseX,
        y : mouseY,
    }
    socket.emit("data", dataObj);
  
}

socket.on("dataFromServer", (dataObj) => {
    drawPainting(dataObj);
})

function drawPainting(dataObj) {
    circle(dataObj.x, dataObj.y, 20);
  }