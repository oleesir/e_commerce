import { useState } from 'react';
import DiscountItemTab from './Tabs/DiscoutItemTab.tsx';

const DiscountItemsTab = () => {
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

  return (
    <div className='w-full'>
      <div className='w-full flex justify-center mb-5'>
        <p className='text-[30px] font-bold text-[#151875]'>Discount Item</p>
      </div>
      <div className='w-full flex justify-center'>
        <div className='w-1/4 flex  justify-between '>
          <button onClick={handleTab1} className='relative group cursor-pointer'>
            <span className='text-sm text-[#2C2C2C]'>Wood Chair</span>
            <span
              className={
                activeTab === 'tab1'
                  ? 'absolute -bottom-1 left-0  h-[2px] bg-[#FD665E] transition-all w-full duration-500 rounded-md'
                  : ''
              }
            ></span>
          </button>
          <button onClick={handleTab2} className='relative group cursor-pointer'>
            <span className='text-sm text-[#2C2C2C]'>Plastic Chair</span>
            <span
              className={
                activeTab === 'tab2'
                  ? 'absolute -bottom-1 left-0  h-[2px] bg-[#FD665E] transition-all w-full duration-500 rounded-md'
                  : ''
              }
            ></span>
          </button>
          <button onClick={handleTab3} className='relative group cursor-pointer'>
            <span className='text-sm text-[#2C2C2C]'>Sofa Collections</span>
            <span
              className={
                activeTab === 'tab3'
                  ? 'absolute -bottom-1 left-0  h-[2px] bg-[#FD665E] transition-all w-full duration-500 rounded-md'
                  : ''
              }
            ></span>
          </button>
        </div>
      </div>

      <div className='w-full flex mt-10'>
        <div className='max-w-5xl  mx-auto'>
          {activeTab === 'tab1' && <DiscountItemTab image={'/discount_chair.png'} />}
          {activeTab === 'tab2' && <DiscountItemTab image={'/cane_chair.png'} />}
          {activeTab === 'tab3' && <DiscountItemTab image={'/white_chair.png'} />}
        </div>
      </div>
    </div>
  );
};
export default DiscountItemsTab;
