const quadraticEquation = (a, b, c) => {
    const diskriminant = Math.pow(b, 2) - (4 * a * c)

    if (diskriminant < 0) {
        return 'уравнение не имеет вещественных корней'
    }

    if (diskriminant === 0) {
        const x = -b / 2 * a
        return `уравнение имеет один корень x = ${x}`
    }

    if (diskriminant > 0) {
        const x1 = (-b + Math.sqrt(diskriminant)) / 2 * a
        const x2 = (-b - Math.sqrt(diskriminant)) / 2 * a
        return `уравнение имеет корни x1 = ${x1} и x2 = ${x2}`
    }
}

console.log( quadraticEquation(4, -8, 1) )