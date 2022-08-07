import "./scss/app.scss";
import Header from "./components/Header";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
import PizzaBlock from "./components/PizzaBlock";

function App() {
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
            <PizzaBlock title="Чизбургер-пицца" price="360" />
            <PizzaBlock title="Мексиканская" price="560"/>
            <PizzaBlock title="Пепперони" price="460"/>
            <PizzaBlock title="Цезарь" price="660"/>
            <PizzaBlock title="Четыре сезона" price="560"/>
            <PizzaBlock title="Мясная" price="560"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
