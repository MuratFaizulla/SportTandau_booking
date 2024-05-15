import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';


const Profile = () => {
  const { user } = useContext(AuthContext);
  const [username, setUsername] = useState(user ? user.username : '');
  const [id, setId] = useState(user ? user._id : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setId(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь ты можешь отправить данные на сервер для обновления профиля пользователя
    console.log('Updated profile:', { username, id, email });
    // Сбросим пароль после отправки
    setId('');
  };

  return (
    <div>
      <h2>Профиль пользователя</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Имя пользователя:</label>
          <input type="texta" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Пароль:</label>
          <input type="password" value={id} onChange={handlePasswordChange} />
        </div>
        <div>
          <label>Адрес электронной почты:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <button type="submit">Сохранить изменения</button>
      </form>
    </div>
  );
};
  

export default Profile;
