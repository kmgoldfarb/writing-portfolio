import gql from 'graphql-tag';

const BIO_QUERY = gql`
    query GetBio {
        biographies {
            name
            description {
                html
            }
            image {
                url
            }
        }
    }
`;

export default BIO_QUERY;
