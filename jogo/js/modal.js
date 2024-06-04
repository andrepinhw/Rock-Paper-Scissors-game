export const Modal = {
    // Var pai
    score: document.querySelector('.score'),
    game: document.querySelector('.game'),
    containerRules: document.querySelector('.container-rules'),


    // Buttons
    buttonRules: document.querySelector('.button-rules'),
    buttonSairRules: document.querySelector('.sair-button'),

    // Button para jogar
    scissors: document.querySelector('.button-scissors'),
    spock: document.querySelector('.button-spock'),
    paper: document.querySelector('.button-paper'),
    lizard: document.querySelector('.button-lizard'),
    rock: document.querySelector('.button-rock'),




    open(){
        Modal.score.classList.toggle('open')
        Modal.game.classList.toggle('open')
        Modal.containerRules.classList.toggle('open')
    },
    close(){
        Modal.score.classList.remove('open')
        Modal.game.classList.remove('open')
        Modal.containerRules.classList.add('open')

    }
}





