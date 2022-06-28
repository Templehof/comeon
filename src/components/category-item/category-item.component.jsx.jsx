const CategoryItem = ({ name }) => {
	return (
		<div className="category item">
			<div className="content">
				<div className="header">{name}</div>
			</div>
		</div>
	);
};

export default CategoryItem;
