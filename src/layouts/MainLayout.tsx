import { Outlet } from 'react-router-dom';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import { useLoadUserQuery } from '../features/oliveMarketApi.tsx';

const MainLayout = () => {
  const { isFetching } = useLoadUserQuery(undefined);
  return (
    <div className='flex flex-col w-full'>
      {isFetching && <div>isLoading</div>}
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
