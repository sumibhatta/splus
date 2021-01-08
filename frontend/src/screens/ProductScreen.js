import React from 'react'
import {Link} from 'react-router-dom'
import{Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import products from '../products'
import Rating from '../component/Rating'

const ProductScreen = ({match}) => {

    let product = products.find(p => p._id === match.params.id)

    return (
        <>
            <Link className="btn btn light my-3 mx-4" to="/">Go Back</Link>
            <Row className="ml-3">
                <Col className="border" md={6}><Image src = {product.image} fluid/></Col>
                <Col md={3}>
                    <ListGroup varient="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                           <h5>Price: Rs.{product.price}</h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup varinet="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>Rs.{product.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{product.countInStock>0?'In Stock':'Out of Stock'}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn btn-block" type="button" disabled={product.countInStock === 0}>ADD TO CART</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
