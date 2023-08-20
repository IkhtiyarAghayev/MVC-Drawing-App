export default class View {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.toolBar = document.getElementById('toolbarContainer');
        this.context = this.canvas.getContext('2d');
        this.colorPicker = document.querySelector(".colorPicker");
        this.paletteIcon = document.querySelector(".fa-palette");
        this.tools = document.querySelectorAll(".wrapper");
        this.eraser = document.querySelector(".eraser");
        this.brush = document.querySelector(".brush");
    }
    setCanvasSize() {
        this.canvas.height = window.innerHeight - 4.7;
        this.canvas.width = window.innerWidth - 1;
    }
    updateCanvasSize(callback) {
        window.addEventListener('resize', () => {
            callback();
        })
    }
    isMouseDown(callback) {
        this.canvas.addEventListener("mousedown", (e) => {
            callback(e);
        });
    }
    isMouseUp(callback) {
        this.canvas.addEventListener("mouseup", () => {
            callback();
        });
    }
    isMouseMove(callback) {
        this.canvas.addEventListener("mousemove", (e) => {
            callback(e);
        });
    }
    getBrushColor(callback) {
        this.colorPicker.addEventListener("input", () => {
            callback(this.colorPicker.value);
        })
    }
    grabBrush(callback) {
        this.tools[1].addEventListener("click", () => {
            callback(this.colorPicker.value, this.brush.value);
        });
    }
    getBrushSize(callback) {
        this.brush.addEventListener("input", () => {
            callback(this.brush.value);
        })
    }
    changeIconColor(selectedColor) {
        this.paletteIcon.style.color = selectedColor;
    }
    grabEraser(callback) {
        this.tools[0].addEventListener("click", () => {
            this.eraser.addEventListener("input", () => {
                callback(this.eraser.value);
            });
            callback(this.eraser.value);
        });
    }
    resetCanvas(callback) {
        this.tools[2].addEventListener("click", () => {
            callback(this.context);
        });
    }
    highlightTools() {
        this.tools.forEach(tool => {
            tool.addEventListener("click", () => {
                this.tools.forEach(tools => {
                    tools.classList.remove("active");
                });
                if (tool.id === "canvasClear") {
                    tool.classList.add("active");
                    setTimeout(() => { tool.classList.remove("active") }, 150);
                    setTimeout(() => { this.tools[1].classList.add("active") }, 150);
                }
                tool.classList.add("active");
                if (tool.id === "palette") {
                    this.tools[1].classList.add("active");
                    tool.classList.remove("active");
                }
            });
        });
    }

}