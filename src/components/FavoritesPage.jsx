import React from 'react';
import { useSelector } from 'react-redux';
import FavoriteGood from './FavoriteGood';

function FavoritesPage() {
  const { list, favorites } = useSelector((state) => state.goods);
  const favoritesElems = list.filter(({ id }) => favorites.includes(id));

  const stub = favorites.length > 0 ? null : <p>Нет товаров в избранном</p>;

  return (
    <>
      <h1>Избранное</h1>
      <div className="goods-wrapper">
        {stub}
        {favoritesElems.map((data) => <FavoriteGood data={data} />)}
      </div>
    </>
  );
}

export default FavoritesPage;
