import React from 'react'

class PriorityBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:''
        }
    }

    priorityHandle = (event) => {
        console.log(event.target)
        this.props.handlePriority(event.target.value)
    }

    render(){
        return(
        <div className="btn-group" role="group" >
            <button type="button" value='All' onClick={this.priorityHandle}> All </button>
            <button type="button" value='High' onClick={this.priorityHandle}> High </button>
            <button type="button" value='Medium' onClick={this.priorityHandle}> Medium </button>
            <button type="button" value='Low' onClick={this.priorityHandle}> Low </button>
        </div>
        )
    }
}
export default PriorityBar;