import { useState } from 'react';
import NewArrivalTab from './NewArrivalTab.tsx';
import BestSellerTab from './BestSellerTab.tsx';
import FeaturedTab from './FeaturedTab.tsx';
import SpecialOfferTab from './SpecialOfferTab.tsx';

const LatestProductsTab = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTab1 = () => {
    setActiveTab('tab1');
  };

  const handleTab2 = () => {
    setActiveTab('tab2');
  };

  const handleTab3 = () => {
    setActiveTab('tab3');
  };

  const handleTab4 = () => {
    setActiveTab('tab4');
  };

  return (
    <div className='w-full'>
      <div className='w-full flex justify-center mb-5'>
        <p className='text-[30px] font-bold text-[#151875]'>Latest Products</p>
      </div>
      <div className='w-full flex justify-center'>
        <div className='w-1/3 flex  justify-between '>
          <button onClick={handleTab1} className='relative group cursor-pointer'>
            <span className='text-sm text-[#2C2C2C]'>New Arrival</span>
            <span
              className={
                activeTab === 'tab1'
                  ? 'absolute -bottom-1 left-0  h-[2px] bg-[#FD665E] transition-all w-full duration-500 rounded-md'
                  : ''
              }
            ></span>
          </button>
          <button onClick={handleTab2} className='relative group cursor-pointer'>
            <span className='text-sm text-[#2C2C2C]'>Best Seller</span>
            <span
              className={
                activeTab === 'tab2'
                  ? 'absolute -bottom-1 left-0  h-[2px] bg-[#FD665E] transition-all w-full duration-500 rounded-md'
                  : ''
              }
            ></span>
          </button>
          <button onClick={handleTab3} className='relative group cursor-pointer'>
            <span className='text-sm text-[#2C2C2C]'>Featured</span>
            <span
              className={
                activeTab === 'tab3'
                  ? 'absolute -bottom-1 left-0  h-[2px] bg-[#FD665E] transition-all w-full duration-500 rounded-md'
                  : ''
              }
            ></span>
          </button>
          <button onClick={handleTab4} className='relative group cursor-pointer'>
            <span className='text-sm text-[#2C2C2C]'>Special Offer</span>
            <span
              className={
                activeTab === 'tab4'
                  ? 'absolute -bottom-1 left-0  h-[2px] bg-[#FD665E] transition-all w-full duration-500 rounded-md'
                  : ''
              }
            ></span>
          </button>
        </div>
      </div>

      <div className='w-full flex mt-10'>
        <div className='max-w-5xl  mx-auto'>
          {activeTab === 'tab1' && <NewArrivalTab />}
          {activeTab === 'tab2' && <BestSellerTab />}
          {activeTab === 'tab3' && <FeaturedTab />}
          {activeTab === 'tab4' && <SpecialOfferTab />}
        </div>
      </div>
    </div>
  );
};
export default LatestProductsTab;
