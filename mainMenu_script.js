function getTodayDATA() {
    let date = new Date()
console.log(date.getHours(), date.getMinutes(), date)

let dayOfWeek

    if (date.getDay = 0) {
        dayOfWeek = 'Воскресенье'
    }
    else if (date.getDay = 1) {
        dayOfWeek = 'Понедельник'
    }
    else if (date.getDay = 2) {
        dayOfWeek = 'Вторник'
    }
    else if (date.getDay = 3) {
        dayOfWeek = 'Среда'
    }
    else if (date.getDay = 4) {
        dayOfWeek = 'Четверг'
    }
    else if (date.getDay = 5) {
        dayOfWeek = 'Пятница'
    }
    else if (date.getDay = 6) {
        dayOfWeek = 'Суббота'
    }

    let minutesForm = date.getMinutes()
    let forNowDate = dayOfWeek + ', ' + date.getHours() + ':' + String(minutesForm).padStart(2,'0')
console.log (forNowDate)

let innerDate = document.getElementById('innerDate')
innerDate.innerHTML = `${forNowDate}`
}

setInterval(getTodayDATA, 1000)
