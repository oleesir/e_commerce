import AccordionLayout from '../layouts/AccordionLayout.tsx';

const Accordion = () => {
  return (
    <div className='flex flex-col '>
      <AccordionLayout title='Customer Reviews'>This is Accordion 1 Content</AccordionLayout>
      <AccordionLayout title='About This Product'>This is Accordion 2 Content</AccordionLayout>
    </div>
  );
};
export default Accordion;
