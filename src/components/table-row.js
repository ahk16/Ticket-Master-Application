import React from 'react'
import axios from 'axios';

class TableRow extends React.Component{
    constructor(){
        super()
        this.state = {            
            checkedItems: new Map()           
        } 
    }
    
    checkBoxHandler= (event) => {
        let ticket = this.props.data        
        console.log(event.target.name)
        let name = event.target.name
        let isChecked = event.target.checked
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(name, isChecked) }))
        if(isChecked){
            ticket.status = 'completed'                   
        }else{
            ticket.status = 'open'              
        }
        
        axios.put(`http://dct-api-data.herokuapp.com/tickets/${ticket.ticket_code}?api_key=8b6ff1a3ca0fe02f`, ticket).then( response => {
            console.log(response.data)
            let data = response.data
            this.props.handleStatus(data)
                
            })
        }

        status = (ticket) => {        
            if(ticket.status === 'open'){
                return false
            } else {
                return true
            }            
        }

        render(){
            let ticket = this.props.data
            return (
                <tr>
                    <td>{this.props.data.ticket_code}</td>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.department}</td>
                    <td>{this.props.data.priority}</td>
                    <td>{this.props.data.message}</td>
                    <td>{this.props.data.status}</td>
                    <td><input type='checkbox' onChange={this.checkBoxHandler} checked={this.status(ticket) || this.state.checkedItems.get(ticket.id)}  name={ticket.id}/> </td>
                </tr>
        )

    }
    
}

export default TableRow;