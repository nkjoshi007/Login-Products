import { Box, Button, Grid, Modal } from "@mui/material"
import React from "react";




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
  
export const ProductsData=()=>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <>
        <div style={{backgroundColor:"white"}}>
        <Grid xs={12} md={12}>
        <div>
      <Button onClick={handleOpen}>Open Products data form</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
        </Box>
      </Modal>
    </div>
        </Grid>
        </div>
        </>
    )
}