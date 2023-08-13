import AccordionLayout from '../layouts/AccordionLayout.tsx';

const Accordion = ({ title, description }: { description: string | undefined; title: string }) => {
  return (
    <div className='w-full cursor-pointer '>
      <AccordionLayout title={title}>{description}</AccordionLayout>
    </div>
  );
};
export default Accordion;
