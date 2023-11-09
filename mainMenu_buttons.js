const redirectToAnswersButton = document.getElementById('toAnswersRedBtn')
const redirectToPassButton = document.getElementById('toPassBtn')
const redirectToFAQButton = document.getElementById('toFAQBtn')

redirectToAnswersButton.onclick = function redirectAnswers() {
    document.location.href='answers.html'
}

toContactsRedBtn.onclick = function redirectContacts() {
    document.location.href='contacts.html'
}

redirectToFAQButton.onclick = function() {
    alert('Вкладка с FAQ ещё в разработке!')
}

redirectToPassButton.onclick = function() {
    alert('Вкладка с пропусками ещё в разработке!')
}