/* eslint-disable max-len */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useTranslation } from 'react-i18next';
import '../../i18n/config.js';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  align: 'center',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Instruction() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { t } = useTranslation();

  return (
    <>
      <button onClick={handleOpen} data-cy="Rules">{t('rules')}</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            How to Play
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Poketori is a word association game based on Pokemon.
            <br></br>
            <br></br>
            You are tasked with submitting Pokemon names based on the last letter of the previous name.
            <br></br>
            <i>*Example: Charmande<u><b>r</b></u> - <u><b>R</b></u>hyhor<u><b>n</b></u> - <u><b>N</b></u>idoking.*</i>
            <br></br>
            <br></br>
            The goal is to chain together as many Pokemon as possible within the time limit.
            <br></br>
            <br></br>
            <b>The Timer will reset each time a vaild name is submitted, so be quick!</b>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
