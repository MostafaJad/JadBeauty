const INITIAL_STATE = {
    sections: [
        {
            title: 'MakeUp',
            imageUrl: 'https://i.ibb.co/LxJ9M1Q/4.png',
            size:'large',
            id: 1,
            linkUrl: 'shop/makeup'
        },
        {
            title: 'Best Sellers',
            imageUrl: 'https://i.ibb.co/hdPK1v5/6.png',
            size:'large',
            id: 2,
            linkUrl: 'shop/bestsallers'

        },
        {
            title: 'SkinCare',
            imageUrl: 'https://i.ibb.co/WtL7tQG/6.png',
            size: 'large',
            id: 3,
            linkUrl: 'shop/skincare'

        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'

        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'

        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export  default  directoryReducer;
