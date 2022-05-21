import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Shared/Header/Header';
import img from '../../pictures/front.jpg';
import { Button } from 'bootstrap';
import PopularCourses from '../PopularCourses/PopularCourses';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col>
                     
                    <img style={{height:'500px'}} src={img} alt="" />
                    </Col>
                    <Col>
                     <h1 style={{ color:'blue', padding:'150px 50px 20px 50px', fontSize:'50px'}}>
                     Learn your <br /> Favorite Course <br /> From Online </h1>
                     <button style={{backgroundColor:'#380f85', color:'white',
                      borderRadius:'10px', height:'50px', width:'150px', fontSize:'20px'}}>
                     Learn More</button>
                    </Col>
                </Row>
                </Container>
            <PopularCourses></PopularCourses>
            <Footer></Footer>
        </div>
    );
};

export default Home;