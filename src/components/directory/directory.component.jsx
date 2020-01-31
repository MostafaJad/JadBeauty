import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections: [
              {
                title: 'MakeUp',
                imageUrl: 'https://i.ibb.co/LxJ9M1Q/4.png',
                size:'large',
                id: 1,
                linkUrl: 'makeup'
              },
              {
                title: 'Best Sallers',
                imageUrl: 'https://i.ibb.co/hdPK1v5/6.png',
                size:'large',
                id: 2,
                linkUrl: 'BestSallers'

              },
              {
                title: 'SkinCare',
                imageUrl: 'https://i.ibb.co/WtL7tQG/6.png',
                size: 'large',
                id: 3,
                linkUrl: 'SkinCare'

              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'womens'

              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'mens'

              }
            ]
          };
        }

        render(){
            return(
                <div className='directory-menu'>
                    {this.state.sections.map(({id, ...otherSectionProps}) =>(
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))}
                </div>
            );
        }


    }

    export default Directory;

