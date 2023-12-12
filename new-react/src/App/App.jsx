import { useState } from 'react' // حین ایمپورت پکیج از نود ماژول مستفیم اسم فایل را مینویسیم و از ادرس دهی خود داری میکنیم.
import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from '../Header/Header' // برای ایمپورت یک کامپوننت نیازی ب نوشتن پسوند ان نیست.
import Footer from "../Footer/Footer"
import './App.css' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <h1 className='react'>سلام من یک پروژه ریکتی هستم...</h1>
    <Footer></Footer>
    </>
  )
}

export default App
