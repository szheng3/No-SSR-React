import { Link } from 'react-router-dom';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { DELETE_ARTICLE } from '../../constants/actionTypes';
import PropTypes from 'prop-types';


const ArticleActions = props => {
  const article = props.article;
  const del = () => {
    props.onClickDelete(agent.Articles.del(article.slug));
  };
  if (props.canModify) {
    return (
      <span>

        <Link
          to={`/editor/${article.slug}`}
          className="btn btn-outline-secondary btn-sm">
          <i className="ion-edit" /> Edit Article
        </Link>

        <button className="btn btn-outline-danger btn-sm" onClick={del}>
          <i className="ion-trash-a" /> Delete Article
        </button>

      </span>
    );
  }

  return (
    <span />
  );
};
ArticleActions.propTypes = {
  article: PropTypes.object,
  canModify: PropTypes.object,
  onClickDelete: PropTypes.func,
};


const mapDispatchToProps = dispatch => ({
  onClickDelete: payload =>
    dispatch({ type: DELETE_ARTICLE, payload }),
});


export default connect(() => ({}), mapDispatchToProps)(ArticleActions);
