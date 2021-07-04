import React, { Component } from 'react'

class ComponentInput extends Component {

    constructor(props) {
        super(props)

        this.inputRef=React.createRef();
    }


    focusReference = ()=>{
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />   
                <button onClick={this.focusReference}>click here</button> 
              
            </div>
        )
    }
}
export default ComponentInput