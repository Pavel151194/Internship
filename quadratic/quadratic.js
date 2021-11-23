const quadraticEquation = (a, b, c) => {
    const equation = buildEquation(a, b, c)
    const diskriminant = Math.pow(b, 2) - (4 * a * c)

    if (diskriminant < 0) {
        return `Уравнение ${equation} не имеет вещественных корней`
    }

    if (diskriminant === 0) {
        const x = -b / 2 * a
        return `Уравнение ${equation} имеет один корень x = ${x}`
    }

    if (diskriminant > 0) {
        const x1 = (-b + Math.sqrt(diskriminant)) / 2 * a
        const x2 = (-b - Math.sqrt(diskriminant)) / 2 * a
        return `Уравнение ${equation} имеет корни x1 = ${x1} и x2 = ${x2}`
    }
}

const buildEquation = (a, b, c) => {   
    a = a && a !== 1 ? `${a}x^2` : 'x^2'
    b = `${getCoef(b)}x`
    c = getCoef(c)
    return `${a} ${b} ${c}`
}

const getCoef = (coef) => coef > 0 ? `+ ${coef}` : `- ${coef}`

console.log( quadraticEquation(4, -8, 1) )