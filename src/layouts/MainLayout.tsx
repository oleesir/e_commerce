import { Outlet } from 'react-router-dom';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import { useLoadUserQuery } from '../features/oliveMarketApi.tsx';
import Loader from '../components/Loaders/Loader.tsx';

const MainLayout = () => {
  const { isFetching } = useLoadUserQuery(undefined);
  return (
    <div className='flex flex-col w-full'>
      {isFetching && <Loader />}
      {!isFetching && (
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
