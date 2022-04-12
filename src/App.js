import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'
import './components/Square.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 1, 2, 3, 4, 5, 6, 7, 8]
          }
  }


  
  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className="gameBoard">
              <Square id="sq1"/>
              <Square id="sq2"/>
              <Square id="sq3"/>
              <Square id="sq4"/>
              <Square id="sq5"/>
              <Square id="sq6"/>
              <Square id="sq7"/>
              <Square id="sq8"/>
              <Square id="sq9"/>
              
        </div>
      </>
    )
  }
}
export default App
