import { Outlet } from 'react-router-dom';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';

const MainLayout = () => {
  return (
    <div className='flex flex-col w-full'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
