import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector} from "reselect";
import './collections-overview.styles.scss';
import ColletionPreview from "../collection-preview/collection-preview";
import {selectCollections} from "../../redux/shop/shop.selectors";


const CollectionsOverview = ({collections }) => (
    <div className='collect-overview'>
        {collections.map(({id, ...otherCollectionProps}) => (
            <ColletionPreview key={id} {...otherCollectionProps}/>

        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
