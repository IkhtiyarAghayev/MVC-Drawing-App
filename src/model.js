export default class Model {
    constructor() {
        this.painting = false;
        this.brushColor = "black";
        this.brushSize = 15;
    }
    // When mouse is clicked change the value of painting variable to true and call drawing function this way we can create dots in canvas without needing to drag mouse.
    drawStart(e, context) {
        this.painting = true;
        this.drawing(e, context);
    }
    // Change the value of painting false and  call beginPath() method to end the previous drawing path if we dont do this the new line always connected to previous line's end.
    drawEnd(context) {
        this.painting = false;
        context.beginPath();
    }
    // While the mouse is in clicked state Draw a line using current mouse position.
    drawing(e, context) {
        if (!this.painting) return;
        context.lineWidth = this.brushSize;
        context.lineCap = 'round';
        context.strokeStyle = this.brushColor;
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }

    // get brush color from color input
    changeColor(color) {
        this.brushColor = color;
    }
    // get brush size from range input
    changeBrushSize(size) {
        this.brushSize = size;
    }
    // get eraser size from range input and make the brush color white to override unwanted drawing.
    eraser(eraserSize) {
        this.brushColor = "white";
        this.brushSize = eraserSize;
    }
    // Erase all the content within the canvas.
    clearCanvas(context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
}