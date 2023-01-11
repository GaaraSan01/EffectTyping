const copy = document.getElementById('text')

const phrases = [
    'Hellow, my name is Vinícius H.', 
    'I`m a developer front-end Junior from Brazil'
]

let i = 0
let j = 0 

let currentPhrases = []
let isDeleting = false 



const loop = () => {
   let isEnd = false
    copy.innerText = currentPhrases.join('')

    if(i < phrases.length){
        
        //Digitando frases
        if(!isDeleting && j < phrases[i].length){
            currentPhrases.push(phrases[i][j])
            j++

            console.log('add a letter')
            copy.innerText = currentPhrases.join('')
        }

        if(isDeleting && j <= phrases[i].length){
            currentPhrases.pop(phrases[i][j])

            j--
            console.log('remove a letter')
            copy.innerText = currentPhrases.join('')
        }

        if(j == phrases[i].length){
            isEnd = true
            isDeleting = true
        }

        if(isDeleting && j === 0){
            isDeleting = false
            i++

            if(i === phrases.length){
                i = 0
            }
        }
    }

    const speed = Math.random() * (70 -50) + 50
    const normalSpeed = Math.random() * (200 -150) + 200
    const time = isEnd ? 2000 : isDeleting ? speed : normalSpeed
    setTimeout(loop, time) 
}

loop()