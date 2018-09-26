import React from 'react';
import listData from '../data/list';

const List = (props) => {
    console.log('list data ', listData);
    const listElements = listData.map((item, index)=> {
        return (<li className="collection-item" key={index}> {item.title}</li>  );
    });
    return (
        
        <ul className="collection">
                {listElements}
        </ul>   
      
    );
}
export default List;