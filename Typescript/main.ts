// DATATYPES
let num: number;
let value: string;
let isThere: boolean;
let allType: any;
let numArr: number[] = [1, 2, 3, 4, 5];
let anyArr: any[] = [1, 'a', 'var'];

// ENUM
enum Color {
    red,
    Blue,
    Green
}
const backgroundColor = Color.Blue;

let color: string;
color = 'red';
let check = (<string> color).endsWith('d');
let altCheck = (color as string).endsWith('d');
console.log(altCheck);
