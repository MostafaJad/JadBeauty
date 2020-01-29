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
                id: 1
              },
              {
                title: 'Best Sallers',
                imageUrl: 'https://i.ibb.co/hdPK1v5/6.png',
                size:'large',

                id: 2
              },
              {
                title: 'SkinCare',
                imageUrl: 'https://i.ibb.co/WtL7tQG/6.png',
                size: 'large',
                id: 3
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5
              }
            ]
          };
        }

        render(){
            return(
                <div className='directory-menu'>
                    {this.state.sections.map(({title, imageUrl, id, size}) =>(
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))}
                </div>
            );
        }


    }

    export default Directory;

