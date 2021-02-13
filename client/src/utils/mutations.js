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
        mutation saveCourses($courseData: CourseInput!) {
            saveCourses(courseData: $courseData) {
                _id
                firstName
                lastName
                email
                savedCourses {
                    _id
                    title
                }
            }
        }
`;