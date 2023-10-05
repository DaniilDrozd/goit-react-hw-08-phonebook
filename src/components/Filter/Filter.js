import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/ToContacts/filterSlice';
import css from './Filter.module.css';
import { selectFilter } from 'redux/ToContacts/selectors';
export function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          className={css.NameStyle}
        />
      </label>
    </div>
  );
}

export default Filter;
