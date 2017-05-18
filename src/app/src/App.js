import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//a must plugin for matirial-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import tabs
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

//import for the side menu
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

//import
import userPageTop from './user-page-top/newstyle.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

//menu toggle default class
export class DrawerUndockedExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

}

export default class App extends Component {
    constructor() {
        super();
        this.state = {message: 45};
    }


    render = () => {
        var fullwidth = {
            width:'100%'
        };
        var width60 = {
            width:'60px'
        };
        var margin1 ={
            margin:'0 -16px'
        }
        return (
            <MuiThemeProvider>
                <div className="App">
                    <div>
                        <RaisedButton
                            label="temp menu button"
                            onTouchTap={this.handleToggle}
                        />
                        <Drawer
                            docked={false}
                            width={200}
                            open={this.state.open}
                                onRequestChange={(open) => this.setState({open})}
                        >
                            <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                            <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                            <MenuItem onTouchTap={this.handleClose}>Menu Item 3</MenuItem>
                        </Drawer>
                    </div>
                    <div>
                        <Tabs>
                            <Tab icon={<FontIcon className="muidocs-icon-action-home"/>}>
                                <button className="myButton" onClick={this.click}>click me jenia</button>
                                <RaisedButton label="default"/>
                            </Tab>
                            <Tab icon={<ActionFlightTakeoff />}>
                                <div className="App-header">
                                    <img src={logo} className="App-logo" alt="logo"/>
                                    <h2>hackathon</h2>
                                </div>

                                <div className="w3-container w3-card-2 w3-white w3-round w3-margin"><br/>
                                    <img src="/w3images/avatar2.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={width60}/>
                                        <span className="w3-right w3-opacity">1 min</span>
                                        <h4>John Doe</h4><br/>
                                        <hr className="w3-clear"/>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <div className="w3-row-padding" style={margin1}>
                                                <div className="w3-half">
                                                    <img src="/w3images/lights.jpg" style={fullwidth} alt="Northern Lights" className="w3-margin-bottom"/>
                                                </div>
                                                <div className="w3-half">
                                                    <img src="/w3images/nature.jpg" style={fullwidth} alt="Nature" className="w3-margin-bottom"/>
                                                </div>
                                            </div>
                                            <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up"></i>  Like</button>
                                            <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment"></i>  Comment</button>
                                </div>



                            </Tab>
                                <Tab icon={<FontIcon className="material-icons">favorite</FontIcon>}>
                                    <div className={userPageTop.app}>
                                        <p>user Top Page</p>>
                                    </div>
                                </Tab>
                        </Tabs>
                    </div>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>
            </MuiThemeProvider>
        );
    };
    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    click = () => {
        this.setState({message: 46});
        alert(this.props.message + this.state.message);
    }
}