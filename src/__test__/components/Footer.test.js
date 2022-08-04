import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Render of Footer component', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render of Footer title', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  test('Verify UI of Footer component', () => {
    const component = renderer.create(<Footer />);
    const footer = component.toJSON();
    expect(footer).toMatchSnapshot();
  });
});

