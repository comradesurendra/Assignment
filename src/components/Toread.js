import React, { useEffect } from "react"
import ToRead from '../data/toread.json'
import './toread.css'
import {
  Card, CardImg, CardText, CardBody, Button
} from 'reactstrap';

function Toread() {
  return (
    <div className='main-container'>
      
      {ToRead.map((Postdata, index) => {
        return <div>
          <Card>
            <CardImg top width="100%" src={Postdata.img} alt="Card image cap" />
            <CardBody>
              <CardText>{Postdata.dis}</CardText>
            </CardBody>
          </Card>
        </div>
      })}
    </div>
  )
}

export default Toread