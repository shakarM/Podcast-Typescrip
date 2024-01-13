import { SelectedPage } from '@/shares/type';
import { useMediaQuery } from '@react-hook/media-query';
import podcast from '@/assets/podcast.svg';
import { ActionButton } from '@/shares/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const tagVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5 } }, // Adjust delay as needed
  };

  return (
    <section id='home' className='gap-16 py-10 md:h-full md:pb-0'>
      <div className='md:flex mx-auto w-5/6 items-center justify-around md:h-5/6'>
        <motion.div
         onViewportEnter={()=> setSelectedPage(SelectedPage)}
          initial='hidden'
          animate='visible'
          transition={{duration: 2}}   
          variants={variants}
          whileInView={{ once: true, amount: 0.5 }}
          className='mt-32 text-left'
        >
          <h1 className='text-[4.5rem] font-bold z-10'> Shakar's Podcast </h1>
          <p className='w-full sm:w-[31rem] font-medium mt-6'>
            Our aim is to raise the voice of those who deserve to be listened. Our topics are about{' '}
            <span className='font-semibold text-gold-45'>growth, development, mindset, science, and technology</span>. Our
            treasure is welcoming anyone with any idea
          </p>
          <div className='flex gap-4 mt-6'>
            <motion.div
            initial={{scale: 0}}
            animate={{scale:1}}
            transition={{duration: 1}}   
            variants={tagVariants}>
      
              <ActionButton> Become a Guest </ActionButton>
            </motion.div>
            <motion.div   
             initial={{scale: 0}}
            animate={{scale:1}}
            transition={{duration: 1}}
             variants={tagVariants}>
              <AnchorLink
                className='underline mx-5 hover:text-gold-40 transition duration-500'
                href='https://www.youtube.com/channel/UCY1rBbgnp70m9SMS31ThOmA'
              >
                Visit our YouTube
              </AnchorLink>
            </motion.div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div      initial='hidden'
          animate='visible'
          variants={variants}
          whileInView={{ once: true, amount: 0.5 }} variants={tagVariants}>
          <img className='w-[12rem] mx-auto md:mt-32 mt-6' src={podcast} alt='podcast-element' />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
