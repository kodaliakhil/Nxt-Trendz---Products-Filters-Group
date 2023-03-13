import './index.css'
import {AiOutlineSearch} from 'react-icons/ai'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    filterByCategory,
    filterByRating,
    filterBySearchInput,
    clearFilters,
  } = props
  //   console.log(categoryOptions)

  //   const onClickCategoryBtn = event => {
  //     console.log(event.target.)
  //     filterByCategory(categoryOptions.categoryId)
  //   }

  //   const onClickRatingBtn = () => {
  //     filterByRating(ratingsList.ratingId)
  //   }

  const onChangeSearchInput = event => {
    if (event.key === 'Enter') {
      filterBySearchInput(event.target.value)
    }
  }

  const onClickClearFilterBtn = () => {
    clearFilters()
  }

  return (
    <div className="filters-group-container">
      <div className="search-box-container">
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          onKeyDown={onChangeSearchInput}
          //   onChange={onChangeSearchInput}
        />
        <AiOutlineSearch />
      </div>
      <h1 className="category-heading">Category</h1>
      <ul className="category-list-container">
        {categoryOptions.map(category => (
          <button
            onClick={() => filterByCategory(category.categoryId)}
            type="button"
            key={category.categoryId}
            className="category-btn"
          >
            <li>
              <p>{category.name}</p>
            </li>
          </button>
        ))}
      </ul>
      <h1 className="rating-heading">Rating</h1>
      <ul className="rating-list-container">
        {ratingsList.map(rating => (
          <button
            onClick={() => filterByRating(rating.ratingId)}
            type="button"
            key={rating.ratingId}
            className="rating-btn"
          >
            <li className="stars-text-container">
              <img
                className="rating-stars-img"
                src={rating.imageUrl}
                alt={`rating ${rating.ratingId}`}
              />
              <p>& up</p>
            </li>
          </button>
        ))}
      </ul>
      <button
        type="button"
        className="clear-filters-btn"
        onClick={onClickClearFilterBtn}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
