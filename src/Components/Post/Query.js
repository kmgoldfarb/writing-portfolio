import gql from 'graphql-tag';

const POST_QUERY = gql`
    query Posts($slug: String!) {
        posts(where: {slug: $slug}) {
            title
            id
            slug
            date
            description
            body {
                html
            }
            media 
        }
    }
`;

export default POST_QUERY;