import React from 'react';

const Reviewitem = (props) => {
    const {name, quantity} = props.product;
    const reviewItemStyle={
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'
    };
    return (
        <div style={reviewItemStyle}>
            <h4 className='product-name'>{name}</h4>
            <p>{quantity}</p>
            <br />
            <button className='main-button'>Remove</button>
        </div>
    );
};

export default Reviewitem;