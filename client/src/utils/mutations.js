import gql from 'graphql-tag';

export const CREATE_USER = gql`
    mutation createUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        createUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
            token
            user {
                _id
                firstName
                lastName
                email
            }
        }
    }
`;

export const LOGIN = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password) {
            token
            user {
                _id
                firstName
                lastName
                email
            }
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($firstName: String, $lastName: String, $email: String, $password: String){
        updateUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password){
            token
            user{
                _id
                firstName
                lastName
                email
                password
            }
        }
    }
`;

export const CHANGE_PASSWORD = gql`
    mutation changePassword($password: String){
        changePassword(password: $password){
                _id
                password
            }
        }
`;

export const SAVE_COURSES = gql`
        mutation saveCourses($courseId: ID!, $courseTitle: String!) {
            saveCourses(courseId: $courseId, courseTitle: $courseTitle) {
                _id
                firstName
                lastName
                email
                password
                savedCourses {
                    _id
                    title
                }
            }
        }
`;

export const REMOVE_COURSE = gql`
        mutation removeCourse($courseId: ID!) {
            removeCourse(courseId: $courseId) {
                _id
                firstName
                lastName
                email
                password
                savedCourses {
                    _id
                }
            }
        }
`;