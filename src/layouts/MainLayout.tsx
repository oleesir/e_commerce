import { Outlet } from 'react-router-dom';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';

const MainLayout = () => {
  return (
    <div className='flex flex-col w-full overflow-hidden relative min-h-100vh'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
