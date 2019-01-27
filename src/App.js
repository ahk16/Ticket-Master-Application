import React, { Component } from 'react';
import './App.css';

import TableHeader from './components/table-header';
import AddTicketForm from './components/new-ticket-form';
import SearchBar from './components/searchBar';
import PriorityBar from './components/priority-bar';
import ProgressBar from './components/progress-bar';
import PieChart from './components/pieChart';
import BarGraph from './components/barGraph';

class App extends Component {
  constructor(){
    super()
    this.state = {
      tickets: [],
      filteredTickets:[]      
    }

  }
  setTicketState = (data) => {
    this.setState({
      tickets : data,
      filteredTickets: data
    })
  }

  handleNewTicket = (data) => {
    console.log(data)
    this.setState((prevState)=>{
      return{
        tickets: prevState.tickets.concat(data),
        filteredTickets: prevState.tickets.concat(data)
      }
    })    
  }

  handleStatus = (data) => {
    let ticketId = this.state.tickets.map(ticket =>{
      return ticket.id
    })
    console.log(ticketId)
    let index = ticketId.indexOf(data.id)
    console.log(index)
    let updatedTickets = this.state.tickets
    updatedTickets.splice(index,1,data)
    console.log(updatedTickets)

    this.setState({
      tickets: updatedTickets,
      filteredTickets : updatedTickets
    })
  }

  searchHandle = (input) => {    
    console.log(input)
    this.setState((prevState)=>{
      return {
        filteredTickets : prevState.tickets.filter((ticket)=>
        ticket.ticket_code.indexOf(input) !== -1 )        
      }      
    })        
  }

  handlePriority = (priority) => {
    if(priority === 'All'){
      this.setState({
        filteredTickets: this.state.tickets
      })
    }else{
      this.setState((prevState)=>{
        return {
          filteredTickets : prevState.tickets.filter((ticket)=> ticket.priority === priority)
        }
      })
    }
    
  }
  
  render() {
    return (
        <div className="App">
        <h2>Ticket Master </h2>
        <h3>Listing Tickets - {this.state.filteredTickets.length} <PriorityBar handlePriority={this.handlePriority} /> </h3>         
        <SearchBar  searchHandle={this.searchHandle} />
        <TableHeader data={this.state.filteredTickets} setTicketState={this.setTicketState} handleStatus={this.handleStatus} />
        <AddTicketForm handleNewTicket={this.handleNewTicket} />
        <ProgressBar progress={this.state.filteredTickets} />
        <PieChart data = {this.state.filteredTickets} />
        <BarGraph data={this.state.filteredTickets}/>
        
        

      </div>   
      
    );
  }
}

export default App;
