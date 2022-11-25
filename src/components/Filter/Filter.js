import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filtersSlice';
import { Container } from './Filter.styled';
import { nanoid } from 'nanoid';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    const { value } = e.target;
    dispatch(setFilter(value.trim()));
  };

  return (
    <Container>
      <label htmlFor={nanoid()}>Find contacts by name</label>
      <input id={nanoid()} type="text" name="filter" onChange={changeFilter} />
    </Container>
  );
};

export default Filter;
