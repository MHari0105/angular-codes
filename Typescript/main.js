// DATATYPES
var num;
var value;
var isThere;
var allType;
var numArr = [1, 2, 3, 4, 5];
var anyArr = [1, 'a', 'var'];
// ENUM
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var backgroundColor = Color.Blue;

var color;
color = 'red';
var check = color.endsWith('d');
var altCheck = color.endsWith('a');
console.log(altCheck);
