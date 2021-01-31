import gql from 'graphql-tag';

export const QUERY_USER = gql`
    {
        user {
            _id
            email
            firstName
            lastName
        }
    } 
`;

export const QUERY_COURSES = gql`
    {
        courses {
            _id
            title
        }
    }
`;

export const QUERY_LESSONS = gql`
    {
        lessons {
            courseName {
                title
            }
            intro
            content
            image
            price
        }
    }
`;

export const QUERY_LESSON = gql`
    query lesson($id: ID!) {
        lesson(lessonId: $id) {
            courseName {
                title
            }
            intro
            content
            image
            price
        }
    }
`;
