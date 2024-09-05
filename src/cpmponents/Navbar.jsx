import React, { useEffect, useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
// import { LINKS } from '../constants';
import { AnimatePresence,motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);
    const conatinerVariable = {
        hidden:{opacity :0 , y:"_100"},
        visible:{opacity :1, y:0,
            transition:{
                staggerChildren : 0.1
            }
        }
    }
    const linkvariable = {
        hidden:{opacity :0 , y:"_50"},
        visible:{opacity :1, y:0,
        }}
        const LINKS = [
          { id: "projects", name: "projects" },
          { id: "about", name: "about" },
          { id: "experience", name: "experience" },
          { id: "contact", name: "Contact" },
        ];
    return (
        <div>
            <nav className='fixed right-0 top-0 z-30 p-4'>
                <button onClick={toggleMenu} className='rounded-md p-2'>
                    {isOpen ? <FaTimes className='h-6 w-6' /> : <FaBars className='h-6 w-6 text-lime-400 ' />}
                </button>
            </nav>
            <AnimatePresence>
            {isOpen && (
                <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={conatinerVariable}
                className='fixed inset-0 z-20 flex flex-col items-center justify-center bg-black text-white'>
                    <ul className='space-y-6 text-3xl'>
                        {LINKS.map((link) => (
                            <motion.li key={link.id}
                            variants={linkvariable}
                            >
                                <a
                                    href={`#${link.id}`}
                                    onClick={toggleMenu}
                                    className='text-3xl font-semibold uppercase tracking-wide hover:text-lime-300 lg:text-5xl'>
                                    {link.name}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
}

export default Navbar;

