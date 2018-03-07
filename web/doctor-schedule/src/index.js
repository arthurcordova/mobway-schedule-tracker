import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';//index.js
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import HomeScreen from './components/HomeScreen';

//create redux store -> reducers -> actions - actionsType | applyMiddleware()
//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const Login = () => (        
    <div style={style}>    
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
            <Link to="/HomeScreen" />
            <Switch>
                <Route path="/HomeScreen" component={HomeScreen} exact={true}/>
            </Switch>
            <RaisedButton
                    label='Confirmar'
                    primary={true}
                    //onClick={(event) => this.handleClick(event)}
               />
        </div>
        </BrowserRouter>
    </div>
);

const style = {
    textAlign: 'center'
};

ReactDOM.render(
    <div>
        <MuiThemeProvider>
            <div>
                <AppBar title="DoctorSchedule" />               
                 <Login />
            </div>
        </MuiThemeProvider>
    </div>,
    document.getElementById('root'));
registerServiceWorker();