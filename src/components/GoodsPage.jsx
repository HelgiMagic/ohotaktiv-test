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

        console.log(response);

        const goodsWithIds = response.data.items.map((good) => ({ ...good, id: getUniqId() }));

        // добавляю заглушку
        goodsWithIds.forEach((good) => {
          if (good.picture === undefined) good.picture = 'https://i.pinimg.com/736x/d8/b4/a6/d8b4a61f3718b8e15dd5077c08704887.jpg';
        });

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
