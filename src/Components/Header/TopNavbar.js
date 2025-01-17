import React, { useState } from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


export const TopNavbar = ({ name, ...props }) => {
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(prevShow => !prevShow);
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', // Example image URL
            title: 'Fjallraven - Foldsack No. 1 Backpack',
            quantity: 1,
            price: 100, // Example price
        },
        {
            id: 2,
            image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            title: 'Product 2',
            quantity: 1,
            price: 150,
        },
    ]);

    const [coupon, setCoupon] = useState('');

    const handleAddQuantity = (id) => {
        const updatedCartItems = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCartItems);
    };

    const handleRemoveQuantity = (id) => {
        const updatedCartItems = cartItems.map((item) =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setCartItems(updatedCartItems);
    };

    const handleClearCart = () => {
        setCartItems([]);
    };

    const handleCouponChange = (e) => {
        setCoupon(e.target.value);
    };

    const handleApplyCoupon = () => {
        alert(`Coupon applied: ${coupon}`);
    };

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <Navbar expand="lg" bg="dark" variant='dark'>
            <Container>

                <Col>
                    <Navbar.Brand href="#" style={{ fontWeight: "800" }}>Shop Cart</Navbar.Brand>
                </Col>
                <Col xs={8}>
                    {/* Navbar toggle button always visible */}
                    <Navbar.Toggle aria-controls="navbarScroll" onClick={handleToggle} />
                    {/* Show the Offcanvas when toggle is clicked */}
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Category</Nav.Link>
                            <NavDropdown title="Product" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">
                                Contact Us
                            </Nav.Link>
                        </Nav>

                        <Form className="d-flex me-3">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="primary">Search</Button>
                        </Form>
                        <Button path="" variant="link" onClick={handleToggle} style={{ position: "relative" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#fff" className="bi bi-cart3" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                            <div className='cartCount' style={{ position: "absolute", top: "0", right: "0", color: "#fff" }}>0</div>
                        </Button>


                        <Offcanvas show={show} onHide={handleToggle} placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Cart Details</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div className="cart-page">
                                    <h4 className='mb-3'>Your Cart</h4>
                                    {cartItems.length === 0 ? (
                                        <p>Your cart is empty</p>
                                    ) : (
                                        cartItems.map((item) => (
                                            <div key={item.id} className="cart-item row">
                                                <div className="col-2">
                                                    <img src={item.image} alt={item.title} width="40" />
                                                </div>
                                                <div className="col-6">
                                                    <h6>{item.title}</h6>
                                                    <p>${item.price}</p>
                                                </div>
                                                <div className="col-4">
                                                    <Button onClick={() => handleRemoveQuantity(item.id)} style={{width: "30px", height: "30px", lineHeight: "0", textAlign: "center", padding: "0", borderRadius: "10px 0 0 10px"}}>-</Button>
                                                    <span style={{padding:"10px"}}>{item.quantity}</span>
                                                    <Button onClick={() => handleAddQuantity(item.id)} style={{width: "30px", height: "30px", lineHeight: "0", padding: "0", borderRadius: "0 10px 10px 0"}}>+</Button>
                                                </div>
                                            </div>
                                        ))
                                    )}

                                    <div className="cart-actions">
                                        

                                        <div className="coupon-section">
                                            <Form className="d-flex mb-3 mt-3">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Coupon Code"
                                                    className="me-2"
                                                    aria-label="text"
                                                />
                                                <Button variant="outline-success">Submit</Button>
                                            </Form>
                                            {/* <input
                                                type="text"
                                                placeholder="Enter Coupon Code"
                                                value={coupon}
                                                onChange={handleCouponChange}
                                                style={{ padding: "10px" }}
                                            />
                                            <Button onClick={handleApplyCoupon}>Apply Coupon</Button> */}
                                        </div>

                                        <div className="checkout">
                                            <h4>Total: ${total}</h4>
                                            <Button className='mt-2 mb-2 me-2'>Checkout</Button>
                                            <Button onClick={handleClearCart} className='mt-2 mb-2'>Clear Cart</Button>
                                        </div>
                                    </div>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Navbar.Collapse>
                </Col>
            </Container>
        </Navbar>
    )
}
