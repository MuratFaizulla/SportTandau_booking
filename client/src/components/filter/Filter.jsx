import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Slider from 'react-slider';
import './Filter.css'

const Min = 10000;
const Max = 25000;
const Filter = () => {
    const [values, setValues] = useState([Min, Max]);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedSortOption, setSelectedSortOption] = useState('');

    const handleSliderChange = (newValue) => {
        setValues(newValue);
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSortChange = (event) => {
        setSelectedSortOption(event.target.value);
    };

    return (
        <div className='Filter'>
            <h3 className='filter_title'>Фильтр</h3>
            <div className='Price'>
                <div className='box'>
                    <h3 className='title'>Цена  <span>за сеанс</span></h3>
                    <div className='value-range'>
                        <div className='value'>{`от ${values[0]}`}</div>
                        <div className='value'>{`до ${values[1]}`}</div>
                    </div>
                    {/* <small>
                        Текущий диапазон: {values[1] - values[0]} тг
                    </small> */}
                    <Slider
                        className='slider'
                        onChange={handleSliderChange}
                        value={values}
                        min={Min}
                        max={Max}
                        valueLabelDisplay="auto"

                    />
                </div>
            </div>

            <div className='Covered'>
                <h3 className='title'>Покрытое</h3>
                <div>
                    <label> <input type="checkbox" />  Натуральный газон </label>
                    <br />
                    <label> <input type="checkbox" /> Искусственный газон </label>
                    <br />
                    <label> <input type="checkbox" /> Паркет </label>
                    <br />
                    <label> <input type="checkbox" /> Другое </label>

                </div>
            </div>

            <div className='Room_type'>
                <h3 className='title'>Тип помещения</h3>
                <div className="select-container">
                    <select value={selectedOption} onChange={handleSelectChange} >
                        <option value="">Не важно</option>
                        <option value="option1">Открытая площадка</option>
                        <option value="option2">Помещение</option>
                    </select>
                </div>
            </div>

            <div className='Facilities'>
                <h3 className='title'>Удобства</h3>
                <div>
                    <label> <input type="checkbox" /> Душ </label>
                    <br />
                    <label> <input type="checkbox" /> Парковка </label>
                    <br />
                    <label> <input type="checkbox" /> Магазин </label>
                    <br />
                    <label> <input type="checkbox" /> Раздевалка </label>
                    <br />
                    <label> <input type="checkbox" /> Трибуны для зрителей </label>
                    <br />
                    <label> <input type="checkbox" /> Освещение </label>
                    <br />
                    <label> <input type="checkbox" /> Охрана </label>
                </div>

            </div>


            <div className='Choose_city'>
                <div className="select-city">
                    <select className="select_city" value={selectedSortOption} onChange={handleSortChange}>
                        <option value="" disabled hidden>Выбрать город</option>
                        <option value="Astana">Астана</option>
                        <option value="Almaty">Алматы</option>
                        <option value="Shumkent">Шымкент</option>
                    </select>
                </div>
            </div>


            <div className='Sort_rating'>
                <h3 className='title'>Сортировать по цене или рейтингу</h3>
                <div className="select-container">
                    <select className="select_custom" value={selectedSortOption} onChange={handleSortChange}>
                        <option value="">Не важно</option>
                        <option value="cheaper">Сначало дешевле</option>
                        <option value="expensive">Сначала дороже</option>
                        <option value="high_rating">Высокий рейтинг</option>
                    </select>
                </div>
            </div>


            <div className="Continue">
                <Link to="/area" className='Continue_reset'>Сбросить все</Link>
                <button className='Сontinue_button'>Продолжить</button>
            </div>


        </div>

    );
};

export default Filter;





