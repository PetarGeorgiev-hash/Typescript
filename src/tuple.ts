const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];

// pepsi[0] = 100 can't happen

const carSpecs: [number, number] = [400, 3354];
const carStats = {
  horsepower: 400,
  weieght: 3353,
};
