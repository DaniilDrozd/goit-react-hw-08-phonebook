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
  console.log('Current filter value:', filter);
  return (
    <div>
      <label className={css.NameStyle}>
        <div className={css.name}>Find contacts by name</div>
        <input
          type="text"
          className={css.inpt}
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
}

export default Filter;
