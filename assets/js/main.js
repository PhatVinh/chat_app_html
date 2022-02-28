const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


$('.show-profile-btn').onclick = function () {
    $('.profile').classList.add('profile--show')
}

$('.profile-close-btn').onclick = function () {
    $('.profile').classList.remove('profile--show')
}

$('.profile__content-user-info-drop-down').onclick = function () {
    $('.profile__content-user-info-drop-down').classList.toggle('profile__content-user-info-drop-down--active')
}
                
// document.addEventListener('click', (e) => {
//     let showedMenu = $$('.chat-content__body-action-list--show')
//     for(let i = 0; i < showedMenu.length; i++) {
//         let checkIsClickElement = showedMenu[i].contains(e.target)
//         if(!checkIsClickElement || !e.target.classList.contains('.chat-content__body-action')){
//             showedMenu[i].classList.remove('chat-content__body-action-list--show')
//         }
//     }
//     // let checkIsClickElement = actionMenuElementList[j].contains(e.target)
//     // if(!checkIsClickElement) {
//     //     actionMenuElementList[j].classList.remove('chat-content__body-action-list--show')
//     // }
// })

// Get all action button
let clickedElement = $$('.chat-content__body-action')
// Get all menu element
let actionMenuElementList = $$('.chat-content__body-action-list')

for(let i = 0; i < clickedElement.length; i++){
    clickedElement[i].onclick = function () {
        //  Get the parent element
        let parentElement = clickedElement[i].parentElement
        for(let j = 0; j < actionMenuElementList.length; j++){
            if(parentElement.contains(actionMenuElementList[j])) {
                actionMenuElementList[j].classList.toggle('chat-content__body-action-list--show')
            }
            else{
                actionMenuElementList[j].classList.remove('chat-content__body-action-list--show')
            }
        }
    }
}

$('.chat-content-header__action-item-more-action').onclick = function () {
    $('.chat-content-header__action-more-list').classList.toggle('chat-content-header__action-more-list--show')
}


// document.addEventListener('click', (e) => {
//     if(e.target != clickedElement[i] && e.target != actionMenuElementList[j]){
//         console.log(e.target != clickedElement[i]);
//         console.log(e.target != actionMenuElementList[j]);
//         actionMenuElementList[j].classList.toggle('chat-content__body-action-list--show')
//     }
// })



