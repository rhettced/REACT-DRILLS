import React, {Component} from 'react';

class NewTask extends Component{
    constructor(){
        super();
        this.state = {
            input: ''
        };

        this.handleAddTask = this.handleAddTask.bind(this);
    }

    changeInput(val){
        this.setState( {input: val} );
    }

    handleAddTask(){
        this.props.add(this.state.input);
        this.setState({input: ''});
    }

    render(){
        return(
            <div>
                <input className='inputLine'
                        value={this.state.input}
                        placeholder='Enter new task'
                        onChange={ (e)=> this.changeInput(e.target.value)}/>

                <button onClick={this.handleAddTask}> Add Task </button>
            </div>
        );
    }
}

export default NewTask;