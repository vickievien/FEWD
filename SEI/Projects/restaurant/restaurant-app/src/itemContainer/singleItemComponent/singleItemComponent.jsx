const SingleItemComponent = (props) => {
    
    return (
        <div className="index-single-item">
            <h2>{props.item.productName}</h2>
            {props.item.quantity > 0 ? 
            <div><p>quantity: {props.item.quantity}</p></div> : <p>Out of stock</p>>}
        </div>
    )
}

export default SingleItemComponent;