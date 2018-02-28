import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HomeScreen from './HomeScreen';

class Login extends Component {
    constructor(props){
      super(props);
      this.state={
      username:'',
      password:''
      }
     }
    render() {
        return (
          <div>
            <MuiThemeProvider>
              <div>
              <AppBar
                 title="Login"
               />
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
                 <Switch>
                  <Route path="/HomeScreen" component={HomeScreen} exact={true}/>
                </Switch>
                 </div>
                 </BrowserRouter>
             </div>
             </MuiThemeProvider>
          </div>
        );
      }
}
const style = {
    margin: 15,
  };
export default Login;