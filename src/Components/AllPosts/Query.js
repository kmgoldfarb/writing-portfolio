import gql from 'graphql-tag';

const POSTS_QUERY = gql`
    query {
        posts {
            title
            slug
            date
            description
            body {
                html
            }
            media {
                id
                url
            }
        }
    }
`;

export default POSTS_QUERY;