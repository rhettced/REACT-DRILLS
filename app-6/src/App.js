
import React, { Component } from 'react';
import './App.css';
import List from './Comppnent/Todo'

class App extends Component{
constructor(){
  super();
  this.state = {
    list: [],
    input: ''
  };
  this.addToList = this.addToList.bind(this);
  
}

inputChange(val){
  this.setState( {input: val} );
}

addToList() {
  this.setState({
    list: [...this.state.list, this.state.input],
    input: ""
  });
}

  render(){
    let list = this.state.list.map((el,ind) => {
      return<List key={ind} task={el}/>;
    });

    //console.log(this.state.input);
    console.log(this.state.list);
    return (
      <div className="App">
        <h1>Things To Do List</h1>
        <div>
          <input className='inputLine' 
                 value={this.state.input}
                 placeholder='Add Task'
                 onChange={ (e)=> this.inputChange(e.target.value) }/>
          <button onClick={this.addToList}>Add Task</button>
          {list}

        </div>

      </div>
    );
  }
}

export default App;