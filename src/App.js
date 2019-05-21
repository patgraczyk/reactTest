import React,{Component} from 'react';
import './App.css';
import UserInput from './UserInput/Userinput';
import UserOutput from './UserOutput/UserOutput'


class App extends Component {
  state={
    username:"superPat"
  }

  usernameChangeHandler =(event)=>{
    this.setState({username: event.target.value})
  }


  render() {
  return (
    <div>
    <UserInput 
      changed={this.usernameChangeHandler}
      currentName={this.state.username}
    />  
    <UserOutput userName={this.state.username}/>
    <UserOutput userName ="Pat"/>
    </div>
    );
  }



}

export default App; 
