import React,{ useState,useEffect } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import courseList from '../../courses.json';
import Course from '../../Course/Course';
import { Card } from 'react-bootstrap';

const Courses = () => {
    const [courses,setCourses]= useState([]);
    useEffect(()=>{
        setCourses(courseList);
    },[])

    return (
        <div>
        <Header></Header>
            <Card style={{margin:'20px', padding:'20px'}} width="750px ">
            {
                courses.map(course=><Course
                    key={course.id}
                    course={course}
                    ></Course>)
            }
            </Card>
            
        <Footer></Footer>
        </div>
    );
};

export default Courses;