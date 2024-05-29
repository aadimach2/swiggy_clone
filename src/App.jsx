
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer';
import Error from './Components/Error';
import Resmenu from './Components/Resmenu';
import {createBrowserRouter,Outlet} from 'react-router-dom';



function App() {
  return (
   <>
    <Header/>
    <Outlet/>
    <Footer/>
   </>
  )
}
const AppRouter=createBrowserRouter([
{
  path:'/',
  element:<App/>,
  children: [
    {
      path:'/',
      element:<Body/>

    },
    {
      path:'/contacts',
      element:<Contact/>
    },
    {
      path:'/about',
      element:<About/>,
    },
    {
      path:'/restaurant/:id',
      element:<Resmenu/>
    },
    
  ],
  errorElement:<Error/>,

},

]);

export default AppRouter;
