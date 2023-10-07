function age() {
    const age = +prompt('Ваш вік?')
    if (age >= 0 && age <= 12) {
        alert('малой тобі у садочок треба')
    } else if (age > 12 && age <= 18) {
        alert("майже дорослий, але ще підліток")
    } else if (age > 18 && age <= 60) {
        alert('ви вже дорослі')
    } else if (age > 60) {
        alert("ви вже похила людина")
    } else {
        alert("ти як мінуснувся????")
    }
}

// ====================================================================
function num() {
    const num = +prompt('Ваша цифра?')
    if (num == 1) {
        alert('!')
    } else if (num == 2) {
        alert('@')
    } else if (num == 3) {
        alert('#')
    } else if (num == 4) {
        alert('$')
    } else if (num == 5) {
        alert('%')
    } else if (num == 6) {
        alert('^')
    } else if (num == 7) {
        alert('&')
    } else if (num == 8) {
        alert('*')
    } else if (num == 9) {
        alert('(')
    } else if (num == 0) {
        alert(')')
    } else {
        alert('УВЕДІТЬ ЦИФРУ ВІД 0-9!!!!')
    }
}
// ==========================================================================

//! Я ЗРОБИВ VAR ТОМУ ЩО МЕНІ ПОТРІБНА ГЛОБАЛЬНА ЗОНА ВИДИМОСТІ
function sale() {
    const pay = +prompt('Сума вашої покупки')
    if (pay >= 200 && pay <= 300) {
        var sale = 3
    } else if (pay > 300 && pay <= 500) {
        var sale = 5
    } else if (pay > 300 && pay <= 500) {
        var sale = 5
    } else if (pay > 500) {
        var sale = 7
    } else {
        alert('Ви ввели не правильну самму!!!')
    }
    let sum = (pay / 100) * sale
    alert(`Сума вашої покупки це ${pay - sum}`)
}
//! Я ЗРОБИВ VAR ТОМУ ЩО МЕНІ ПОТРІБНА ГЛОБАЛЬНА ЗОНА ВИДИМОСТІ

// ===========================================================================
function year() {
    const year = +prompt('Який рік будемо перевіряти')
    let test1 = year % 400
    let test2 = year % 4
    let test3 = year % 100
    if (test1 == 0) {
        alert('Рік високосний')
    } else if (test2 == 0 && test3 !== 0) {
        alert('Рік високосний')
    } else {
        alert('Рік  НЕ високосний')
    }
}
// ==========================================================================

function date() {
    const dayNumber = +document.querySelector('.dayNumber').value
    const mounthNumber = +document.querySelector('.mounthNumber').value
    const yearNumber = +document.querySelector('.yearNumber').value
    console.log(`${dayNumber}.${mounthNumber}.${yearNumber}`);
    var day = dayNumber
    var mon = mounthNumber
    var yer = yearNumber
    //! ++++===
    let year = yearNumber
    let test1 = year % 400
    let test2 = year % 4
    let test3 = year % 100
    if (test1 == 0) {
        var vus = 29
        console.log('високосний')
    } else if (test2 == 0 && test3 !== 0) {
        var vus = 29
        console.log('високосний')
    } else {
        var vus = 28
        console.log('не високосний')
    }

    //! ++++===
    if (mounthNumber == 1 && (dayNumber >= 1 && dayNumber <= 31)) {
        console.log('true')
        if (dayNumber >= 1 && dayNumber <= 30) {
            day = dayNumber + 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        } else {
            let mon = mounthNumber + 1
            day = 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        }
    } else if (mounthNumber == 2 && (dayNumber >= 1 && dayNumber <= vus)) {
        console.log('true')
        let gus = vus - 1
        if (dayNumber >= 1 && dayNumber <= gus) {
            day = dayNumber + 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        } else {
            let mon = mounthNumber + 1
            day = 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        }
    } else if (mounthNumber == 3 && (dayNumber >= 1 && dayNumber <= 31)) {
        console.log('true')
        if (dayNumber >= 1 && dayNumber <= 30) {
            day = dayNumber + 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        } else {
            let mon = mounthNumber + 1
            day = 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        }
    } else if (mounthNumber == 4 && (dayNumber >= 1 && dayNumber <= 30)) {
        console.log('true')
        if (dayNumber >= 1 && dayNumber <= 29) {
            day = dayNumber + 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        } else {
            let mon = mounthNumber + 1
            day = 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        }
    } else if (mounthNumber == 5 && (dayNumber >= 1 && dayNumber <= 31)) {
        console.log('true')
        if (dayNumber >= 1 && dayNumber <= 30) {
            day = dayNumber + 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        } else {
            let mon = mounthNumber + 1
            day = 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        }
    } else if (mounthNumber == 6 && (dayNumber >= 1 && dayNumber <= 30)) {
        console.log('true')
        if (dayNumber >= 1 && dayNumber <= 29) {
            day = dayNumber + 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        } else {
            let mon = mounthNumber + 1
            day = 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        }
    } else if (mounthNumber == 7 && (dayNumber >= 1 && dayNumber <= 31)) {
        console.log('true')
        if (dayNumber >= 1 && dayNumber <= 30) {
            day = dayNumber + 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        } else {
            let mon = mounthNumber + 1
            day = 1
            cconsole.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        }
    } else if (mounthNumber == 8 && (dayNumber >= 1 && dayNumber <= 31)) {
        console.log('true')
        if (dayNumber >= 1 && dayNumber <= 30) {
            day = dayNumber + 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        } else {
            let mon = mounthNumber + 1
            day = 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        }
    } else if (mounthNumber == 9 && (dayNumber >= 1 && dayNumber <= 30)) {
        console.log('true')
        if (dayNumber >= 1 && dayNumber <= 29) {
            day = dayNumber + 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        } else {
            let mon = mounthNumber + 1
            day = 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        }
    } else if (mounthNumber == 10 && (dayNumber >= 1 && dayNumber <= 31)) {
        console.log('true')
        if (dayNumber >= 1 && dayNumber <= 30) {
            day = dayNumber + 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        } else {
            let mon = mounthNumber + 1
            day = 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        }
    } else if (mounthNumber == 11 && (dayNumber >= 1 && dayNumber <= 30)) {
        console.log('true')
        if (dayNumber >= 1 && dayNumber <= 29) {
            day = dayNumber + 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        } else {
            let mon = mounthNumber + 1
            day = 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        }
    } else if (mounthNumber == 12 && (dayNumber >= 1 && dayNumber <= 31)) {
        console.log('true')
        if (dayNumber >= 1 && dayNumber <= 30) {
            day = dayNumber + 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        } else {
            mon = 1
            day = 1
            let yer = yearNumber + 1
            console.log(`${day}.${mon}.${yer}`)
            if (day < 10 && mon < 10) {
                alert(`Наступний день це 0${day}.0${mon}.${yer}`)
            } else if (day < 10) {
                alert(`Наступний день це 0${day}.${mon}.${yer}`)
            } else if (mon < 10) {
                alert(`Наступний день це ${day}.0${mon}.${yer}`)
            } else {
                alert(`Наступний день це ${day}.${mon}.${yer}`)
            }
        }
    } else {
        alert('Не коректне число!')
    }
}

