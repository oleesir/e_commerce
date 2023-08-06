import AccordionLayout from '../layouts/AccordionLayout.tsx';

const Accordion = ({ description }: { description: string | undefined }) => {
  return (
    <div className='flex flex-col '>
      <AccordionLayout title='Customer Reviews'>This is Accordion 1 Content</AccordionLayout>
      <AccordionLayout title='About This Product'>{description}</AccordionLayout>
    </div>
  );
};
export default Accordion;
