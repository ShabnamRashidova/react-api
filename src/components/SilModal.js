import React, { useState } from "react";
import { Modal, Button } from "semantic-ui-react";
import { useNavigate ,useParams} from "react-router-dom";
import {api} from '../api'
const SilModal = ({yazi}) => {
    const {id}=useParams();
    const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const show = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };
  const handleDelete=(id)=>{
    api().delete(`/posts/${id}`)
    .then((response)=>{
        close();
        navigate("/")
})
      }
  return (
   <>
   <Button color='red' onClick={show}>Sil</Button>
   <Modal size="mini" open={open} onClose={close}>
      <Modal.Header>Delete Your Account</Modal.Header>
      <Modal.Content>
        <p>Are you sure you want to delete your account</p>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={close}>No</Button>
        <Button positive onClick={()=>handleDelete(id)}>Yes</Button>
      </Modal.Actions>
    </Modal>
   </>
  );
};

export default SilModal;
