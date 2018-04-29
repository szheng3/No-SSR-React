import ArticlePreview from './ArticlePreview';
import ListPagination from './ListPagination';
import React from 'react';
import PropTypes from 'prop-types';

const ArticleList = props => {
  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.articles.map(article => {
          return (
            <ArticlePreview article={article} key={article.slug} />
          );
        })
      }

      <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage} />
    </div>
  );
};

ArticleList.propTypes = {
  appName: PropTypes.string,
  articles: PropTypes.any,
  articlesCount: PropTypes.any,
  currentPage: PropTypes.any,
  loading: PropTypes.any,
  onTabClick: PropTypes.func,
  onUnload: PropTypes.func,
  pager: PropTypes.any,
  tab: PropTypes.any,
  tag: PropTypes.any,
  tags: PropTypes.any,
  token: PropTypes.any,
};
export default ArticleList;
