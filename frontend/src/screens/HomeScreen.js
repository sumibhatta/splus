import React from 'react'
import Product from '../component/Product'
import {Row, Col} from 'react-bootstrap'
import products from '../products'
const HomeScreen = () => {
    return (
        <Row className="p-5">
            <h2 className="col-12">Featured Products</h2>
           {products.map(product =>(
               <Col key={product._id} sm={12} md={6} xl={3}>
               <Product product ={product}/>
               </Col>
           ))}
        </Row>
    )
}

export default HomeScreen
