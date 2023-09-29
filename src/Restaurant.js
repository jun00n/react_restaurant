import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './rest.css'
import { Link } from 'react-router-dom';



function Restaurant() {

  const [restList, setRest] = useState([])//first storing as empty array...later from code.11 storing data from rest.json

  //api(js) to access json data//ASYNC-AWAIT
  const getData = async () => {
    const result = await fetch('./restaurant.json')
    result.json().then(data => { setRest(data.restaurants) })
  }
  //console.log(restList);

  useEffect(() => {
    //  console.log(getData);
    getData()
  }, [])

  return (
    <Row>
      {
        restList.map(rest => (

          < Col id='c1' lg={4} md={6} className='p-3 mb-5'>

            <Link id='li' to={`/singleview/${rest.id}`}>
              <Card className='mt-5 ms-4' style={{ width: '15rem', backgroundColor: 'whitesmoke', height: 350, padding: 7 }}>
                <Card.Img style={{ height: 220 }} variant="top" src={rest.URL} />
                <Card.Body style={{ color: 'black' }}>
                  <Card.Title>{rest.name}</Card.Title>
                  <Card.Text>{rest.address} </Card.Text>
                  {/* <Card.Text>{rest.type_of_food}</Card.Text>
                  <Card.Text>Rating:{rest.rating} </Card.Text> */}
                </Card.Body>
              </Card>
              </Link>
          </Col>
        ))
      }

    </Row>

  )
}

export default Restaurant