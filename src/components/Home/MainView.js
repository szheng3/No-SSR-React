import ArticleList from '../ArticleList';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { CHANGE_TAB } from '../../constants/actionTypes';
import PropTypes from 'prop-types';

const YourFeedTab = props => {
  if (props.token) {
    const clickHandler = ev => {
      ev.preventDefault();
      props.onTabClick('feed', agent.Articles.feed, agent.Articles.feed());
    };

    return (
      <li className="nav-item">
        <a href=""
          className={props.tab === 'feed' ? 'nav-link active' : 'nav-link'}
          onClick={clickHandler}>
          Your Feed
        </a>
      </li>
    );
  }
  return null;
};
YourFeedTab.propTypes = {
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

const GlobalFeedTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick('all', agent.Articles.all, agent.Articles.all());
  };
  return (
    <li className="nav-item">
      <a
        href=""
        className={props.tab === 'all' ? 'nav-link active' : 'nav-link'}
        onClick={clickHandler}>
        Global Feed
      </a>
    </li>
  );
};

GlobalFeedTab.propTypes = {
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
const TagFilterTab = props => {
  if (!props.tag) {
    return null;
  }

  return (
    <li className="nav-item">
      <a href="" className="nav-link active">
        <i className="ion-pound" /> {props.tag}
      </a>
    </li>
  );
};
TagFilterTab.propTypes = {
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

const mapStateToProps = state => ({
  ...state.articleList,
  tags: state.home.tags,
  token: state.common.token,
});

const mapDispatchToProps = dispatch => ({
  onTabClick: (tab, pager, payload) => dispatch({ type: CHANGE_TAB, tab, pager, payload }),
});

const MainView = props => {
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">

          <YourFeedTab
            token={props.token}
            tab={props.tab}
            onTabClick={props.onTabClick} />

          <GlobalFeedTab tab={props.tab} onTabClick={props.onTabClick} />

          <TagFilterTab tag={props.tag} />

        </ul>
      </div>

      <ArticleList
        pager={props.pager}
        articles={props.articles}
        loading={props.loading}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage} />
    </div>
  );
};

MainView.propTypes = {
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


export default connect(mapStateToProps, mapDispatchToProps)(MainView);
