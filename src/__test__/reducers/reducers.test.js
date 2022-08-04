import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducer', () => {
  test('Return initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('ADD_TO_CART', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const result = {
      cart: [ProductMock],
    };
    expect(reducer(initialState, action)).toEqual(result);
  });
  test('REMOVE_FROM_CART', () => {
    const initialState = {
      cart: [ProductMock],
    };
    const payload = ProductMock;
    const action = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    const result = {
      cart: [],
    };
    expect(reducer(initialState, action)).toEqual(result);
  });
});
