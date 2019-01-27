import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: ''
      } 
    }
    
    handleSearchInput = (event) => {
      event.preventDefault();
      this.props.searchHandle(event.target.value);
      console.log(event.target.value)
      this.setState({
        text: event.target.value
      })
    }  
    
    render() {
      return (
        <form>
          <input
            type="text"
            placeholder=" Search By Code "
            value={this.state.text}
            onChange={this.handleSearchInput}
          />
          <p>
          
          </p>
        </form>
      );
    }
  }
export default SearchBar;