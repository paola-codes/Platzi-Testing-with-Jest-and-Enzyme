import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('<Header />', () => {
  test('Render of Header component', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1);
  });
  test('Render of Header title', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header Snapshot', () => {
  test('Verify UI of Header component', () => {
    const component = renderer.create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    const header = component.toJSON();
    expect(header).toMatchSnapshot();
  });
});
