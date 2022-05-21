import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import pic1 from '../../pictures/1.jpg';
import pic2 from '../../pictures/2.jpg';
import pic3 from '../../pictures/3.jpg';

const About = () => {
    return (
        <div>
            <Header></Header>
            <Container style={{padding:'20px'}}>
                <Row>
                    <Col>
                     <img src={pic1} alt="" />
                     
                    </Col>
                    <Col>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ducimus aspernatur vero error non? Voluptates vitae enim, est facilis fugiat totam repudiandae, exercitationem at deleniti voluptate consequatur, neque cupiditate dolorum nesciunt qui quae consequuntur. Totam quae laborum mollitia doloremque, pariatur consequuntur beatae recusandae laudantium autem impedit nisi soluta cupiditate sed? Non possimus, fuga vel, quis unde dolor quidem commodi reiciendis expedita dolore qui iste aliquid sapiente aperiam magnam recusandae molestiae.</p>
                    </Col>
                </Row>
                </Container>
            <Container style={{padding:'20px'}}>
                <Row>
                    <Col>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ducimus aspernatur vero error non? Voluptates vitae enim, est facilis fugiat totam repudiandae, exercitationem at deleniti voluptate consequatur, neque cupiditate dolorum nesciunt qui quae consequuntur. Totam quae laborum mollitia doloremque, pariatur consequuntur beatae recusandae laudantium autem impedit nisi soluta cupiditate sed? Non possimus, fuga vel, quis unde dolor quidem commodi reiciendis expedita dolore qui iste aliquid sapiente aperiam magnam recusandae molestiae.</p>
                     
                    </Col>
                    <Col>
                        <img src={pic2} alt="" />
                    </Col>
                </Row>
                </Container>
            <Container style={{padding:'20px'}}>
                <Row>
                    <Col>
                    
                     <img src={pic3} alt="" />
                    </Col>
                    <Col>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ducimus aspernatur vero error non? Voluptates vitae enim, est facilis fugiat totam repudiandae, exercitationem at deleniti voluptate consequatur, neque cupiditate dolorum nesciunt qui quae consequuntur. Totam quae laborum mollitia doloremque, pariatur consequuntur beatae recusandae laudantium autem impedit nisi soluta cupiditate sed? Non possimus, fuga vel, quis unde dolor quidem commodi reiciendis expedita dolore qui iste aliquid sapiente aperiam magnam recusandae molestiae.</p>
                    </Col>
                </Row>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;