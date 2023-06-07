import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Buscador.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Autosuggest from 'react-autosuggest';


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

  return (
    <>
      <br />
      <center>
        <div role="img" className="imagenfondo">
          <section className="search-box">
            <h1>Tu casa, tu hogar</h1>
            <form>
              <div>
                <div>
                  <label className="compra-button">Comprar</label>
                  <label className="alquilar-button">Alquilar</label>
                </div>
                <DropdownButton id="dropdown-basic-button" title={selectedAction} onSelect={handleActionSelect}>
                  {renderDropdownItems.filter((item) => item.props.eventKey !== selectedAction)}
                </DropdownButton>
                <div className="search-input">
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Buscar..."
                    value={searchValue}
                    onChange={handleSearchInputChange}
                    style={{ color: 'black' }}
                  />
                </div>
              </div>
            </form>
          </section>
        </div>
      </center>
    </>
  );
};

export default Buscador;
