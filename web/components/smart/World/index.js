import React, {Component} from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createMessage } from '../../../actions/sample';

import styles from './World.scss';

class World extends Component {
  handleChange() {
    this.props.createMessage(this.input.value);
  }

  render() {
    return  (
      <div className={styles.container}>
        Your message - {this.props.message}
        <div>
          <button onClick={this.props.handleClick}>Click Me</button>
        </div>
        <div>
          <input onChange={::this.handleChange} ref={(c) => this.input = c} />
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    const { sample } = state;
    return { message: sample.message };
  },
  (dispatch) => {
    return {
      handleClick() {
        dispatch(push(`/`));
      },
      createMessage(val) {
        dispatch(createMessage(val));
      }
    };
  }
)(World);
