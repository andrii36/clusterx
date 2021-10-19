import React from 'react';
import { connect } from 'react-redux';
import Categories from './Categories/Categories';
import styles from './Content.module.css';
import SearchPanel from './SearchPanel/SearchPanel';
import WebsiteInfo from './WebsiteInfo/WebsiteInfo';

const Content = (props) => {

  return (
    <div className={styles.content}>
      <SearchPanel/>
      <WebsiteInfo/>
      <Categories/>
    </div>
  );
}

let mapStateToProps = (state) => ({
  initialized: state.auth.initialized
})
export default connect(mapStateToProps, null)(Content);