import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, addFavorite } from '../slices/goodsSlice';

function CartGood({ data }) {
  const {
    name, picture, price, id,
  } = data;

  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.goods.favorites);

  const handleFavoritesClick = () => {
    dispatch(addFavorite(id));
  };

  const handleCartClick = () => {
    dispatch(deleteFromCart(id));
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
        <p>
          {price}
          {' '}
          ₽
        </p>
        <button type="button" className="btn btn-yellow" onClick={handleCartClick}>Удалить из корзины</button>
        <button type="button" className="btn btn-pink" onClick={handleFavoritesClick} disabled={isFavoritesDisabled()}>{getFavoritesText()}</button>
      </div>
    </div>
  );
}

export default CartGood;
