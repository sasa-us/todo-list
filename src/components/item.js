import React from 'react';

const Item =(props)=> {
    console.log('item props ', props);
    return (
        <li className="collection-item row">
            <div className="col s10">
                {props.title}
            </div>
            <div className="col s2 right-align">
                <button onClick={props.delete} className="btn red">Delete</button>
            </div>
        </li>
    );
}

export default Item;