import { Outlet } from 'react-router-dom';
import Header from '../components/Header.tsx';

const MainLayout = () => {
  return (
    <div className='flex flex-col w-full'>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
