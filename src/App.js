import React, { useState } from "react";
import Header from "./Component/Layout/Header";
import ItemList from "./Component/Items/ItemList";
import Cart from "./Component/Cart/Cart";
import ItemProvider from "./DataStore/ItemContextProvider";
// import Backgound from "./Component/Layout/meals.jpg";
// import Styles from "./Component/Layout/Header.module.css";
function App() {
  const [isShowUp, setisShowUp] = useState(false);

  const isShowUpHandler = () => {
    setisShowUp(true);
  };

  const isCloseUpHanlder = () => {
    setisShowUp(false);
  };

  return (
    <ItemProvider>
      {isShowUp && <Cart onClose={isCloseUpHanlder} />}
      <Header onPressCart={isShowUpHandler} />
      <main>
        <ItemList />
      </main>
    </ItemProvider>
  );
}

export default App;
