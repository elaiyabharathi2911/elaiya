import React, { Component } from 'react'

class Operations extends Component {
    constructor(){
        super()
        this.state={
            count:0

        }
        
    }
    increment(){
        this.setState(
            {
                count:this.state.count+1
            },
            ()=>{
                console.log("count ::",this.state.count)
            }
        )
    }

    render() {
        return (
            <div> 
                <h1>count - {this.state.count}</h1>
                <button onclick={()=>this.increment()}>increment</button>
                
            </div>
        )
    }
}

export default Operations
