import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFavorite } from '../slices/goodsSlice';

function FavoriteGood({ data }) {
  const {
    name, picture, price, quanity, id,
  } = data;

  const cart = useSelector((state) => state.goods.cart);

  const dispatch = useDispatch();

  const handleFavoritesClick = () => {
    dispatch(deleteFavorite(id));
  };

  const handleCartClick = () => {
    dispatch(addToCart(id));
  };

  const isCartDisabled = () => {
    if (cart.includes(id)) return true;
    if (quanity === 0) return true;

    return false;
  };

  const getCartText = () => {
    if (cart.includes(id)) return 'В корзине';
    if (quanity === 0) return 'Отсутствует';

    return 'В корзину';
  };

  return (
    <div className="good">
      <h5 className="good-name">{name}</h5>
      <div className="img-wrapper">
        <img src={picture} alt="изображение товара" srcSet="" className="good-img" />
      </div>
      <div className="good-buttons">
        <p>
          {price}
          {' '}
          ₽
        </p>
        <button type="button" className="btn btn-yellow" onClick={handleCartClick} disabled={isCartDisabled()}>{getCartText()}</button>
        <button type="button" className="btn btn-pink" onClick={handleFavoritesClick}>Удалить из избранного</button>
      </div>
    </div>
  );
}

export default FavoriteGood;
