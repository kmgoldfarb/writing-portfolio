import React from 'react';
import { graphql, Query, useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import FullPost from '../FullPost/FullPost';

const Post = (props) => {

    console.log(props.match.params.slug);

    const postID = props.match.params.slug;

    const variables = {
        slug: postID
    }

    const POST_QUERY = gql`
        query FullPost ($slug: String!) {
            post(where: {slug: $slug}) {
                title
                id
                slug
                date
                description
                body {
                    html
                }
            }
        }
    `;

    return (
        <Query query={POST_QUERY} variables={variables}>
            {({loading, error, data}) => {
                    
                    if (loading) return <div><h3>Loading posts...</h3></div>
                    if (error) return <div><h3>Error loading posts.</h3></div>

                    const content = data.posts;
                    console.log(content);
                    
                    const singlePost = content.map(post => 
                        <FullPost 
                            key={post.slug} 
                            slug={post.slug}
                            body={post.body.html} 
                            title={post.title} 
                            description={post.description}
                            date={post.date} />);

                    return (
                        <div>
                            {singlePost}
                        </div>
                    )
            }}    
        </Query>
    );
}

export default Post;

/*
<Query query={POST_QUERY}>
{({loading, error, data}) => {            
    if (loading) return <div><h3>Loading posts...</h3></div>
    if (error) return <div><h3>Error loading posts.</h3></div>

    const fullPost = data;

    return (
        <div>
            {fullPost}
            {  <div dangerouslySetInnerHTML={content.body} /> }
        </div>
     );
}}     
</Query> */