class Chair {
    Color!: string;
    MaterialType: string;
    Length!: number;
    width!: number;
    height!: number;

    get Col() {
        return this.Color;
    }

    set Col(x) {
        let arr = ["Black", "White", "Red", "Green","Blue"];
        if (arr.indexOf(x) > -1) {
            this.Color = x;
        } else {
            console.log("color can be one of thos Black,White,Red,Green,Blue");
        }
    }

    get Len() {
        return this.Length;
    }

    set Len(x) {
        if (x > 0) {
            this.Length = x;
        } else {
            console.log(" Length : insert number bigger than 0");
        }
    }

    get wid() {
        return this.width;
    }

    set wid(x) {
        if (x > 0) {
            this.width = x;
        } else {
            console.log("width : insert number bigger than 0");
        }
    }

    get hei() {
        return this.height;
    }

    set hei(x) {
        if (x > 0) {
            this.height = x;
        } else {
            console.log("height : insert number bigger than 0");
        }
    }
    
    calCubage () {
        return this.Length*this.width*this.height;
    }

    showDetails() {
        console.log(` color : ${this.Color} ,Material : ${this.MaterialType} , Length : ${this.Length} , width : ${this.width} , height : ${this.height} , cubage : ${this.calCubage()} `)

    }


    constructor(color: string, MaterialType: string, Length: number, width: number,height: number) {
        this.Col = color;
        this.MaterialType = MaterialType;
        this.Len = Length;
        this.wid = width;
        this.hei = height;
    }


}


var ch1 = new Chair("Blue","wood", 5 ,5 ,3);
var ch2 = new Chair("Red","iron", 5 ,5 ,3);

console.log(ch1);
console.log(ch1.calCubage());
console.log(ch2.showDetails());

var ch3 = new Chair("Red","wood", 5 ,-1 ,-2);
var ch4 = new Chair("yellow","wood", 5 ,-1 ,-8);