import CategoryItem from "../category-item/category-item.component.jsx";

const CategoriesList = ({categories, handleFilter}) => {

    return (
        <div className="four wide column">
        <h3 className="ui dividing header">Categories</h3>
        <div className="ui selection animated list category items">
            {categories.map((category) => (
                <CategoryItem
                    key={category.id}
                    name={category.name}
                    handleFilter={handleFilter}
                />
            ))}
        </div>
    </div>
    )
}

export default CategoriesList;