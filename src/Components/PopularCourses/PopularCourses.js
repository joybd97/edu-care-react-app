import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import PopularCourseCard from '../PopularCourseCard/PopularCourseCard';
import PopularCourse from '../../PopularCourses.json';
import { Grid } from '@mui/material';

const PopularCourses = () => {
    const [courses,setCourses] =useState([]);

    useEffect(()=>{
         
        setCourses(PopularCourse);
    },[])
    return (
        <Container>
            <h1 style={{marginTop:'50px'}}>Popular Courses</h1>
            <p style={{fontSize:'18px'}}>Your domain control panel is designed for ease-of-use and <br />
            allows for all aspects of your domains.</p>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }}>
            {
                courses.map(course=><PopularCourseCard
                    key={course.id}
                    course={course}
                    ></PopularCourseCard>)
             }
            </Grid>
             
        </Container>
    );
};

export default PopularCourses;