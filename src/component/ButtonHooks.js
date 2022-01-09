import React, { useState } from 'react'

function ButtonHooks() {

    //const [ greeting, setGreeting ] = useState('Hello2') //[változó, fv] use State-tel új értéket adunk a változónak
    const [greeting, setGreeting] = useState({key1: 'Hello2', key2: 'Ciao'})  // lehet egyszerre több dolog is egyszerre változtatni
    const [ title, setTitle ] = useState('2008') 
    return (
        <div>
            <h2>{title}</h2>
            {/* <p>Hello2</p>     */}
            <p>{greeting.key1}</p>
            <p>{greeting.key2}</p>
            <button onClick={() => setGreeting({key1: 'Bye2', key2: 'Cioa2'})}>Click me</button>
            <button onClick={() => setTitle('2022')}>Click me</button>
        </div>
    )
}

export default ButtonHooks
