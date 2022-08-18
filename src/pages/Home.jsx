import React, { useState, useEffect } from "react";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortBy: "rating",
  });

  const sortAs = (sortType.sortBy === "title" ? "asc" : "desc");

  const URL = `https://62f3e2e9b81dba4a013e2516.mockapi.io/items?${
    categoryId > 0 ? `category=${categoryId}` : ""
  }&sortBy=${sortType.sortBy}&order=${sortAs}`;

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setPizzas(res);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            value={categoryId}
            onClickCategory={(id) => setCategoryId(id)}
          />
          <Sort value={sortType} onClickSort={(obj) => setSortType(obj)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
            : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
