import React, { Component } from 'react'



export class ButtonClass extends Component {

    constructor() {
        super();
        this.state = {
            greeting: 'Hello',
            title: '2008'
        }
    }
    
    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                {/* <p>Hello</p> */}
                <p>{this.state.greeting}</p>
                <button onClick={() => this.setState({greeting: 'Bye'})}
                // onClick fv-t vár ezért irjuk array functiont
                >Click me</button>
                <button onClick={() => this.setState({title: '2021'})}
                // újra felhasználható más változóval a this.setState
                >Click me</button>
            </div>
        )
    }
}

export default ButtonClass
