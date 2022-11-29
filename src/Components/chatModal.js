import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Form from 'react-bootstrap/Form';
import SendIcon from '@mui/icons-material/Send';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const BasicModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <div className="bubble-box">How can we help you?</div>
        <img className="bubble" alt="chat" src="https://girlpowertalk.com/wp-content/uploads/2021/12/Sameer-Somal-3.png" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" >
            <Form action="#" method="POST">
                <input type="hidden" name="_subject" value="New message from portfolio.. Woohoo!" />
                <input type="hidden" name="_captcha" value="false"></input>
                <input type="hidden" name="_template" value="table"></input>
                <Form.Group className="mb-3" controlId="formBasicName" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control className="form-inputs" required type="name" name="Name" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="form-inputs" required type="email" name="Email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control className="form-inputs" type="name" name="Phone Number" placeholder="Ex: +91 0123456789" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Message</Form.Label><br />
                    <textarea className="form-inputs" name="Message" placeholder="Express your help"></textarea>
                </Form.Group>
                <Button className="send" type="submit" variant="contained" endIcon={<SendIcon />}>
                  Submit
                </Button>
            </Form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;