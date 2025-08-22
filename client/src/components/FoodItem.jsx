function FoodItem(props) {
    return(
        <div className="food-item">
            <h3 className="food-name">{props.name}</h3>
            <p className="food-description">{props.description}</p>
            <p className="food-price">€{props.price}</p>
        </div>
    );
}

export default FoodItem;