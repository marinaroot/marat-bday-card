import React, { Component } from 'react';

// Material UI
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { RaisedButton, AppBar } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';

import BDayCard from './BDayCard';
import './App.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar title="BDay card"></AppBar>
          <BDayCard />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
