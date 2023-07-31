import Sidebar from '../components/Sidebar.tsx';
import ProductCard from '../components/Cards/ProductCard.tsx';

const Products = () => {
  return (
    <div className='w-full mt-[150px]'>
      <div className='max-w-5xl  mx-auto'>
        <div className='grid grid-cols-5 gap-8'>
          <div>
            <Sidebar />
          </div>
          <div className='col-span-4'>
            <div className='grid gap-x-8 gap-y-4 grid-cols-4'>
              <ProductCard image='/cane_chair.png' />
              <ProductCard image='/white_chair.png' />
              <ProductCard image='/black_couch.jpeg' />
              <ProductCard image='/cane_chair.png' />
              <ProductCard image='/white_chair.png' />
              <ProductCard image='/black_couch.jpeg' />
              <ProductCard image='/cane_chair.png' />
              <ProductCard image='/white_chair.png' />
              <ProductCard image='/grey_couch.jpg' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
