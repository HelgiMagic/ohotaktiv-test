/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, addToCart } from '../slices/goodsSlice';

function Good({ data }) {
  const {
    name, picture, price, quanity, id,
  } = data;

  const cart = useSelector((state) => state.goods.cart);
  const favorites = useSelector((state) => state.goods.favorites);

  const dispatch = useDispatch();

  const handleCartClick = () => {
    dispatch(addToCart(id));
  };

  const handleFavoritesClick = () => {
    dispatch(addFavorite(id));
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

  const isFavoritesDisabled = () => favorites.includes(id);

  const getFavoritesText = () => {
    if (favorites.includes(id)) return 'В избранном';
    return 'В избранное';
  };

  return (
    <div className="good">
      <h5 className="good-name">{name}</h5>
      <div className="img-wrapper">
        <img src={picture} alt="изображение товара" srcSet="" className="good-img" />
      </div>
      <div className="good-buttons">
        <p>{price} ₽</p>
        <button type="button" className="btn btn-yellow" onClick={handleCartClick} disabled={isCartDisabled()}>{getCartText()}</button>
        <button type="button" className="btn btn-pink" onClick={handleFavoritesClick} disabled={isFavoritesDisabled()}>{getFavoritesText()}</button>
      </div>
    </div>
  );
}

export default Good;
