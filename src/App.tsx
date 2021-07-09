import React from "react";
import CardList from "./components/pokecardlist/PokeCardList";
import { BrowserRouter, Route } from "react-router-dom";
import PokePage from "./components/pokepage/pokepage/PokePage";
import { Provider } from "react-redux";
import store from "./store/store";

export interface StoreInterface  {
  loading: boolean,
  currentPokemon: any,
  currentAbility: any,
  pokemonList: any[],
}

const Main = () =>  (
  <div
    style={{
      fontFamily: "Roboto",
      minHeight: "100vh",
      background: '#EDEDED',
      display: "flex",
      flexDirection: "column",
    }}
  >
    {
      <BrowserRouter>
        <Route path="/" exact component={CardList} />
        <Route path="/pokemon/:name" component={PokePage} />
      </BrowserRouter>
    }
  </div>
);

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
