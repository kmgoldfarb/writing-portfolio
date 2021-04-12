import gql from 'graphql-tag';

const BIO_QUERY = gql`
    query GetBio {
        biographies {
            name
            subhead {
                html
            }
            body {
                html
            }
            image {
                url
            }
        }
    }
`;

export default BIO_QUERY;
