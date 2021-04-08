import React from 'react';
import { Query } from 'react-apollo';
import POSTS_QUERY from '../AllPosts/index';
import Post from '../Post/Post';
import Navbar from '../Navbar/Navbar';
import PreviewCard from '../PreviewCard/PreviewCard';

const AllPosts = (props) => {
        return (
            <Query query={POSTS_QUERY}>
                {({loading, error, data}) => {
                    
                    if (loading) return <div><h3>Loading posts...</h3></div>
                    if (error) return <div><h3>Error loading posts.</h3></div>

                    const content = data.posts;

                    return (
                        <div>
                            <Navbar/>
                            <div>
                                {content.map(post => <PreviewCard 
                                                        key={post.slug} 
                                                        body={post.body.html} 
                                                        title={post.title} 
                                                        description={post.description}
                                                        date={post.date}/>)}
                            </div>
                        </div>
                    )
                }}
            </Query>
        );
    };


export default AllPosts;