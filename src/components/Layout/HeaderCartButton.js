import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './headerCartButton.module.css'
import CartContext from '../../store/cart-content';
const HeaderCartButton = (props) =>{
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((cumNumber,item)=>{ return cumNumber + item.amount },0)
    return(
        <button className={classes.button} onClick={props.onClick}>
              <span className={classes.icon}><CartIcon/></span>
              <span>CART</span>
              <span className = {classes.badge}> {numberOfCartItems} </span>
        </button>
    )
}

export default HeaderCartButton;