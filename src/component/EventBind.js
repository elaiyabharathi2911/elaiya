import React, { Component } from 'react'

class EventBind extends Component {


    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello React'      
        }

        this.clickHandler=this.clickHandler.bind(this);
    }



    clickHandler = () =>{
        this.setState({
         message: 'Welcome to react'   
        },
        console.log(this.state.message))
    }


    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                 <button onClick={this.clickHandler.bind(this)}>Click Me (1)</button>
                <button onClick={()=>this.clickHandler()}>Click Me (2)</button>
                <button onClick={this.clickHandler}>Click Here (3)</button>
            </div>
        )
    }
}

export default EventBind