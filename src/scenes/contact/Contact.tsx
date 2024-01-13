import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ActionButton } from '@/shares/ActionButton';

export const ContactUs = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm('service_o7qlfaj', 'template_uv598cr', form.current, 'zxm_mAAD-24wZWYks');
      console.log(result.text);
      setSent(true); // Update state on successful submission
    } catch (error) {
      console.error(error.text);
    }
  };

  return (
    <div id='contact' className='flex-wrap justify-center items-center py-[4rem] '>
      <h1 className='text-center text-2xl mt-3 font-bold'> Share your thoughts with us! </h1>
      <div className='flex flex-col items-center bg-back p-4 md:flex-row md:justify-center'>
        <div className='md:w-3/4 max-w-md mx-auto p-4 rounded-md mb-6 md:mb-0'>
          <h1 className='text-3xl font-bold text-gold-40 mb-4'>
            We'd Love to Hear from You!
          </h1>
          <p className='text-gray-700 mb-4'>
            If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us. Fill out the form below, and we'll get back to you as soon as possible.
          </p>
          <p className='text-gray-700'>
            Thank you for considering us!
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='md:w-1/2 max-w-md mx-auto p-6 rounded-md'
        >
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
            <input
              required
              type='text'
              name='user_name'
              className='w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
            <input
              required
              type='email'
              name='user_email'
              className='w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Message</label>
            <textarea
              required
              name='message'
              className='w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500'
            />
          </div>
          <button
            type='submit'
            className='w-full focus:outline-none rounded-md bg-gold-40 text-black-20 p-2 hover:bg-black-20 transition duration-500 hover:text-white'
          >
            Send
          </button>
          {sent && <p>Your feedback has been successfully sent!</p>}
        </form>
      </div>
    </div>
  );
};
