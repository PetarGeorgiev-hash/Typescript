"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comapny = void 0;
const faker_1 = require("@faker-js/faker");
class Comapny {
    constructor() {
        this.name = faker_1.faker.company.name();
        this.cathPhrase = faker_1.faker.company.catchPhrase();
        this.location = {
            lat: faker_1.faker.location.latitude(),
            lng: faker_1.faker.location.longitude(),
        };
    }
}
exports.Comapny = Comapny;
