import { BsArrowsFullscreen } from "react-icons/bs"
import { Button,Modal } from "react-bootstrap"
import { useState } from "react"
import { useDispatch } from "react-redux"

export default function ShowPokedex() {
  const dispatch = useDispatch()
  function inverse(){
    dispatch({
        type: "INVERSE"
    })
  }
  return (

    <div>
      <Button className="mx-4" variant="primary" onClick={inverse}><BsArrowsFullscreen/>&nbsp;&nbsp;&nbsp;Show</Button>
    </div>
  )
}
