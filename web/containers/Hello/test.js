import React from 'react';
import { Link } from 'react-router';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Hello from './';

describe("<Hello />", function() {
  it("is a div", function() {
    expect(shallow(<Hello />).is('div')).to.equal(true);
  });

  it("has css class Hello__container", function() {
    expect(shallow(<Hello />).hasClass('Hello__container')).to.equal(true);
  });

  it("has a <Link />", function() {
    expect(shallow(<Hello />).containsMatchingElement(
      <Link to='/world'>Click Me</Link>)
    ).to.equal(true);
  });

  it("has an img", function() {
    expect(shallow(<Hello />).find('img')).to.have.length(1);
  });
});
