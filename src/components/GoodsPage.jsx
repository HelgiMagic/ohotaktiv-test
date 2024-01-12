import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import routes from '../routes';
import { setGoods } from '../slices/goodsSlice';
import Good from './Good';
import getUniqId from '../getUniqId';

function GoodsPage() {
  const dispatch = useDispatch();
  const goods = useSelector((state) => state.goods.list);
  console.log(goods);

  useEffect(() => {
    console.log('use effect WORKED!');
    const setData = async () => {
      try {
        if (goods.length > 0) return;
        const response = await axios.get(routes.goods());

        const goodsWithIds = response.data.items.map((good) => ({ ...good, id: getUniqId() }));
        console.log(goodsWithIds);
        dispatch(setGoods(goodsWithIds));
      } catch (e) {
        console.log(e);
      }
    };

    setData();
  }, [dispatch]);

  return (
    <>
      <h1>Товары</h1>
      <div className="goods-wrapper">
        {goods.map((data) => <Good data={data} key={data.id} />)}
      </div>
    </>
  );
}

export default GoodsPage;
