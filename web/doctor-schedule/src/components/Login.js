import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HomeScreen from './HomeScreen';

class Login extends Component {
    constructor(props){
      var homeScreen = props.HomeScreen;
      super(props);      
      this.state={
      username:'',
      password:''
      }
     }
    render() {
        return (
          <div style={style}>
            <MuiThemeProvider>
              <div>              
               <TextField
                 hintText="Enter your Username"
                 floatingLabelText="Username"
                 //onChange = {(event,newValue) => this.setState({username:newValue})}
                 />
               <br/>
                 <TextField
                   type="password"
                   hintText="Enter your Password"
                   floatingLabelText="Password"
                   //onChange = {(event,newValue) => this.setState({password:newValue})}
                   />
                 <br/>
                 <BrowserRouter>
                 <div>
                    <Link to="./HomeScreen">Confirmar</Link>                 
                 </div>
                 </BrowserRouter>
             </div>
             </MuiThemeProvider>
          </div>
        );
      }
}
const style = {
  textAlign: 'center',
};
export default Login;