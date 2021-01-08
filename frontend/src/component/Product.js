import React from 'react'
import {Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({product}) => {
    return (
        <Card className="my-3 p-2 rounded">
            <a href={`/product/${product._id}`}>
            <Card.Img src={product.image}/>
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as='div'><h6>{product.name}</h6></Card.Title>
                </a>
                <Card.Text as="div"><Rating value={product.rating}  from={product.numReviews}/></Card.Text>
                <Card.Text as="h3">Rs. {product.price}</Card.Text>
            </Card.Body>
            
        </Card>
    )
}

export default Product
