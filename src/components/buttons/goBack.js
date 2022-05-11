import { Button } from "react-bootstrap"
import { BsArrowReturnLeft } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

export default function GoBack() {
  const navigate = useNavigate()
  function goToHome(){
    navigate("/")
  }
  return (
    <Button className="btn btn-primary" onClick={goToHome}><BsArrowReturnLeft/>&nbsp;&nbsp;&nbsp;Back to list</Button>
  )
}
