import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Signup from './pages/Signup';
import AuthLayout from './layouts/AuthLayout.tsx';
import Login from './pages/Login';
import MainLayout from './layouts/MainLayout.tsx';
import Home from './pages/Home.tsx';
import Products from './pages/Products.tsx';
import Product from './pages/Product.tsx';
import Cart from './pages/Cart.tsx';
// import CreateOrder from './pages/CreateOrder.tsx';
import TransactionSuccess from './pages/TransactionSuccess.tsx';
import TransactionFailed from './pages/TransactionFailed.tsx';
import Order from './pages/Order.tsx';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/auth' element={<AuthLayout />}>
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='shop' element={<Products />} />
        <Route path=':slug' element={<Product />} />
        <Route path='cart' element={<Cart />} />
        <Route path='orders' element={<Order />} />
        {/*<Route path='create_order' element={<CreateOrder />} />*/}
        <Route path='transaction_success' element={<TransactionSuccess />} />
        <Route path='transaction_failed' element={<TransactionFailed />} />
      </Route>
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
