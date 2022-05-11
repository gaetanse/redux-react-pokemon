import { useDispatch } from "react-redux"
import { Button } from "react-bootstrap"
import { IoClose } from "react-icons/io5"

export default function ClearPokedex() {
  const dispatch = useDispatch()
  function clear(){
    dispatch({
        type: "CLEAR-CAPTURES",
        payload: []
    })
  }
  //CLEAR-CAPTURES
  return (
    <Button variant="danger" onClick={clear}><IoClose/>&nbsp;&nbsp;&nbsp;Clear</Button>
  )
}
