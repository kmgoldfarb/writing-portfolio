import React from 'react';
import { Query } from 'react-apollo';
import BIO_QUERY from './Query';
import Biography from '../Biography/Biography';

function About() {

    const variables = 'cknb5dc742lyq0b68vod5u78f';

    return (
        <Query query={BIO_QUERY} variables={variables}>
            {({loading, error, data}) => {
                    
                    if (loading) return <div><h3>Loading biography...</h3></div>
                    if (error) return <div><h3>Error loading biography.</h3></div>

                    const content = data;
                    console.log(content);

                    return (
                        <Biography 
                            name={content.biographies[0].name}
                            body={content.biographies[0].description}
                            image={content.biographies[0].image} /> 
                    );
            }}    
        </Query>
    );
}

export default About;