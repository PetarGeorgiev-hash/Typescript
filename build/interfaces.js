"use strict";
// class test implements Reportable{
//     summary(): string {
//         return ''
//     }
// }
const oldCivic = {
    name: "civic",
    year: new Date(),
    broken: true,
    summary() {
        return `Name is ${this.year}`;
    },
};
const printSummary = (item) => {
    console.log(item.summary());
};
printSummary(oldCivic);
const drink1 = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary() {
        return `Sugar is ${this.sugar}`;
    },
};
printSummary(drink1);
