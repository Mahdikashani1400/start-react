import { useState } from "react"; // حین ایمپورت پکیج از نود ماژول مستفیم اسم فایل را مینویسیم و از ادرس دهی خود داری میکنیم.
// import viteLogo from '/vite.svg'

import "./reset.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../Header/Header"; // برای ایمپورت یک کامپوننت نیازی ب نوشتن پسوند ان نیست.
import ProductBox from "../ProductBox/ProductBox";
import Footer from "../Footer/Footer";
import StartRbc from "../StartRbs/StartRbc";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="app__container">
        {/* <Header></Header>
   <div className="product__container">
   <header className="header__productas">
            Shopping card
        </header>
   <ProductBox name="Air Jordan 1 Retro Hirgh Chicago" price="232" count="2" image="shoe.jpg"></ProductBox>
    <ProductBox name="Nike turkey best in the world" price="326" count="8" image="shoe-2.jpg"></ProductBox>
    <ProductBox name="Adidass shoes and best product" price="232" count="5" image="shoe-3.jpg"></ProductBox>
    </div>  */}
        {/* <Footer></Footer> */}
        {/* <StartRbc></StartRbc> */}
        <ShoppingCart></ShoppingCart>
      </div>
    </>
  );
}

export default App;
