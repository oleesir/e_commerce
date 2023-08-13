import { ReactNode, useState } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

const AccordionLayout = ({ title, children }: { title: string; children: ReactNode }) => {
  const [open, setOpen] = useState(true);

  const handlePanel = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div
        onClick={handlePanel}
        className='flex w-full justify-between p-2 mt-2 rounded-none border-t-[2px]'
      >
        <div className='flex'>
          <p className='text-[20px] font-bold text-[#151875]'>{title}</p>
        </div>
        <div className='flex items-center justify-center'>
          {!open ? (
            <SlArrowUp className='w-4 h-4 cursor-pointer' />
          ) : (
            <SlArrowDown className='w-4 h-4 cursor-pointer' />
          )}
        </div>
      </div>

      {!open && <div className=' border-b-[1px] rounded-none  p-4 mb-6 '>{children}</div>}
    </div>
  );
};

export default AccordionLayout;
