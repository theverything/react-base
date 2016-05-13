import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Message from './';

describe("<Message />", function() {
  it("is a div", function() {
    expect(shallow(<Message />).is('div')).to.equal(true);
  });

  it("has css class Message__container", function() {
    expect(shallow(<Message />).hasClass('Message__container')).to.equal(true);
  });

  it("displays a message", function() {
    expect(shallow(<Message message='hello' />).find('.Message__message').text()).to.equal('hello');
  });

  it("handles change event", function () {
    let onChange = sinon.spy();

    shallow(<Message onChange={onChange} />).find('input').simulate('change');

    expect(onChange.callCount).to.equal(1);
  });
});
