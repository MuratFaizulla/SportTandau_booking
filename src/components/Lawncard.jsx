import React, { useEffect, useState } from 'react';
import LawncardItem from './LawncardItem';
import './../assets/Lawncard.css'
import { Link } from 'react-router-dom';


const Lawncard = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(false);




  useEffect(() => {
    setIsLoading(true)
    fetch("https://alphaedu.portfolio-adilzhexenov.kz/news")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => setIsError(err.toString()))
      .finally(() => { setIsLoading(false); });

  }, []);

  return (
    <div>
      <h2>Спортивные площадки</h2>
      <div className='Lawncard'>
        {isLoading ? "Загрузка..." : posts.slice(0, 3).map(post => (<LawncardItem post={post} key={post._id} />))}
        {
          error ? "Произошла ошибка" : ""
        }
        {/* <LawncardItem /> */}
      </div>
      <Link className='qwer' to="/aaaaa">Показать все площадки</Link>
    </div>

  );
}

export default Lawncard;
