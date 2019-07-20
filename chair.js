var Chair = /** @class */ (function () {
    function Chair(color, MaterialType, Length, width, height) {
        this.Col = color;
        this.MaterialType = MaterialType;
        this.Len = Length;
        this.wid = width;
        this.hei = height;
    }
    Object.defineProperty(Chair.prototype, "Col", {
        get: function () {
            return this.Color;
        },
        set: function (x) {
            var arr = ["Black", "White", "Red", "Green", "Blue"];
            if (arr.indexOf(x) > -1) {
                this.Color = x;
            }
            else {
                console.log("color can be one of thos Black,White,Red,Green,Blue");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chair.prototype, "Len", {
        get: function () {
            return this.Length;
        },
        set: function (x) {
            if (x > 0) {
                this.Length = x;
            }
            else {
                console.log(" Length : insert number bigger than 0");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chair.prototype, "wid", {
        get: function () {
            return this.width;
        },
        set: function (x) {
            if (x > 0) {
                this.width = x;
            }
            else {
                console.log("width : insert number bigger than 0");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chair.prototype, "hei", {
        get: function () {
            return this.height;
        },
        set: function (x) {
            if (x > 0) {
                this.height = x;
            }
            else {
                console.log("height : insert number bigger than 0");
            }
        },
        enumerable: true,
        configurable: true
    });
    Chair.prototype.calCubage = function () {
        return this.Length * this.width * this.height;
    };
    Chair.prototype.showDetails = function () {
        console.log(" color : " + this.Color + " ,Material : " + this.MaterialType + " , Length : " + this.Length + " , width : " + this.width + " , height : " + this.height + " , cubage : " + this.calCubage() + " ");
    };
    return Chair;
}());
var ch1 = new Chair("Blue", "wood", 5, 5, 3);
var ch2 = new Chair("Red", "iron", 5, 5, 3);
console.log(ch1);
console.log(ch1.calCubage());
console.log(ch2.showDetails());
var ch3 = new Chair("Red", "wood", 5, -1, -2);
var ch4 = new Chair("yellow", "wood", 5, -1, -8);
