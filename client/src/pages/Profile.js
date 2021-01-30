import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from '../utils/queries';
import { capitalizeFirstLetter } from '../utils/helpers';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Profile() {
    const courses = [
        {
            id: 1,
            header: 'Project Report - April',
            description:
                'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
            meta: 'ROI: 30%',
        }
    ]

    const { loading, data } = useQuery(QUERY_USER);

    const userData = data?.user || {};
    console.log("userData: ", userData)

    if (loading) {
        return <div>Loading...</div>
    };

    return (
        <section>
            <h1 className="profile-header">
                Welcome {capitalizeFirstLetter(userData.firstName)} {capitalizeFirstLetter(userData.lastName)}
            </h1>
            <Container>
                <Row>
                    <Col>
                        <h3>Your Courses:</h3>
                        {courses.map((course, i) => (
                            <div className='' key={i}>
                                <div className='profile-courses'>
                                    <h4><b>{course.header}</b></h4>
                                    <p className='course-description'>{course.description}</p>
                                    <div>{course.meta}</div>
                                </div>
                            </div>
                        ))}
                    </Col>
                    <Col>
                        <h3>Settings</h3>
                        <p className='profile-email'>
                            {userData.email}
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Profile;