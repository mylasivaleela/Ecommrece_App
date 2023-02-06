import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Product.css';

const Product = ({title,image,description,price}) => {
    return (
        <Card style={
            {width: '15rem',margin: '30px'}
        }>
            <Card.Img variant="top" style={{height:'20rem'}} src={image}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price}</Card.Text>
                {/* <Card.Text>
                    {description}
                </Card.Text> */}
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Product;
