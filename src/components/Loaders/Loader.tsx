import { ClipLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div data-testid='loading' className='w-full flex justify-center pt-[200px] h-screen bg-[#FFF]'>
      <ClipLoader size={50} color='#FD665E' />
    </div>
  );
};
export default Loader;
