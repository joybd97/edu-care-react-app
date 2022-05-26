import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const PopularCourseCard = (props) => {
    console.log(props)
    const {Title,Price}=props.course;
    return (
        <div>
        <Card className="text-center" style={{margin:'10px', backgroundColor:'#5383d3', color:'white' , width:'630px', display: 'flex'}}>
            <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <h5>Price:{Price}$</h5>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum molestiae animi tempore molestias voluptatibus possimus asperiores consectetur cupiditate, libero nihil.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
                
            </Card.Body>
             
            <Card.Footer className="text-muted" style={{color:'white'}}>Edu-Care</Card.Footer>
            </Card>
        </div>
    );
};

export default PopularCourseCard;