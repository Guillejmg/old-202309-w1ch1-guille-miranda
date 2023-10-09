const questionLibrary = [  
    [
        {
            question: 'Ingrediente mas utilizado en la comida japonesa', 
            answer: 'arroz'
        },

        {
            question: '¿Cuál es el nombre del país más grande de América del Sur?',
            answer: 'argentina'
        },

        {
            question: '¿Qué órgano del cuerpo humano es responsable de bombear la sangre?',
            answer: 'corazón'
        },

        {
            letter:'a'
        }
    ],

[
        {
            question: '¿Cómo se llama la capital de Portugal?', 
            answer: 'Lisboa'
        },
        
        {
            question: '¿Qué ave nocturna de hábitos carnívoros es conocida por girar la cabeza casi 180 grados?',
            answer: 'Buho'
        },
        
        {
            question: 'Metodo de transporte acuatico',
            answer: 'Barco'
        },
        
        {
            letter:'b'
        }
],

];


const counterCorrect = 0
const counterWrong = 0
const turn = 0
const passed = []
let swichCase = false

const dom = document
const domForm = dom.querySelector('form')

const sumCorrectCounter = () => {
    counterCorrect++
}

const sumWrongCounter = () => {
    counterWrong++
}

const sumTurn = () => {
    turn++
}


const handleSubmit = (event) => {
   
    event.preventDefault();
        const formElement = event.target
        let userAnswer = formElement.elements.namedItem('answer').value;//aqui. el nombre, no la clase
        let correctAnswer = questionLibrary[turn][0].answer;
        //console.log(`userAnswer:${userAnswer}`)//estas comprobando que se esta guardando la variable, por lo que la llamas y luego introduces el texto. para verificarlo
        //console.log(`correctAsnwer:${correctAnswer}`)
        //const domAnswer = dom.querySelector('')
}
        //domForm.addEventListener('submit',handleSubmit);
        