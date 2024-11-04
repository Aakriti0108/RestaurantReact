import { React , useState } from 'react';
import Header  from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';




function App() {

  let [cartIsShown,setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  }
  
  const hideCartHandler = () =>{
    setCartIsShown(false);
  }
  

  return (
    <>
       {cartIsShown && <Cart onClick={hideCartHandler} />}
        <Header onClick={showCartHandler}/>
        <main>
          <Meals />
        </main>
    </>

  );
}

export default App;
