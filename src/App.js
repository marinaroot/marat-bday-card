import React, { Component } from 'react';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui';
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
          <AppBar title="Марату на день рождения"></AppBar>
          <BDayCard />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
