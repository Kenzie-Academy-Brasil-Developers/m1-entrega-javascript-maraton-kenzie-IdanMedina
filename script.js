    let array = [' Rafael',' Manoel',' Daniel']

function position(array){
    let finalArray=[]
    let daniChamp = ": Daniel é o vencedor"
    let podium = "Este é o pódio:"
    if (array.indexOf(' Daniel') == 2) {
        finalArray.push(array[0])
        finalArray.push(array[2])
        finalArray.push(array[1])
        return podium.concat(finalArray)
        
    }
    if (array.indexOf(' Daniel') == 1) {
        finalArray.push(array[1])
        finalArray.push(array[0])
        finalArray.push(array[2])
        let result = finalArray.join()
        return result.concat(daniChamp)
    }
    if (array.indexOf(' Daniel') == 0) {
        let result2 = array.join()
        return result2.concat(daniChamp)
    }
}
console.log(position(array))

/*let array = [' Rafael',' Manoel',' Daniel']
function positions(array){
    let grid = []
    let posDaniel = 0
    let daniChamp = "Daniel é o vencedor"
    let podium = "Este é o pódio "
    for (let i = 0; i < array.length; i++){
        if (array.includes('Daniel')) {{
        for (let i = 0; i < array.length; i++)
        if (array[i] == 'Daniel') {
            posDaniel = i
        } }
        }    
}
    for (let j = 0; j < array.length; j++){
        if (array[0] !== 'Daniel') {
            posDaniel--
            grid.push(array.splice(posDaniel))
    }
    else {return daniChamp}
}
}*/