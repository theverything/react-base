import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import { World } from './';

describe("<World />", function() {
  it("is a div", function() {
    expect(shallow(<World />).is('div')).to.equal(true);
  });

  it("has css class World__container", function() {
    expect(shallow(<World />).hasClass('World__container')).to.equal(true);
  });

  it("handles button click", function () {
    let handleClick = sinon.spy();

    shallow(<World handleClick={handleClick} />).find('button').simulate('click');

    expect(handleClick.callCount).to.equal(1);
  });

  it("handles input change", function () {
    let createMessage = sinon.spy();
    const input = mount(<World createMessage={createMessage} />).find('input');

    input.get(0).value = 'hello';
    input.simulate('change');

    expect(createMessage.calledWith('hello')).to.equal(true);
  });
});
