import React, {Component} from 'react';
import DevTools from '../../../utils/DevTools';

import styles from './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.main}>
          {this.props.children}
        </div>
        <DevTools/>
      </div>
    );
  }
}
