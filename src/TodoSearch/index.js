import { useContext } from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
   const {searchValue, setSearchValue } = useContext(TodoContext)
   return(
      <div className='div-search'>
         <input
            placeholder="Buscar TODO"
            value={searchValue}
            onChange={(event) => {
               setSearchValue(event.target.value);
         }}/>
      </div>
   );
}
export { TodoSearch }