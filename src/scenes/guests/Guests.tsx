import { SelectedPage } from '@/shares/type';
import { motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Guests = ({ setSelectedPage }: Props) => {
  const guestsArray = [
    {
      name: "John C Maxwell",
      job: "Leadership Expert",
      description: "John Calvin Maxwell is an American author, speaker, and pastor who has written many books, primarily focusing on leadership. Titles include The 21 Irrefutable Laws of Leadership and The 21 Indispensable Qualities of a Leader. Some of his books have been on the New York Times Best Seller List",
      image: "https://www.johnmaxwell.com/wp-content/uploads/2021/08/JohnMaxwell-400x400-1.png"
    },
    {
      name: "Mel Robbins",
      job: "Author",
      description: "Melanie Robbins is an American podcast host, author, motivational speaker, and former lawyer. She is known for her TEDx talk, ('How to Stop Screwing Yourself Over'); and her books, The 5 Second Rule and The High 5 Habit, as well as host of The Mel Robbins Podcast",
      image: "http://t1.gstatic.com/images?q=tbn:ANd9GcSefWB3jLSo1rfKqQBBlrwpsLxHMggSJvdNSZBG20DFfTApPuNtRRVp-DxnpI6v1EOH_JqXA9tGNqPgRIieL0iXyrDK80m5ba4Hq_mnNQ"
    },
    {
      name: "Simon Sinek",
      job: "Leadership Expert",
      description: "Simon Oliver Sinek is an English-born American author and inspirational speaker on business leadership. His books include Start with Why and The Infinite Game",
      image: "https://simonsinek.com/wp-content/uploads/2021/11/Book-Section.jpg"
    }
  ];

  return (
    <div
      id="episodes"
      className='p-6 py-[7rem] overflow-hidden flex-row justify-center items-center text-center bg-black-20'
    >
      <motion.h1
        initial={{ x: -300 }}
        animate={{ x: [300, 0, -300, 0] }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.2, opacity: 0.6 }}
        className='text-stone-100 mb-[5rem] text-center cursor-pointer font-black text-[2rem]'>Click to meet our guests 🔥
      </motion.h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
        {guestsArray.map((guest, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, type: "spring" }}
            layout
            className={`card bg-gray-200 p-6 rounded-md shadow-md transition duration-300 hover:shadow-lg cursor-pointer max-w-[20rem] mx-auto items-center`}
          >
            <div className='border-overlay'></div>
            <motion.img
              layout="position"
              className='w-20 h-20 object-cover rounded-full mx-auto mb-2'
              src={guest.image}
              alt={guest.name}
            />
            <motion.h2
              layout="position"
              className='text-xl text-center font-bold'>{guest.name}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 2 }}
              transition={{ duration: 2 }}
            >
              <p className='text-gray-700 mb-3'>{guest.description}</p>
              <p className='text-gray-700'>{guest.job}</p>
            </motion.div>
          </motion.div>)
        )}
      </div>
    </div>
  );
};

export default Guests;
