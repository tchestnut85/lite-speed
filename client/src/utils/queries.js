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
