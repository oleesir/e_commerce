import ProductCard from '../Cards/ProductCard.tsx';

const SpecialOfferTab = () => {
  return (
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
  );
};
export default SpecialOfferTab;
