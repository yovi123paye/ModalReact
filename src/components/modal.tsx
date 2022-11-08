import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, Input, InputLabel, TextField } from '@mui/material';


interface ModalProps {
  /**
   * Etiqueta del Titulo que se visualizará
   */
  titulo: string;
  /**
   * Texto de bajo el Titulo
   */
  mensaje: string;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const BasicModal = ({
  titulo,
  mensaje
}: ModalProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button  onClick={handleOpen} >Abrir Formulario</Button>
   
   <Dialog   open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
    <DialogTitle>
FORMULARIO DE INSCRIPCIÓN
    </DialogTitle>
    <DialogContent>
    <TextField id="nombre" label="Nombre" variant="outlined" />
    <TextField id="apellido" label="Apellido" variant="filled" />
    <TextField id="telf" label="Telefono" variant="outlined" />
    <TextField id="email" label="Correo" variant="filled" />
    </DialogContent>
   <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose} autoFocus >
            Aceptar
          </Button>
        </DialogActions>
   </Dialog>
    </div>
  );
}
