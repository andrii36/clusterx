import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getListThunk } from '../../../Redux/search-reducer';
import ListItem from './ListItem';

const ListPage = (props) => {
    let list = props.itemsList.map(e => <ListItem image={e.image} title={e.title} itemId={e._id}/>);
    
    //useEffect(() => props.getListThunk(), [])
    
        return (
            <div>
                {list}
            </div>
        )
}

let mapState = (state) => ({
    itemsList: state.search.itemsList
})

export default connect(mapState, { getListThunk })(ListPage);