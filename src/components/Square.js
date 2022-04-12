import React, { Component } from 'react'

class Square extends Component{

  handleClick ()  {
     this.setState({goodbye:"goodbye"})
  }
  render(){
    return(
      <>
        <div className="square"
         onClick={this.handleClick}>
           hello
        </div>
        
      </>
    )
  }
}
export default Square
