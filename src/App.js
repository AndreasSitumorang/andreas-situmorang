import React, {Fragment, useState} from "react";
import Header from "./Component/Layout/Header";
import ItemList from "./Component/Items/ItemList";
import Cart from "./Component/Cart/Cart";
// import Backgound from "./Component/Layout/meals.jpg";
// import Styles from "./Component/Layout/Header.module.css";
function App() {

  const [isShowUp, setisShowUp] = useState(false);

  const isShowUpHandler = () =>{
    setisShowUp(true);
  }
  
  const isCloseUpHanlder = () =>{
    setisShowUp(false);
  };

  return (
    <Fragment>
      {isShowUp && <Cart onClose={isCloseUpHanlder}/>}
      <Header onPressCart = {isShowUpHandler} />
      <main>
      <ItemList/>
      </main>
    </Fragment>
  );
}

export default App;
