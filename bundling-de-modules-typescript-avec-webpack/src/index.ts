interface Car {
    wheel: number;
}

const car: Car = {
    wheel: 1
}

function logProperty<T>(obj: T, prop: keyof T) {
    console.log(`Log property ${String(prop)}: ${JSON.stringify(obj?.[prop])}`)
}

logProperty(car, "wheel")