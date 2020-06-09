class Draw {
    constructor() {
        this.options = ['red', 'green', 'blue'];
        let _result = this.drawResult();
        this.getDrawResult = () => _result
    }
    drawResult() {
        let colors = []
        for (let i = 0; i < this.options.length; i++) {
            colors[i] = this.options[Math.floor((Math.random() * this.options.length))]
        }
        return colors
    }
}

// let draw = new Draw()