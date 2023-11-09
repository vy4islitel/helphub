function getTodayDATA() {
    let date = new Date()
    let weekDay = new Array(7)
    weekDay[0] = 'Воскресенье'
    weekDay[1] = 'Понедельник'
    weekDay[2] = 'Вторник'
    weekDay[3] = 'Среда'
    weekDay[4] = 'Четверг'
    weekDay[5] = 'Пятница'
    weekDay[6] = 'Суббота'
    console.log(date.getHours(), date.getMinutes(), date)

    let dayOfWeek

    console.log(date.getDay)

    let weekDayResult = weekDay[date.getDay()]

    let minutesForm = date.getMinutes()
    let forNowDate = weekDayResult + ', ' + date.getHours() + ':' + String(minutesForm).padStart(2, '0')
    console.log(forNowDate)

    let innerDate = document.getElementById('innerDate')
    innerDate.innerHTML = `${forNowDate}`
}

setInterval(getTodayDATA, 1000)
