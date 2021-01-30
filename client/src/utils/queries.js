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
