import React from 'react';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Mobile from "../../assets/image/mobile.jpeg"
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

export const Product = () => {
    const [products, setProducts] = useState([]); // State to store fetched products
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null); // State to handle errors

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data); // Set fetched products to state
            } catch (err) {
                setError('Failed to fetch products. Please try again later.');
            } finally {
                setLoading(false); // Stop loading once the request is complete
            }
        };

        fetchProducts();
    }, []);

    // Render loading, error, or products
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='mt-5' style={{ marginBottom: "50px" }}>

            <div>
                
                <Container>
                <h1 className='mb-5'>Our Products</h1>
                <Row>
                    {products.map((product) => (
                         <Col lg={3} md={4} sm={6} xs={12} className='mb-3'>
                        <div key={product.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '10px' }}>
                        
                            <Card.Img className='mb-3' variant="top" src={product.image} style={{ width: '100%', height: '150px', objectFit: 'contain' }}  />
                            <Card.Title style={{height:"55px"}}>{product.title.length > 40 ? product.title.slice(0, 40) + "..." : product.title}</Card.Title>
                            <Card.Text>{product.category}</Card.Text>
                            <p><strong>${product.price}</strong></p>
                            <Button variant="primary">Add to Cart</Button>
                        
                        </div>
                        </Col>
                    ))}
                </Row>
                </Container>
            </div>
           
        </div >
    )
}