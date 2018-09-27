import React from 'react';

const List = (props) => {
    const listElements = props.data.map((item, index)=> {
        return (<li className="collection-item" key={index}> {item.title}</li>  );
    });
    return (
        
        <ul className="collection">
                {listElements}
        </ul>   
      
    );
}
export default List;