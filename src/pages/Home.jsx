import React, { useState, useEffect } from "react";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";

const Home = ({ searchValue }) => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortBy: "rating",
  });

  const items = pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />);
  const sortAs = sortType.sortBy === "title" ? "asc" : "desc";

  const URL = `https://62f3e2e9b81dba4a013e2516.mockapi.io/items?${
    categoryId > 0 ? `category=${categoryId}` : ""
  }&sortBy=${sortType.sortBy}&order=${sortAs}${
    searchValue ? `&search=${searchValue}` : ""
  }&page=${currentPage}&limit=4`;

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
  }, [categoryId, sortType, searchValue, currentPage]);

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
        <div className="content__items">{isLoading ? skeletons : items}</div>
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
