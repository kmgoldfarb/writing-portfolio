import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import FullPost from '../FullPost/FullPost';
import classes from './Post.module.css';

const Post = props => {
  console.log(props.match.params.slug);

  const postID = props.match.params.slug;

  const variables = {
    slug: postID,
  };

  const POST_QUERY = gql`
    query FullPost($slug: String!) {
      post(where: { slug: $slug }) {
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

        const content = data;
        console.log(content);

        return (
          <div>
            <FullPost
              title={content.post.title}
              body={content.post.body.html}
              date={content.post.date}
            />
          </div>
        );
      }}
    </Query>
  );
};

export default Post;
