import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setPagination } from "../redux/slices/filterSlice";

const Home = () => {
  const { searchValue } = useContext(SearchContext);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [currentPage, setCurrentPage] = useState(1);

  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCategoryId(number));
  };

  const items = pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />);
  const sortAs = sort.sortBy === "title" ? "asc" : "desc";

  const URL = `https://62f3e2e9b81dba4a013e2516.mockapi.io/items?${
    categoryId > 0 ? `category=${categoryId}` : ""
  }&sortBy=${sort.sortBy}&order=${sortAs}${
    searchValue ? `&search=${searchValue}` : ""
  }&page=${currentPage}&limit=4`;

  useEffect(() => {
    setIsLoading(true);
    axios.get(URL).then((res) => {
      setPizzas(res.data);
      setIsLoading(false);
    });
  }, [categoryId, sort, searchValue, currentPage]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onClickCategory={onClickCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeletons : items}</div>
      </div>
      <Pagination
        onChangePage={onChangePage}
      />
    </>
  );
};

export default Home;
