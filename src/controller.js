export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    init() {
        this.getWindowSize();
        this.view.updateCanvasSize(this.getWindowSize.bind(this));
        this.view.isMouseDown(this.handleMouseDown.bind(this));
        this.view.isMouseUp(this.handleMouseUp.bind(this));
        this.view.isMouseMove(this.handleMouseMove.bind(this));
        this.view.getBrushColor(this.handleColor.bind(this));
        this.view.highlightTools();
        this.view.getBrushSize(this.handleBrushSize.bind(this));
        this.view.grabEraser(this.handleEraser.bind(this));
        this.view.grabBrush(this.handleBrush.bind(this));
        this.view.resetCanvas(this.handleResetCanvas.bind(this));
    }
    getWindowSize() {
        this.view.setCanvasSize();
    }
    handleMouseDown(event) {
        this.model.drawStart(event, this.view.context);
    }
    handleMouseUp() {
        this.model.drawEnd(this.view.context);
    }
    handleMouseMove(event) {
        this.model.drawing(event, this.view.context);
    }
    handleColor(color) {
        this.model.changeColor(color);
        this.view.changeIconColor(color);
    }
    handleBrushSize(size) {
        this.model.changeBrushSize(size);
    }
    handleBrush(brushColor, brushSize) {
        this.model.changeColor(brushColor);
        this.model.changeBrushSize(brushSize);
    }
    handleEraser(eraserSize) {
        this.model.eraser(eraserSize);
    }
    handleResetCanvas(context) {
        this.model.clearCanvas(context);
    }

}