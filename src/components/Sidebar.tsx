import { ChangeEvent, Dispatch, SetStateAction, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Product } from '../types.ts';
import { useGetBrandsQuery, useGetCategoriesQuery } from '../features/oliveMarketApi.tsx';

const Sidebar = ({
  products,
  setProducts,
  selectedCategories,
  setSelectedCategories,
  selectedBrands,
  setSelectedBrands,
}: {
  selectedCategories: string[];
  selectedBrands: string[];
  products: Product[] | undefined;
  setProducts: Dispatch<SetStateAction<Product[] | undefined>>;
  setSelectedCategories: Dispatch<SetStateAction<string[]>>;
  setSelectedBrands: Dispatch<SetStateAction<string[]>>;
}) => {
  const { data: categories } = useGetCategoriesQuery(undefined);
  const { data: brands } = useGetBrandsQuery(undefined);

  useEffect(() => {
    if (products) {
      if (selectedCategories.length === 0 && selectedBrands.length === 0) {
        setProducts(products);
      }
    }
  }, [products, setProducts, selectedBrands, selectedCategories]);

  const handleCheckboxCategories = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    setSelectedCategories((prevCategories) => {
      if (checked) {
        // Add the category to the state if it's checked
        return [...prevCategories, value];
      } else {
        // Remove the category from the state if it's unchecked
        return prevCategories.filter((category) => category !== value);
      }
    });
  };

  const handleCheckboxBrands = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    setSelectedBrands((prevBrands) => {
      if (checked) {
        return [...prevBrands, value];
      } else {
        return prevBrands.filter((brand) => brand !== value);
      }
    });
  };

  return (
    <div className='w-full flex flex-col border-r-[1px]'>
      <div className='mb-5  pr-10'>
        <p className='text-sm underline text-[#151875] mb-2'>Categories</p>
        <div className='py-5 px-2 h-[237px] overflow-auto scrollbar-hide shadow-[0_8px_40px_0_rgba(49,32,138,0.05)]'>
          {categories &&
            categories.map((category: any) => {
              return (
                <div className='flex items-center cursor-pointer mb-2' key={category?._id}>
                  <label
                    htmlFor={category?._id}
                    className='cursor-pointer relative text-xs text-[#7E81A2] checkbox-container flex'
                  >
                    <input
                      type='checkbox'
                      name={category?.name}
                      id={category?._id}
                      value={category?.name}
                      checked={selectedCategories.includes(category?.name)}
                      onChange={handleCheckboxCategories}
                      className='appearance-none h-[14px] w-[14px] border-[1px] border-[#FD665E] mr-2 cursor-pointer'
                    />
                    <FaCheck
                      size={8}
                      className='absolute left-0.5 top-1 check-1 transition text-[#FD665E] text-opacity-0'
                    />
                    {category?.name}
                  </label>
                </div>
              );
            })}
        </div>
      </div>

      <div className='mb-5  pr-10'>
        <p className='text-sm underline text-[#151875] mb-2 '>Brands</p>
        <div className='py-5 px-2 h-[237px] overflow-auto scrollbar-hide shadow-[0_8px_40px_0_rgba(49,32,138,0.05)]'>
          {brands &&
            brands.map((brand: any) => {
              return (
                <div className='flex items-center cursor-pointer mb-2' key={brand?._id}>
                  <label
                    htmlFor={brand?._id}
                    className='cursor-pointer relative text-xs text-[#7E81A2] checkbox-container flex'
                  >
                    <input
                      type='checkbox'
                      name={brand?.name}
                      id={brand?._id}
                      value={brand?.name}
                      checked={selectedBrands.includes(brand?.name)}
                      onChange={handleCheckboxBrands}
                      className='appearance-none h-[14px] w-[14px] border-[1px] border-[#FD665E] mr-2 cursor-pointer'
                    />
                    <FaCheck
                      size={8}
                      className='absolute left-0.5 top-1 check-1 transition text-[#FD665E] text-opacity-0'
                    />
                    {brand?.name}
                  </label>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
