import React from 'react';
import { useSelector } from 'react-redux';
import CartGood from './CartGood';

function CartPage() {
  const { list, cart } = useSelector((state) => state.goods);
  const cartElems = list.filter(({ id }) => cart.includes(id));
  console.log(cartElems);

  const stub = cart.length > 0 ? null : <p>Нет товаров в корзине</p>;

  return (
    <>
      <h1>Корзина</h1>
      <div className="goods-wrapper">
        {stub}
        {cartElems.map((data) => <CartGood data={data} />)}
      </div>
    </>
  );
}

export default CartPage;
