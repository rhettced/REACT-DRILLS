import React, {Component} from 'react';

class LogIn extends Component{
    constructor(){
        super();
        this.state = {
            userName: '',
            password: ''
        };

        this.buttonClick = this.buttonClick.bind(this);
    }

    userNameChange(val){
        this.setState( {userName: val} );
        console.log(this.state)
    }

    passwordChange(val){
        this.setState( {password: val} );
    }

    buttonClick() {
        alert(`Username: ${this.state.userName} Password: ${this.state.password}`);
      }

    render(){
        return(
            <div>
                <input className='userNameInput'
                        placeholder='Username'
                        value={this.state.userName}
                        onChange={ (e)=> this.userNameChange(e.target.value)}/>
                <input className='paswordInput '
                       placeholder='password'
                       value={this.state.password}
                       onChange={ (e)=> this.passwordChange(e.target.value)}/>

                <button onClick={this.buttonClick}> Log In </button>
            </div>
        );
    }
}

export default LogIn;