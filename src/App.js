import React, {Fragment} from "react";
import Header from "./Component/Layout/Header";
import ItemList from "./Component/Items/ItemList";
// import Backgound from "./Component/Layout/meals.jpg";
// import Styles from "./Component/Layout/Header.module.css";
function App() {
  return (
    <Fragment>
      <Header/>
      <main>
      <ItemList/>
      </main>
    </Fragment>
  );
}

export default App;
