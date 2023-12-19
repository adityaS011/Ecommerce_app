import { Navbar, Main, Product, Footer } from "../components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
  return (
    <>
       <ToastContainer />
      <Navbar />
      <Main />
      <Product />
      <Footer />
    </>
  )
}

export default Home