const ticketOpenedBtn = document.getElementById('ticketOpenedBtn')
const ticketMoreInfoBtn = document.getElementById('ticketMoreInfoBtn')
const ticketSolvedBtn = document.getElementById('ticketSolvedBtn')
const ticketCloseBtn = document.getElementById('ticketCloseBtn')
const ticketClosedBtn = document.getElementById('ticketClosedBtn')
const ticketActualityBtn = document.getElementById('ticketActualityBtn')

let ticketNumber = document.getElementById('ticketNubmer')
let generateText
let innerText = document.getElementById('innerText')

const sayHelloCheck = document.getElementById('sayHelloCheck')

ticketOpenedBtn.onclick = function ticketOpenedF() {
    console.log(ticketNumber.value)

    let ticketOpenedText = 'Дата-центр O2XYGEN информирует Вас о регистрации заявки № ' + ticketNumber.value

    if (sayHelloCheck.checked) {
        generateText = `Здравствуйте! \n ${ticketOpenedText}`
    }
    else {
        generateText = ticketOpenedText
    }

    console.log(generateText)

    innerText.innerHTML = `${generateText}`

    innerText.select()
    document.execCommand('copy')
}

ticketMoreInfoBtn.onclick = function ticketMoreInfoF() {
    let ticketMoreInfoText = 'Дата-центр O2XYGEN информирует Вас о том, что по заявке № ' + ticketNumber.value + ' необходима дополнительная информация:'

    if (sayHelloCheck.checked) {
        generateText = `Здравствуйте! \n ${ticketMoreInfoText}`
    }
    else {
        generateText = ticketMoreInfoText
    }

    innerText.innerHTML = `${generateText}`
}

ticketSolvedBtn.onclick = function ticketSolvedF() {
    let ticketSolvedText = 'Дата-центр O2XYGEN информирует Вас о том, что по заявке № ' + ticketNumber.value + ' появилось решение:'

    if (sayHelloCheck.checked) {
        generateText = `Здравствуйте! \n ${ticketSolvedText}`
    }
    else {
        generateText = ticketSolvedText
    }

    innerText.innerHTML = `${generateText}`
}

ticketCloseBtn.onclick = function ticketCloseF() {
    let ticketCloseText = 'Уточните, пожалуйста, можем ли мы закрыть заявку № ' + ticketNumber.value + ' в случае, если по ней у Вас не осталось более вопросов?'

    if (sayHelloCheck.checked) {
        generateText = `Здравствуйте! \n ${ticketCloseText}`
    }
    else {
        generateText = ticketCloseText
    }

    innerText.innerHTML = `${generateText}`
}

ticketClosedBtn.onclick = function ticketClosedF() {
    let ticketClosedText = 'Дата-центр O2XYGEN информирует Вас о закрытии заявки № ' + ticketNumber.value + '\n Просим Вас не отвечать на данное письмо кроме случая, если по заявке у Вас остались невыясненные вопросы'

    if (sayHelloCheck.checked) {
        generateText = `Здравствуйте! \n ${ticketClosedText}`
    }
    else {
        generateText = ticketClosedText
    }

    innerText.innerHTML = `${generateText}`
}

ticketActualityBtn.onclick = function ticketActualityF() {
    let ticketActualityText = 'Просьба уточнить актуальность заявки № ' + ticketNumber.value

    if (sayHelloCheck.checked) {
        generateText = `Здравствуйте! \n ${ticketActualityText}`
    }
    else {
        generateText = ticketActualityText
    }

    innerText.innerHTML = `${generateText}`
}