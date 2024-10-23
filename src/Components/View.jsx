import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'; 
import { useParams } from 'react-router-dom';
import axios from 'axios'; 

function View() {
  const { id } = useParams(); 

  const base_url = 'https://fakestoreapi.com/products';

  const [viewRestData, setViewRestData] = useState({});

  const viewRestaurant = async () => {
    try {
      const response = await axios.get(`${base_url}/${id}`);
      setViewRestData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    viewRestaurant();
  }, [id]); 

  
  return (
    <div className='p-5 m-2'>
      <Row>
        <Col className="m-5 p-5 text-center">
          <img
            src={viewRestData.image}
            width="300px"
            alt={viewRestData.title || 'Product Image'}
            className="img-fluid"
          />
        </Col>
    
        <Col className="m-5 text-center p-5">
          <h1>{viewRestData.title}</h1>

          <ListGroup variant="flush text-center m-1">
            <ListGroup.Item>Price: ${viewRestData.price}</ListGroup.Item>
            <ListGroup.Item>Category: {viewRestData.category}</ListGroup.Item>
            <ListGroup.Item>Description: {viewRestData.description}</ListGroup.Item>
            <ListGroup.Item>Rating: {viewRestData.rating?.rate} ⭐</ListGroup.Item>
            <ListGroup.Item>Review Count: {viewRestData.rating?.count}</ListGroup.Item>
          </ListGroup>

          
          <button
            onClick={() => alert('Buy Now clicked!')} 
            style={{
              backgroundColor: '#007bff', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '15px', 
              padding: '10px 20px', 
              cursor: 'pointer', 
              fontSize: '16px', 
              transition: 'background-color 0.3s ease', 
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#0056b3'; 
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#007bff'; 
            }}
          >
            Buy Now
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default View;
