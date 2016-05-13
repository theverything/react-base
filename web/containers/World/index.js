import React, {Component} from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createMessage } from '../../actions/sample';
import Message from '../../components/Message';

import styles from './World.scss';

export class World extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.createMessage(event.target.value);
  }

  render() {
    return  (
      <div className={styles.container}>
        <div>
          <button onClick={this.props.handleClick}>Click Me</button>
        </div>
        <Message onChange={this.handleChange} message={this.props.message} />
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
