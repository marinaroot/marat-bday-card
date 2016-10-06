import React, { Component } from 'react';
import { RaisedButton, AppBar } from 'material-ui';
import ObfuscatedMessage from './ObfuscatedMessage';

import { MARATS_AGE } from './constants';
import './BDayCard.css';

class BDayCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: null
    };
    this.onSubmitAgeClick = this.onSubmitAgeClick.bind(this);
    this.onResetClick = this.onResetClick.bind(this);
  }

  onSubmitAgeClick() {
    this.state = {
      age: null
    };
  }

  onResetClick() {
    console.log('reset clicked');
    this.setState({
      age: null,
    });
  }

  renderContent() {
    const {
      age,
    } = this.state;

    if (age === null) {
      return <div>hi</div>
    } else {
      return <div className="message-container">
        <ObfuscatedMessage ageIsCorrect={age === MARATS_AGE} />
        <div className="BDayCard__return-button-container">
          <RaisedButton primary={true} onClick={this.onResetClick}>
            назад
          </RaisedButton>
        </div>
      </div>
    }
  }

  render() {
    return (
      <div className="BDayCard">
        {this.renderContent()}
      </div>
    );
  }
}

export default BDayCard;
