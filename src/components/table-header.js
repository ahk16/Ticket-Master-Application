import React from 'react'
import axios from 'axios'
import TableRow from './table-row';


class TableHeader extends React.Component{
    constructor(){
        super()
        this.handleStatus = this.handleStatus.bind(this)
    }
   
    
    componentDidMount(){
        axios.get(`http://dct-api-data.herokuapp.com/tickets?api_key=8b6ff1a3ca0fe02f`).then((response)=>{
            console.log(response.data)
            this.props.setTicketState(response.data)
        })
    }

    handleStatus(data){
        this.props.handleStatus(data)
    }

    render(){
        
        return(            
            <div>
                <table border ='1'>
                    <thead>
                        <tr>
                            <th> Code </th>
                            <th> Name </th>
                            <th> Department </th>
                            <th> Priority </th>
                            <th> Message </th>
                            <th> Status </th>
                            <th> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.data.map(ticket => {
                            return <TableRow key={ticket.ticket_code} data={ticket} handleStatus={this.handleStatus} />
                        })}                        
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TableHeader;