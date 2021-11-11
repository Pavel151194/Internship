const quadraticEquation = (a, b, c) => {
    let x1 = null
    let x2 = null
    const diskriminant = ( Math.pow(b, 2) ) - (4 * a * c)

    if (diskriminant < 0) {
        console.log('уравнение не имеет вещественных корней')
    }

    if (diskriminant === 0) {
        x1 = -b / 2 * a
        console.log(`уравнение имеет один корень x = ${x1}`)
    }

    if (diskriminant > 0) {
        x1 = (-b + Math.sqrt(diskriminant)) / 2 * a
        x2 = (-b - Math.sqrt(diskriminant)) / 2 * a
        console.log(`уравнение имеет корни x1 = ${x1} и x2 = ${x2}`)
    }
}

console.log( quadraticEquation(4, -8, 1) )