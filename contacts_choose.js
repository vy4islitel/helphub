const opName = document.getElementById('opName')
const opPhone = document.getElementById('opPhone')
const opEmail = document.getElementById('opEmail')

const ccCity = document.getElementById('ccCity')
const ccPhone = document.getElementById('ccPhone')
const ccEmail = document.getElementById('ccEmail')

const opSelect = document.getElementById('opSelect')
const ccSelect = document.getElementById('ccSelect')

opSelect.onchange = function selectOp() {
    if (opSelect.value === 'Мастертел') {
        opName.innerHTML = `${opMastertel.name}`, opPhone.innerHTML = `${opMastertel.phone}`, opEmail.innerHTML = `${opMastertel.email}`
    }
    else if (opSelect.value === 'Марафон') {
        opName.innerHTML = `${opMaraphon.name}`, opPhone.innerHTML = `${opMaraphon.phone}`, opEmail.innerHTML = `${opMaraphon.email}`
    }
    else if (opSelect.value === 'НетУан') {
        opName.innerHTML = `${opNetOne.name}`, opPhone.innerHTML = `${opNetOne.phone}`, opEmail.innerHTML = `${opNetOne.email}`
    }
    else if (opSelect.value === 'Телеком-Биржа') {
        opName.innerHTML = `${opTCB.name}`, opPhone.innerHTML = `${opTCB.phone}`, opEmail.innerHTML = `${opTCB.email}`
    }
    else if (opSelect.value === 'ЮЛ-КОМ') {
        opName.innerHTML = `${opULCM.name}`, opPhone.innerHTML = `${opULCM.phone}`, opEmail.innerHTML = `${opULCM.email}`
    }
    else if (opSelect.value === 'Ростелеком') {
        opName.innerHTML = `${opRTC.name}`, opPhone.innerHTML = `${opRTC.phone}`, opEmail.innerHTML = `${opRTC.email}`
    }
    else if (opSelect.value === 'Ретн') {
        opName.innerHTML = `${opRETN.name}`, opPhone.innerHTML = `${opRETN.phone}`, opEmail.innerHTML = `${opRETN.email}`
    }
    else if (opSelect.value === 'Orange') {
        opName.innerHTML = `${opOrange.name}`, opPhone.innerHTML = `${opOrange.phone}`, opEmail.innerHTML = `${opOrange.email}`
    }
}

ccSelect.onchange = function selectCc() {
    console.log(ccSelect.value)
    if (ccSelect.value === 'Архангельск') {
        ccCity.innerHTML = `${ccArchangelsk.city}`, ccPhone.innerHTML = `${ccArchangelsk.phone}`, ccEmail.innerHTML = `${ccArchangelsk.email}`
    }
    else if (ccSelect.value === 'Барнаул') {
        ccCity.innerHTML = `${ccBarnaul.city}`, ccPhone.innerHTML = `${ccBarnaul.phone}`, ccEmail.innerHTML = `${ccBarnaul.email}`
    }
    else if (ccSelect.value === 'Белгород') {
        ccCity.innerHTML = `${ccBelgorod.city}`, ccPhone.innerHTML = `${ccBelgorod.phone}`, ccEmail.innerHTML = `${ccBelgorod.email}`
    }
    else if (ccSelect.value === 'Иркутск') {
        ccCity.innerHTML = `${ccIrkutsk.city}`, ccPhone.innerHTML = `${ccIrkutsk.phone}`, ccEmail.innerHTML = `${ccIrkutsk.email}`
    }
    else if (ccSelect.value === 'Казань') {
        ccCity.innerHTML = `${ccKazan.city}`, ccPhone.innerHTML = `${ccKazan.phone}`, ccEmail.innerHTML = `${ccKazan.email}`
    }
    else if (ccSelect.value === 'Каменск-Шахтинский') {
        ccCity.innerHTML = `${ccKamenskSchakhtinsky.city}`, ccPhone.innerHTML = `${ccKamenskSchakhtinsky.phone}`, ccEmail.innerHTML = `${ccKamenskSchakhtinsky.email}`
    }
    else if (ccSelect.value === 'Красноярск') {
        ccCity.innerHTML = `${ccKranoyarsk.city}`, ccPhone.innerHTML = `${ccKranoyarsk.phone}`, ccEmail.innerHTML = `${ccKranoyarsk.email}`
    }
    else if (ccSelect.value === 'Липецк') {
        ccCity.innerHTML = `${ccLipetsk.city}`, ccPhone.innerHTML = `${ccLipetsk.phone}`, ccEmail.innerHTML = `${ccLipetsk.email}`
    }
    else if (ccSelect.value === 'Новороссийск') {
        ccCity.innerHTML = `${ccNovorossiysk.city}`, ccPhone.innerHTML = `${ccNovorossiysk.phone}`, ccEmail.innerHTML = `${ccNovorossiysk.email}`
    }
    else if (ccSelect.value === 'Омск') {
        ccCity.innerHTML = `${ccOmsk.city}`, ccPhone.innerHTML = `${ccOmsk.phone}`, ccEmail.innerHTML = `${ccOmsk.email}`
    }
    else if (ccSelect.value === 'Саратов') {
        ccCity.innerHTML = `${ccSaratov.city}`, ccPhone.innerHTML = `${ccSaratov.phone}`, ccEmail.innerHTML = `${ccSaratov.email}`
    }
    else if (ccSelect.value === 'Соликамск') {
        ccCity.innerHTML = `${ccSolikamsk.city}`, ccPhone.innerHTML = `${ccSolikamsk.phone}`, ccEmail.innerHTML = `${ccSolikamsk.email}`
    }
    else if (ccSelect.value === 'Сочи') {
        ccCity.innerHTML = `${ccSochi.city}`, ccPhone.innerHTML = `${ccSochi.phone}`, ccEmail.innerHTML = `${ccSochi.email}`
    }
    else if (ccSelect.value === 'Санкт-Петербург') {
        ccCity.innerHTML = `${ccSaintPetersburg.city}`, ccPhone.innerHTML = `${ccSaintPetersburg.phone}`, ccEmail.innerHTML = `${ccSaintPetersburg.email}`
    }
    else if (ccSelect.value === 'Тюмень') {
        ccCity.innerHTML = `${ccTumen.city}`, ccPhone.innerHTML = `${ccTumen.phone}`, ccEmail.innerHTML = `${ccTumen.email}`
    }
}