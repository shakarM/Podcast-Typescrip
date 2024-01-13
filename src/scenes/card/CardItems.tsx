import { ActionButton } from '@/shares/ActionButton';
import { SelectedPage } from '@/shares/type';

import { animate, motion, LazyMotion, domAnimation } from "framer-motion"


type Props = {
    selectedPage: string;
  setSelectedPage: (value: SelectedPage) => void;
}

const information = [
    {
      title: 'How to be successful in anything?',
      host: 'Simon Sinek',
      description: 'In this episode Simon tells us the importance of trust, discipline, and leadership in order to become the best at anything.',
      link: '#',
      image: 'https://d33hx0a45ryfj1.cloudfront.net/transform/bc079c76-23b8-4001-99cf-ec05004625e7/simon-sinek-and-steve-bartlett?io=transform:fill,width:1200,height:675',
    },
    {
      title: 'The Power of High Five?',
      host: 'Mell Robbins',
      description: 'In this episode Mel intrudces us with her last book "The High Five Habit"',
      link: '#',
      image: 'https://www.richroll.com/wp-content/uploads/2022/11/Mel-Robbins_Ep723____Carausel_910x607-6-600x400.jpg',
    },
  ];

export const CardItems = ({selectedPage, setSelectedPage}: Props) => {
   
      return (
        <motion.div   
     
     
          className='flex  tr flex-wrap overflow-x-hidden justify-center items-center p-6'>
          {information.map(({ title, image, host, description, link }) => (
             <LazyMotion features={domAnimation}>
           <motion.div  
    
           
            animate={{ '--rotate': '0deg',duration:4, opacity: 4, scale: 0.9, } as any}
            transition={{ duration: 2, repeat: 1, repeatType: 'reverse'  }}
            style={{ transform: 'rotate(var(--rotate))' }} 
            key={title} className='bg-black-20 overflow-x-hidden w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 mx-2 my-4 text-center rounded-md overflow-hidden'>
              <img className='w-full h-40 object-cover mb-4' src={image} alt='episode' />
    
              <h1 className='text-stone-100 text-lg font-bold mb-2'>{title}</h1>
              <h3 className='text-stone-100 text-sm font-semibold mb-2'>Guest: {host}</h3>
              <p className='text-stone-100 text-sm font-medium line-clamp-3 truncate mb-4'>{description}</p>
    
              <ActionButton
                href={link}
                target='footer'
                rel='noopener noreferrer'
                className='bg-gold-45 text-white px-4 py-2 rounded-full inline-block hover:bg-gold-50 transition duration-300'
              >
                Watch Now
              </ActionButton>
            </motion.div>
            </LazyMotion>
          ))}
        </motion.div>
      );
}