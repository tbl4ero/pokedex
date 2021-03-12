import React, { useEffect, useState } from "react";
import CardList from "./components/pokecardlist/PokeCardList";
import { BrowserRouter, Route } from "react-router-dom";
import PokePage from "./components/pokepage/pokepage/PokePage";
import AbilityPage from "./components/abilitypage/AbilityPage";
import { Provider, useDispatch } from "react-redux";
import store from "./store/store";
import { getInitialCards } from "./store/actions";

export interface StoreInterface  {
  loading: boolean,
  currentPokemon: any,
  currentAbility: any,
  pokemonList: any[],
}

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
