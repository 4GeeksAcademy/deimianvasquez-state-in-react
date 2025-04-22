function useState(typeData){
    // tiene unos procesos complejos
    let state = "state"

    return [state, ()=>{console.log("hola")}]
}

const [counter, setCounter] = useState(0)


console.log(counter, setCounter)