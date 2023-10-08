import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/Contacts/FilterSlice';
import css from './Filter.module.css';
import { selectFilter } from 'redux/Contacts/selectors';
export function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <label className={css.NameStyle}>
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
