import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import * as React from 'react';

export default function ConfirmDialog({ remove, openDialog }) {
  const [deleteDialog, setDeleteDialog] = openDialog;

  const handleClose = () => {
    setDeleteDialog(false);
  };

  return (
    <>
      <Dialog
        open={deleteDialog}
        onClose={handleClose}
        sx={{padding:'15px !important'}}
      >
        <DialogTitle >{'Are you Sure, You want to Delete ?'}</DialogTitle>
        <DialogActions>
          <Button variant='contained' color='error' sx={{color:'#fff',minWidth:'100px'}} onClick={remove}>Yes</Button>
          <Button variant='contained' sx={{color:'#fff',minWidth:'100px'}} onClick={handleClose}>No</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
