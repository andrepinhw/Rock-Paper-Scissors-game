import { Modal } from './modal.js'

Modal.buttonRules.addEventListener('click', () => {
    Modal.open()
    
    window.addEventListener('keydown', (event) => {
       if(event.key == 'Escape'){
        Modal.close()
       }
    })

  
})

Modal.buttonSairRules.addEventListener('click', () => {
    Modal.close()
 
})


