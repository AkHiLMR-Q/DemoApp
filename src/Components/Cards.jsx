import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Cards({ restArray }) {
  return (
    <div>
      <div className="row">
        {restArray.map((item) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-5" key={item.id}>
            <Link to={`/view/${item.id}`} style={{ textDecoration: 'none' }}>
              <Card style={{ width: '300px', height: '350px' }} className="mx-auto">
                <div style={{ overflow: 'hidden', width: '150px', margin: 'auto' }}>
                  <Card.Img
                    variant="top"
                    src={item.image}
                    height={'200px'}
                    style={{
                      width: '150px',
                      objectFit: 'contain',
                      transition: 'transform 0.3s ease-in-out',
                    }}
                    className="mx-auto mt-4"
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <Card.Body className=" text-dark">
                  <Card.Title>
                    <h5 style={{ fontSize: '20px' }}>{item.title.slice(0, 20)}...</h5>
                  </Card.Title>
                  <Card.Text>${item.price}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
