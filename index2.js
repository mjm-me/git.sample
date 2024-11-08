console.log('Index2 loaded')

function greeting() {
    const question = '¿Cómo te llamas?'
    const name = prompt (question) 
    if(name !== null || name === ``) {
        const response = `Hola, ${name}, qué tal estás`
        alert(response)
    }
}

const button = document.querySelector('button')
button.addEventListener('click', greeting)