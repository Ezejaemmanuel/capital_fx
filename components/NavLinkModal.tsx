"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, Modal } from './flowbite/cliented-flowbite';
import { IoMdSearch } from 'react-icons/io';
import { motion } from 'framer-motion';

const modalVariants = {
  hidden: { x: '100vw' },
  visible: { x: 0, transition: { type: 'spring', stiffness: 50 } },
  exit: { x: '100vw', transition: { ease: 'easeInOut' } },
};

interface DismissableModalProps {
    open: boolean;
}

const DismissableModal: React.FC<DismissableModalProps> = ({ open }) => {
    const [openModal, setOpenModal] = useState<string | undefined>(open ? 'dismissible' : undefined);

    useEffect(() => {
        setOpenModal(open ? 'dismissible' : undefined);
    }, [open]);

    return (
        <motion.div
          className="modal"
          variants={modalVariants}
          initial="hidden"
          animate={open ? 'visible' : 'exit'}
        >
            <Modal dismissible show={openModal === 'dismissible'} onClose={() => setOpenModal(undefined)}>
                <div className='flex-col justify-center'>
                <Modal.Header>Navigation</Modal.Header>
                <div className="absolute top-0 right-0 w-64 mt-15 mr-2">
                    <div className="px-2 pt-2 pb-3 bg-white rounded-lg shadow">
                        <div className="flex items-center space-x-2">
                            <input className="w-full p-2 rounded-md" type="text" placeholder="Search..." />
                            <IoMdSearch className="text-gray-600 h-6 w-6" />
                        </div>
                    </div>
                </div>
                </div>
                <Modal.Body>
                    <div className="flex flex-row justify-between">
                        <Link href="/" className="text-base font-medium hover:text-blue-500 transition-colors duration-200" onClick={() => setOpenModal(undefined)}>Home
                        </Link>
                        <Link href="/about" className="text-base font-medium hover:text-blue-500 transition-colors duration-200" onClick={() => setOpenModal(undefined)}>About
                        </Link>
                        <Link href="/market" className="text-base font-medium hover:text-blue-500 transition-colors duration-200" onClick={() => setOpenModal(undefined)}>Market
                        </Link>
                        <Link href="/contacts" className="text-base font-medium hover:text-blue-500 transition-colors duration-200" onClick={() => setOpenModal(undefined)}>Contacts
                        </Link>
                        <Link href="/blog" className="text-base font-medium hover:text-blue-500 transition-colors duration-200" onClick={() => setOpenModal(undefined)}>Blog
                        </Link>
                    </div>
                </Modal.Body>
            </Modal>
        </motion.div>
    );
}

export default DismissableModal;
