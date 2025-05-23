import React, { useState } from 'react'
import { RiShoppingCartFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { RiNotificationFill } from "react-icons/ri";
import { IoIosSunny, IoMdMoon } from "react-icons/io";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Profile_left_part from '../components/Profile_left_part';
import { useTheme } from "./ThemeContext";
import { useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoChevronBackOutline } from "react-icons/io5";
import bag from '../assets/bluebag.png'
import bluebag from '../assets/bag.png'
import { MdShoppingCart } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import whitebag from "../assets/whitebag.png";

const Header = ({ color, textColor,bagUrl }) => {

    const [search, setSearch] = useState("");
    /*  const [darkMode, setDarkMode] = useState(false); */ /* sarthak dark mode */
    /*  const toggleDarkMode = () => setDarkMode(!darkMode); */
    const { darkMode, toggleDarkMode } = useTheme();  /*  kamal dark mode */
    const [notification, setNotification] = useState(1);
    const placeholderWords = [
    "Electronics",
    "Book",
    "Cycle",
    "Essential",
    "Mattress",
  ];
 const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [fade, setFade] = useState(true);


    const handleSearchBar = (e) => {
        setSearch(e.target.value);
    }

    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
    return (
        
        <nav style={{ backgroundColor: color, color: textColor }} className={`flex text-black items-center justify-between pt-6 pb-3 md:pb-4 sm:pl-10 md:pr-10 lg:pl-[4.6vw] lg:pr-[4.6vw] lg:pb-4 lg:pt-5 xl:pb-4 xl:pt-5 `}>
            <div className='flex justify-between pl-5 pr-6 w-full items-center sm:hidden font-poppins dark:text-white'>
               
         {/*  <RiMenu2Line size={25} /> */}

                  <button onClick={toggleSidebar} className="p-2 bg-transparent text-black">
                    {isOpen ? <X size={25} /> : <RiMenu2Line  size={25} />}
                </button> 
                 
       
                <div className="flex items-center font-bold text-lg gap-[1vw] dark:text-white">
          {darkMode ? <img src={whitebag} className="size-4 lg:size-5" /> : <img src={bagUrl} className="size-4 lg:size-5" />}

          <a href="/">Campus Mart</a>
          </div>
   <MdShoppingCart size={25} />

    {/* kamal code change for slidable menu motion */}

            <motion.div
  initial={{ x: -350 }}
  animate={{ x: isOpen ? 0 : -350 }}
  transition={{ type: "spring", stiffness: 100 }}
  className="fixed top-5 left-4 w-80 bg-white dark:bg-[#1A1D20] text-black shadow-lg z-40 sm:hidden rounded-xl mt-[2vh] h-[87vh] pt-[2.2vh]"
>
  <div className="flex justify-between items-center">
    <motion.button
      onClick={toggleSidebar}
      className="absolute top-6 right-[5.5vw] z-10"
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <X className='text-black dark:text-white' size={21} />
    </motion.button>
  </div>
  <div>
    <Profile_left_part />
  </div>
</motion.div>

           
         

            </div>

           

            <div className="hidden items-center font-bold text-lg gap-[0.4vw] md:text-base sm:flex lg:text-xl xl:text-[1.4vw] font-poppins md:gap-[0.6vw] lg:gap-[0.5vw] dark:text-white">
        {darkMode ? (
          <img src={whitebag} className="size-3 lg:size-5" />
        ) : (
          <img src={bagUrl} className="size-3 lg:size-5" />
        )}
        <a href="/">Campus Mart</a>
      </div>


           <div className="relative items-center bg-white rounded-md shadow-[0px_3px_14px_0px_rgba(0,0,0,0.07)] outline outline-2 outline-neutral-200 hover:shadow-md transition ease-in-out duration-200 hidden sm:flex cursor-pointer xl:py-[0.5vh] lg:pr-3 lg:mr-[2vw] xl:mr-[5vw]">
        <input
          className="rounded-md px-3 outline-none w-[25vw] lg:w-[27vw] placeholder-transparent text-black sm:py-[0.4vh]  md:py-[0.9vh] lg:py-[0.5vh] xl:py-[0.6vh] text-md font-poppins lg:text-base md:text-xs lg:px-6 relative z-10 bg-transparent"
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={handleSearchBar}
          aria-label="Search products"
        />

        {/* Animated Placeholder Text */}
        {search === "" && (
          <span
            className={`absolute left-4 lg:left-6 flex items-center gap-1 md:text-sm xl:text-base lg:text-sm`}
          >
            <span className="text-gray-500 dark:text-[#303030]">Search for</span>
            <span
              className={` text-[#364EF2] pointer-events-none transition-opacity duration-500 z-0 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {placeholderWords[placeholderIndex]}
            </span>
          </span>
        )}

        <CiSearch
          size={22}
          className="text-black size-4 lg:size-5 mr-2 cursor-pointer"
        />
      </div>

       <div className="hidden items-center text-[1.9vw] sm:flex gap-8 md:gap-7 lg:gap-11 font-medium xl:gap-14">
        <div className="flex justify-center items-center text-[1.5vw] sm:gap-5 lg:gap-8 xl:gap-10">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="transition duration-500 ease-in-out"
          >
            {darkMode ? (
              <IoIosSunny className="text-white sm:size-4 md:size-5 lg:size-6 transition-all duration-500 ease-in-out rotate-0 scale-100" />
            ) : (
              <IoMdMoon className="text-black sm:size-4 md:size-5 lg:size-6 transition-all duration-500 ease-in-out rotate-0 scale-100" />
            )}
          </button>

          <button
            className="relative dark:text-white"
            aria-label="Notifications"
          >
            <RiNotificationFill className="sm:size-4 md:size-4 lg:size-6" />
            {notification > 0 && (
              <span className="absolute bg-red-500 text-white flex items-center justify-center rounded-full sm:size-2 text-xs p-[0.8vw] top-[-0.6vh] lg:top-[-0.7vh] right-[-0.3vw] xl:p-[0.5vw]">
                {notification}
              </span>
            )}
          </button>
        </div>
        <Link
          to="/"
          className="hover:text-blue-500 transition duration-200 md:text-[1.7vw] xl:text-[1.2vw] font-poppins font-medium dark:text-white"
        >
          Orders
        </Link>
        <Link
          to="/"
          className="hover:text-blue-500 transition duration-200 md:text-[1.7vw] xl:text-[1.2vw] font-poppins dark:text-white"
        >
          Chats
        </Link>
        <Link
          to="/"
          className="hover:text-blue-500 transition duration-200 md:text-[1.7vw] xl:text-[1.2vw] font-poppins dark:text-white"
        >
          Menu
        </Link>
      </div>
    </nav>
    )
}
export default Header