const CategoryItem = ({ name, handleFilter }) => {
	const getFilter = () => {
		return name === 'VIDEO SLOTS' ? 1 : name === 'SLOT MACHINES' ? 2 : 0;
	};

	return (
		<div className="category item">
			<div className="content">
				<div
					className="header"
					onClick={() => {
						handleFilter(getFilter());
					}}
				>
					{name}
				</div>
			</div>
		</div>
	);
};

export default CategoryItem;
