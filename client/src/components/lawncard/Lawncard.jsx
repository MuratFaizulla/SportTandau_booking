import LawncardItem from './LawncardItem';
import './Lawncard.css'
import { Link } from 'react-router-dom';
import { AREA_PAGE_ROUTE } from '../../utils/consts';
import Error from '../Error';
import useFetch from '../../hooks/useFetch';


const Lawncard = () => {

  const { data, loading, error } = useFetch(
    "/fields"
  );
  console.log(error)

  return (
    <div>
      <h2 className='sports_grounds'>Спорт алаңдары</h2>
      <div className='Lawncard'>
        {loading ? "Загрузка..." : data.slice(0,3).map(post => (<LawncardItem post={post} key={post._id} />))}
        {error ? <Error/> : null}
      </div>
      
      <Link className='qwer' to={AREA_PAGE_ROUTE} onClick={() => (AREA_PAGE_ROUTE)}>Показать все площадки</Link>
    </div>

  );
}

export default Lawncard;
