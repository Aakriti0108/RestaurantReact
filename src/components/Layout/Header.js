import React  from "react";
import MealsImage from '../../assests/meals.jpg';
import classes from './header.module.css';
import HeaderCartButton from './HeaderCartButton'

const Header = (props) =>{
    return (
        <>
          <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onClick}/>
          </header>
          <div className={classes['main-image']}>
            <img src={MealsImage}/>
          </div>
        </>
    )
}

export default Header;