import React, {Component} from 'react';
import { Link } from 'react-router';

import styles from './Hello.scss';
import image from '../../images/BladeRunner.gif';

export default class Hello extends Component {
  render() {
    return  (
      <div className={styles.container}>
        Hello You!!
        <Link to='/world'>Click Me</Link>
        <img src={image}/>
      </div>
    );
  }
}

