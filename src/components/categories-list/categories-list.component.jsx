import CategoryItem from "../category-item/category-item.component.jsx";

const CategoriesList = ({categories}) => {

    return (
        <div className="four wide column">
        <h3 className="ui dividing header">Categories</h3>
        <div className="ui selection animated list category items">
            {categories.map((category) => (
                <CategoryItem
                    key={category.id}
                    name={category.name}
                />
            ))}
        </div>
    </div>
    )
}

export default CategoriesList;