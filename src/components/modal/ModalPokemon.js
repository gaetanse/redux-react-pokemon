import { useSelector,useDispatch } from "react-redux"
import { Modal,Button,Col,Row } from "react-bootstrap"
import { useState } from "react";

export default function ModalPokemon() {

  const show = useSelector(state=>state.show)
  const listePokemonsCaptures = useSelector(state=>state.listePokemonsCaptures)

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

    {
      listePokemonsCaptures.map(e=>{
        return(
          <Row style={{background: 'cyan',border: "solid white 3px"}}>
            <Col><img src={e.sprites.front_default} style={{width: "auto",height: "auto"}}></img></Col>
            <Col>
              <Row>
                <strong>Name Height Weight</strong>
              </Row>
              <Row>
              <p>{e.name} {e.height} {e.weight}</p>
              </Row>
            </Col>
          </Row>
        )
      })
    }

    </Modal.Body>
    <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
    </Modal.Footer>
  </Modal>
  )
}
