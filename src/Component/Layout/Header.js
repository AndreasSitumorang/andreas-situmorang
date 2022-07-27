import React, {Fragment} from 'react';
import Backgound from '../../asset/meals.jpg';
import Styles from './Header.module.css';
import ButtonCart from './ButoonCart';

const Header = (props) => {
  return (
    <Fragment>
      <header className={Styles.header}>
        <h1> React Meals</h1>
        <ButtonCart onPressCartButton = {props.onPressCart}/>
      </header>
      <div className={Styles['main-image']}>
        <img src={Backgound} alt='a table food'/>
      </div>
    </Fragment>
  );
};

export default Header;
