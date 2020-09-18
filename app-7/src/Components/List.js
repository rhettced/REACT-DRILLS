import React, {Component} from 'react';
import Todo from './Todo';

class List extends Component{

    render(){
        let finalToDoList = this.props.tasks.map((el,ind)=> {
            return <Todo key={ind} task={el}/>;
        });
        return(
            <div>{finalToDoList}</div>
        );
    }

}

export default List;