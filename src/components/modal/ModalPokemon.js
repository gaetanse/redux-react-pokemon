import { useSelector,useDispatch } from "react-redux"
import { Modal,Button } from "react-bootstrap"
import { useState } from "react";

export default function ModalPokemon() {

  const show = useSelector(state=>state.show)

  const dispatch = useDispatch()

  function close(){
    dispatch({
        type: "INVERSE"
    })
  }

  return (
    <Modal show={show} >
    <Modal.Header>
      <Modal.Title>Ma pokeBall</Modal.Title>
    </Modal.Header>
    <Modal.Body>



    </Modal.Body>
    <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
    </Modal.Footer>
  </Modal>
  )
}
