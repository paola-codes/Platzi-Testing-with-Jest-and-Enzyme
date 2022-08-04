import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
  test('addToCart Action', () => {
    const payload = ProductMock;
    const result = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(result);
  });
  test('removeFromCart Action', () => {
    const payload = ProductMock;
    const result = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(result);
  });
});
