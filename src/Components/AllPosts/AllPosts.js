import React from 'react';
import { Query } from 'react-apollo';
import POSTS_QUERY from './Query';
import PreviewCard from '../PreviewCard/PreviewCard';
import classes from './AllPosts.module.css';

const AllPosts = props => {
  return (
    <Query query={POSTS_QUERY}>
      {({ loading, error, data }) => {
        if (loading)
          return (
            <div className={classes.Loading}>
              <h3>Loading posts...</h3>
            </div>
          );
        if (error)
          return (
            <div>
              <h3>Error loading posts.</h3>
            </div>
          );

        const content = data.posts;

        const previewPosts = content.map(post => (
          <PreviewCard
            key={post.slug}
            slug={post.slug}
            body={post.body.html}
            title={post.title}
            description={post.description}
            date={post.date}
          />
        ));

        return <div className={classes.HomePosts}>{previewPosts}</div>;
      }}
    </Query>
  );
};

export default AllPosts;
