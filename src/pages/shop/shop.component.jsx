import React from 'react';

import {selectCollections} from "../../redux/shop/shop.selectors";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import CollectionsOverview from '../../components/collection-overview/collections-overview.component';
const ShopPage = ({collections}) => (

            <div className='shop-page'>
                <CollectionsOverview />
            </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
