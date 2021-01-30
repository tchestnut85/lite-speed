import gql from 'graphql-tag';

export const QUERY_USER = gql`
    query user($email: String!) {
        user(email: $email) {
            _id
            email
            firstName
            LastName
        }
    }
`;

export const QUERY_LESSONS = gql`
    query lessons {
            _id
            courseName
            intro
            content
            image
            price
    }
`;

export const QUERY_LESSON = gql`
    query lesson($id: ID!) {
        lesson(_id: $id) {
            _id
            name
            courseName
            intro
            content
            image
            price
        }
    }
`;
