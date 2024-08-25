import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should contain notif. component', () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find('Notification')).toHaveLength(1);
  });

  it('renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-header').exists()).toBe(true);
  });

  it('renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-body').exists()).toBe(true);
  });

  it('renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-footer').exists()).toBe(true);
  });
});
