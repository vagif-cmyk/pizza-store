import { useState, useEffect } from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
import PizzaBlock from "./components/PizzaBlock";

const URL = "https://62f3e2e9b81dba4a013e2516.mockapi.io/items";

function App() {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setPizzas(res);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
