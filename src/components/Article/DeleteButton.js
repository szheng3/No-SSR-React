import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { DELETE_COMMENT } from '../../constants/actionTypes';
import CommentList from './CommentList';
import PropTypes from 'prop-types';


const DeleteButton = props => {
  const del = () => {
    const payload = agent.Comments.delete(props.slug, props.commentId);
    props.onClick(payload, props.commentId);
  };

  if (props.show) {
    return (
      <span className="mod-options">
        <i className="ion-trash-a" onClick={del} />
      </span>
    );
  }
  return null;
};
DeleteButton.propTypes = {
  commentId: PropTypes.number,
  onClick: PropTypes.func,
  show: PropTypes.object,
  slug: PropTypes.object,

};
const mapDispatchToProps = dispatch => ({
  onClick: (payload, commentId) =>
    dispatch({ type: DELETE_COMMENT, payload, commentId }),
});
export default connect(() => ({}), mapDispatchToProps)(DeleteButton);
