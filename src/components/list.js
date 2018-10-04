import React from 'react';
import Item from './item';

const List = (props) => {
    console.log('list prpos ',props);
    const listElements = props.data.map((item, index)=> {
        // return (<li className="collection-item" key={index}> {item.title}</li>  );
       console.log('Item ',item);
        return <Item key={item._id} title={item.title} delete={props.delete.bind(this, item._id)} />
    });

    return (
        <ul className="collection">
                {listElements}
        </ul>   
      
    );
}
export default List;