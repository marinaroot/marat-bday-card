import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import { MESSAGE_FOR_WRONG_AGE, MESSAGE_FOR_CORRECT_AGE } from './constants';

class ObfuscatedMessage extends Component {
  render() {
    const {
      ageIsCorrect,
    } = this.props;

    return (
      <QRCode
        size={ageIsCorrect ? 400 : 250 }
        fgColor={ ageIsCorrect ? '#000' : '#A00' }
        value={ ageIsCorrect ? MESSAGE_FOR_CORRECT_AGE : MESSAGE_FOR_WRONG_AGE }
      />
    );
  }
}

export default ObfuscatedMessage;
