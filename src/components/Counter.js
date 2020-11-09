import { useState } from 'react'

// lo stato rappresenta un valore interno ad un componente che può variare nel tempo
// quando il valore cambia, il componente viene nuovamente renderizzato e la pagina si aggiorna

// per assicurarsi che questo meccanismo funzioni dobbiamo ricordarci di usare le funzioni fornite da react
// quindi importiamo { useState }

//lo stato si crea dichiarando un array 2 valore, la variabile che contiene lo stato e la funzione per aggiornarlo
//esempio: const [valoreStato, setValoreStato] = useState(valoreIniziale)

//dobbiamo sempre aggiornare lo stato con la funzione setValoreStato e mai assegnarlo direttamente


//se vogliamo salvare un valore nel browser per ricordarlo quando ricarichiamo la pagina o viene riaperta usiamo localStorage
//i metodi disponibili sono 
//setItem("nome", valore)
//getItem("nome")
//removeItem("nome")

//se un valore non c'è il valore ritornato è null o undefined

function Counter() {
    const savedCounter = localStorage.getItem("counter");
    const initialCounter = (savedCounter !== null && savedCounter !== undefined) 
        ? parseInt(savedCounter)
        : 0;
    const [counter, setCounter] = useState(initialCounter);

    // funzioni per gestire i click dei bottoni
    // vengono asssgnate alla prop onClick del bottone e chiamate ad ogni click
    function onButtonClick() {
        localStorage.setItem("counter", counter)
        setCounter(counter + 1)
    }

    function onClearCounter() {
        localStorage.removeItem("counter")
        setCounter(0)
    }

    return (
        <>
            <p>Valore del contatore: {counter}</p>
            <br />
            <button onClick={() => onButtonClick()}>Incrementa contatore</button>
            <br />
            <br />
            <button onClick={() => onClearCounter()}>Pulisci contatore</button>
        </>
    );
}

export default Counter;