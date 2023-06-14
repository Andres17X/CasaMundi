import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Buscador.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaSearch } from 'react-icons/fa';
import Autosuggest from 'react-autosuggest';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';

const Buscador = () => {
  const dropdownItems = ['Viviendas', 'Terrenos', 'Oficinas'];
  const [selectedAction, setSelectedAction] = useState(dropdownItems[0]);
  const [municipios, setMunicipios] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleActionSelect = (action) => {
    setSelectedAction(action);
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const renderDropdownItems = dropdownItems.map((item) => (
    <Dropdown.Item key={item} eventKey={item}>
      {item}
    </Dropdown.Item>
  ));
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Alquilar', value: '1' },
    { name: 'Comprar', value: '2' },
  ];

  const handleSearchButton = () => {
    fetch('https://localhost:7031/WeatherForecast', {
        
    }) 
      .then((response) => response.json())
      .then((data) => {
        // Aquí puedes manejar los datos de la respuesta
        console.log(data);
      })
      .catch((error) => {
        // Aquí puedes manejar los errores de la petición
        console.error(error);
      });
  };

  

  return (
    <>
      <div className='main'>
        <div
          role="img"
          style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <section className="search-box row">
            <div className='title_search col-12'>
              <h1>Tu casa, tu hogar</h1>
            </div>
            <div className='main_container d-flex justify-content-sm-center'>
              <div style={{ marginRight: '1%' }} >
                <ButtonGroup>
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      variant={'outline-primary'}
                      name="radio"
                      value={radio.value}
                      checked={radioValue === radio.value}
                      onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </div>
              <DropdownButton  style={{ marginRight: '1%' }} id="dropdown-basic-button" title={selectedAction} onSelect={handleActionSelect}>
                {renderDropdownItems.filter((item) => item.props.eventKey !== selectedAction)}
              </DropdownButton>
              <div style={{ marginRight: '1%' }}>
                <input type="text" className="input-field" />
                <FaSearch className="input-icon" />
              </div>
              <div>
                <Button variant="success" onClick={handleSearchButton}>Buscar</Button>{' '}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Buscador;
