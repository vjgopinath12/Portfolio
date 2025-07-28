import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    setCurrentYear(year);
  }, []);
  return (
    <footer>
      <hr className='hidden dark:block' />

      <div className='w-full flex flex-col md:flex-row py-20 px-8 md:px-10 gap-10 lg:gap-20 justify-between '>
        <p className='text-lg text-white font-semibold '>
          Address IIST Indore,
          453331, IN
        </p>

        <div className='flex flex-col md:flex-row text-md gap-5 md:gap-20 text-white '>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
        </div>

        <div className='flex flex-col gap-5 text-md text-white '>
          <p>shekharkrsingh6432</p>
          <p>+91 95499 64878</p>
        </div>
      </div>

      <div className='flex flex-col gap-10 items-center justify-center pb-20 '>
        <p className='text-white font-semibold tracking-wider'>Social Media</p>

        <div className='flex gap-10 text-white text-2xl mb-10 '>
          <a href="https://www.linkedin.com/in/shekhar-singh-kr/">
            <BsLinkedin className='hover:scale-110' />
          </a>
          <a href="https://github.com/shekharkrsingh">
          <FaGithub className='hover:scale-125' />
          </a>
        </div>

        <p className='text-gray-400 text-md tracking-wider'>@{currentYear} Shekhar</p>
      </div>
    </footer>
  );
};

export default Footer;