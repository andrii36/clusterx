import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getListThunk } from '../../../Redux/search-reducer';
import ListItem from './ListItem';

const ListPage = (props) => {
    let list = props.itemsList.map(e => <ListItem image={e.image} title={e.title} itemId={e._id}/>)
    let main = props.match.params.main

    useEffect(() => {
        props.getListThunk(main)
    }, [])
        
        return props.messages.length > 0 ? <div>{props.messages[0]}</div> : <div>{list}</div>
}

let mapState = (state) => ({
    itemsList: state.search.itemsList,
    messages: state.search.messages
})

export default compose(
    connect(mapState, { getListThunk }),
    withRouter
)(ListPage)