import Comment from './Comment';
import React from 'react';
import PropTypes from 'prop-types';

const CommentList = props => {
  return (
    <div>
      {
        props.comments.map(comment => {
          return (
            <Comment
              comment={comment}
              currentUser={props.currentUser}
              slug={props.slug}
              key={comment.id} />
          );
        })
      }
    </div>
  );
};
CommentList.propTypes = {
  comments: PropTypes.array,
  currentUser: PropTypes.object,
  slug: PropTypes.object,
};
export default CommentList;
