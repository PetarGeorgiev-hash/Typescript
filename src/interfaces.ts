interface Reportable {
  summary(): string;
}
// class test implements Reportable{
//     summary(): string {
//         return ''
//     }
// }

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name is ${this.year}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);

const drink1 = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Sugar is ${this.sugar}`;
  },
};

printSummary(drink1)
