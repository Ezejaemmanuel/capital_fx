// DismissableModal.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, Modal } from './flowbite/cliented-flowbite';
import { IoMdSearch } from 'react-icons/io';

interface DismissableModalProps {
    open: boolean;
}

const DismissableModal: React.FC<DismissableModalProps> = ({ open }) => {
    const [openModal, setOpenModal] = useState<string | undefined>(open ? 'dismissible' : undefined);

    useEffect(() => {
        setOpenModal(open ? 'dismissible' : undefined);
    }, [open]);

    return (
        <>
            <Modal dismissible show={openModal === 'dismissible'} onClose={() => setOpenModal(undefined)}>
                <Modal.Header>Navigation</Modal.Header>
                
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
        </>
    );
}

export default DismissableModal;
