import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Signup from './pages/Signup.tsx';
import AuthLayout from './layouts/AuthLayout.tsx';
import Login from './pages/Login.tsx';
import MainLayout from './layouts/MainLayout.tsx';
import Home from './pages/Home.tsx';
import Products from './pages/Products.tsx';
import Product from './pages/Product.tsx';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/auth' element={<AuthLayout />}>
        <Route path='signup' element={<Signup />} />
        <Route index path='login' element={<Login />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route index path='/' element={<Home />} />
        <Route index path='shop' element={<Products />} />
        <Route index path='product' element={<Product />} />
      </Route>
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
