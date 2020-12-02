import React, { useEffect, useState } from "react";
import CardList from "./components/pokecardlist/PokeCardList";
import { BrowserRouter, Route } from "react-router-dom";
import PokePage from "./components/pokepage/pokepage/PokePage";
import AbilityPage from "./components/abilitypage/AbilityPage";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store/store";
import { getInitialCards } from "./store/actions";
import Spinner from './Spinner';
import StateInterface from './interfaces/store.interface';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialCards(setLoading));
  }, []);

  return (
    <div
      style={{
        fontFamily: "Roboto",
        minHeight: "100vh",
        background: "#94E1D9",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {
        <BrowserRouter>
          <Route path="/" exact component={CardList} />
          <Route path="/pokemon/:name" component={PokePage} />
          <Route path="/ability/:name" component={AbilityPage} />
        </BrowserRouter>
}
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;