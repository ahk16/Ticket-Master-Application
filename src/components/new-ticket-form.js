import React from 'react'
import axios from 'axios'



class AddTicketForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            department: '',
            priority:'',
            message:''
        }
    }
    handleInputChange = (event) => {
        console.log(event.target.value );
        this.setState({
            [event.target.name] : event.target.value       
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()        
        const formData = {
            name: this.state.name,
            department: this.state.department,
            priority: this.state.priority,
            message: this.state.message
        }
        axios.post(`http://dct-api-data.herokuapp.com/tickets?api_key=8b6ff1a3ca0fe02f`, formData).then((response)=>{
            console.log(response.data)
            let ticket = response.data 
            this.props.handleNewTicket(ticket);      
        })
    }

    handleReset = (event) => {
        event.preventDefault()
        this.setState({
            name:'',
            department:'',
            priority:'',
            message:''
        })
        this.refs.form.reset()
    }


    render(){
        return (
            <div>
                <h4>Add New Ticket</h4>
                <form onSubmit={this.handleSubmit} ref='form'>
                    <label> Name :
                        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange}/> <br/><br/>
                    </label>

                    <label> Department :
                        <select name='department' onChange={this.handleInputChange}>
                            <option value="">Select</option>
                            <option value="Technical">Technical</option>
                            <option value="Sales">Sales</option>
                            <option value="Hr">Hr</option>            
                    </select>
                    </label>

                    <label> Priority :
                        <label><input type='radio' value='High' name='priority' onChange={this.handleInputChange}/> High </label>
                        <label><input type='radio' value='Medium' name='priority' onChange={this.handleInputChange} />Medium</label> 
                        <label><input type='radio' value='Low' name='priority' onChange={this.handleInputChange}/>Low</label> <br/><br/>
                    </label>

                    <label>Message : 
                        <textarea rows='6' cols='30' type='text' name='message' value={this.state.message} onChange={this.handleInputChange}></textarea>
                    </label><br/>             
                    <br/><br/>

                    <input type='submit'  value='Submit'/>
                    <input type= "reset" value="Reset" onClick={this.handleReset}/>

                </form>
            </div>            
        )
    }
}
export default AddTicketForm;