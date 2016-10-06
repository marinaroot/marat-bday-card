import React, { Component } from 'react';
import {
  Card,
  CardActions,
  CardText,
  FlatButton,
  RaisedButton,
  TextField,
} from 'material-ui';
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
    const rawAge = this.refs['input-with-age'].getValue();
    const age = rawAge * 1; // string -> int
    console.log('submit age clicked');
    this.setState({
      age,
    });
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
      return (
        <div className="BDayCard__form-container">
          <Card zDepth={2}>
            <CardText>
              <TextField
                ref="input-with-age"
                hintText="цифрами"
                floatingLabelText="Введите ваш возраст"
              />
            </CardText>
            <CardActions>
              <RaisedButton
                primary={true}
                onClick={this.onSubmitAgeClick}
                label="ввёл"
              />
            </CardActions>
          </Card>
        </div>
      )
    } else {
      return (
        <div className="message-container">
          <ObfuscatedMessage ageIsCorrect={age === MARATS_AGE} />
          <div className="BDayCard__return-button-container">
            <FlatButton
              primary={true}
              onClick={this.onResetClick}
              label="назад"
            />
          </div>
        </div>
      )
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
