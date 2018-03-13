function solve(clientCar) {
    let car = {};
    car.model = clientCar.model;
    if (clientCar.power <= 90) {
        car.engine = {power: 90, volume: 1800};
    } else if (clientCar.power > 90 && clientCar.power <= 120) {
        car.engine = {power: 120, volume: 2400};
    } else {
        car.engine = {power: 200, volume: 3500};
    }
    if (clientCar.carriage === 'hatchback'){
        car.carriage = { type: 'hatchback', color: clientCar.color };
    } else {
        car.carriage = { type: 'coupe', color: clientCar.color };
    }
    let size = clientCar.wheelsize % 2 === 0 ? clientCar.wheelsize - 1 : clientCar.wheelsize;
    car.wheels = [size, size, size, size];

    return car;
}

