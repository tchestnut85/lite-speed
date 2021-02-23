import gql from 'graphql-tag';

export const QUERY_ME = gql`
    {
        me {
            _id
            email
            firstName
            lastName
            password
            savedCourses {
                _id
                title
            }
            grades {
                _id
                lessonName
                grade
            }
        }
    } 
`;

export const QUERY_ALL_COURSES = gql`
    {
        courses {
            _id
            title
        }
    }
`;

export const QUERY_LESSON = gql`
    query lesson($id: ID!) {
        lesson(_id: $id) {
            _id
            courses {
                _id
                title
            }
            name
            intro
            content
            image
            price
        }
    }
`;

export const QUERY_LESSONS = gql`
  query get($courses: ID) {
    lessons(courses: $courses) {
      _id
      name
      intro
      content
      price
      image
      courses {
        _id
        title
      }
    }
  }
`;