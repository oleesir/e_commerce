import { Outlet } from 'react-router-dom';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import { useLoadUserQuery } from '../features/oliveMarketApi.tsx';
import Loader from '../components/Loaders/Loader.tsx';

const MainLayout = () => {
  const { isLoading } = useLoadUserQuery(undefined);
  return (
    <div className='flex flex-col w-full'>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default MainLayout;
