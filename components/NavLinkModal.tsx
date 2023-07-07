import { useState } from 'react';
import Link from 'next/link';
import { Button, Modal } from 'flowbite-react';

function DismissableModal() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <>
      <Button onClick={() => props.setOpenModal('dismissible')}>Toggle Modal</Button>
      <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>Navigation</Modal.Header>
        
        <Modal.Body>
          <Link href="/"> 
            <a  className="text-base font-medium" onClick={() => props.setOpenModal(undefined)}>Home</a>  
          </Link>s
          <Link href="/about"> 
            <a className="text-base font-medium" onClick={() => props.setOpenModal(undefined)}>About</a> 
          </Link>
          <Link href="/market"> 
            <a className="text-base font-medium" onClick={() => props.setOpenModal(undefined)}>Market</a> 
          </Link>
          <Link href="/contacts"> 
            <a className="text-base font-medium" onClick={() => props.setOpenModal(undefined)}>Contacts</a> 
          </Link>
          <Link href="/blog"> 
            <a className="text-base font-medium" onClick={() => props.setOpenModal(undefined)}>Blog</a> 
          </Link>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DismissableModal;
