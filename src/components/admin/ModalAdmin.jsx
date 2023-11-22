import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ConteModal from './ConteModal';
export default function ModalAdmin({ open, handleClose, handleOpen }) {
   
  return (
    <>
        <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ConteModal />
      </Modal>
      <Button onClick={handleOpen}>Open modal</Button>
    </div>

    </>
  )
}
