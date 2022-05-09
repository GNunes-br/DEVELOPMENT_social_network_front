import { Filter, SearchBox } from './style'

const FilterComponent = (): JSX.Element => {
    return (
        <Filter>
            <SearchBox>
                <input type="text" placeholder="Buscar" />
                <button>
                    <img src="search-icon.svg" />
                </button>
            </SearchBox>
        </Filter>
    )
}

export default FilterComponent
