import { SelectedPage } from '@/shares/type';
import { CardItems } from './CardItems';
import { motion } from 'framer-motion';


type Props = {
  selectedPage: string;
  setSelectedPage: (value: SelectedPage) => void;
};



export const Card = ({ selectedPage, setSelectedPage }: Props) => {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };
    
    
 return (
 <motion.div
 id='benefits'
 initial='hidden'
 animate='visible'
 transition={{duration: 2}}   
 variants={variants}
 whileInView={{ once: true, amount: 0.5 }}
 className='flex-wrap justify-center items-center mx-auto shadow-md'>


<div className='text-center  flex-wrap '>
    <h1 className='font-bold text-[3rem] text-gold-40  '> Latest episodes👇🏻 </h1>
   
</div>

<CardItems
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
    />
     <p className='font-medium pb-20 text-center text-[1rem] sm:text-[1.3rem]'> You can see all episodes by clicking on 👉🏻 <a href='#' className='underline hover:text-gold-40 transition duration-300'> this link</a></p>
 </motion.div>
 )
};
