import React, { Component } from 'react';
import Main from './main';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faHandPointRight } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDown);
library.add(faHandPointRight);

class App extends Component {
  render() {
    return (
        <div>
            <Main />
        </div>
    )
  }
}

export default App;