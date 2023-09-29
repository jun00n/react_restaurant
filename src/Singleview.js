import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'




export default function Singleview() {



  const [restList, setRest] = useState([])//first storing as empty array...later from code.11 storing data from rest.json

  //api(js) to access json data//ASYNC-AWAIT
  const getData = async () => {
    const result = await fetch('/restaurant.json')
    result.json().then(data => { setRest(data.restaurants) })
  }
  console.log(restList);


  useEffect(() => {
    //  console.log(getData);
    getData()
  }, [])

  //obj creation for useparams
  const params = useParams()
  console.log(params.id);

  const singlerest =restList.find(i => i.id == params.id)
  console.log(singlerest);




  return (
    <div>  
      <Row className='singlerow'>
      <div style={{marginTop:50,backgroundColor:'white',padding:10,display:'inline',borderRadius:10,justifyContent:'center'}} className='container w-75 text-dark'>
        <Col lg={8} md={6}style={{display:'inline-block'}}>
          <img className='w-100' src={singlerest?.URL}></img>
        </Col>
        <Col lg={4}style={{display:'inline-block'}}>
        <h2> {singlerest?.name}</h2><br/>
        <h5> {singlerest?.address}</h5>
        <h5> {singlerest?.address_line_2}</h5>
        <h5>Food Type:  {singlerest?.type_of_food}</h5>
        <h5>Rating:  {singlerest?.rating}</h5>
        </Col>
        </div>
      </Row>
      </div>
 
  )
}
