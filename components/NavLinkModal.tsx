// DismissableModal.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, Modal } from './flowbite/cliented-flowbite';

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
        
        <Modal.Body>
          <Link href="/" className="text-base font-medium" onClick={() => setOpenModal(undefined)}>Home 
          </Link>
          <Link href="/about" className="text-base font-medium" onClick={() => setOpenModal(undefined)}>About
          </Link>
          <Link href="/market" className="text-base font-medium" onClick={() => setOpenModal(undefined)}>Market
          </Link>
          <Link href="/contacts" className="text-base font-medium" onClick={() => setOpenModal(undefined)}>Contacts
          </Link>
          <Link href="/blog" className="text-base font-medium" onClick={() => setOpenModal(undefined)}>Blog
          </Link>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DismissableModal;
