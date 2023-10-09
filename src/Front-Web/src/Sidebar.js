import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faChartLine, faBoxArchive, faGear} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons'; 
import { faJoomla } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const navigate = useNavigate();

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);

    if (iconName === 'home') {
      navigate('/');
    } else if (iconName === 'recursosHumanos') {
      navigate('/recursosHumanos');
    } else if (iconName === 'despesas') {
      navigate('/despesas');
    } else if (iconName === 'estoque') {
      navigate('/estoque');
    } else if (iconName === 'suporte') {
      navigate('/suporte');
    }
  };

  return (
    <div className="sidebar">
      <div className="logo-container">
        <FontAwesomeIcon icon={faJoomla} className="logo" />
      </div>
      <ul>
        <li>
          <a onClick={() => handleIconClick('home')} className={activeIcon === 'home' ? 'active' : ''}>
            <FontAwesomeIcon icon={faHouseUser} /> Home Page
          </a>
        </li>

        <li>
          <a onClick={() => handleIconClick('recursosHumanos')} className={activeIcon === 'recursosHumanos' ? 'active' : ''}>
            <FontAwesomeIcon icon={faUser} /> Recursos Humanos
          </a>
        </li>

        <li>
          <a onClick={() => handleIconClick('despesas')} className={activeIcon === 'despesas' ? 'active' : ''}>
            <FontAwesomeIcon icon={faChartLine} /> Despesas
          </a>
        </li>

        <li>
          <a onClick={() => handleIconClick('estoque')} className={activeIcon === 'estoque' ? 'active' : ''}>
            <FontAwesomeIcon icon={faBoxArchive} /> Estoque
          </a>
        </li>

        <li>
          <a onClick={() => handleIconClick('suporte')} className={activeIcon === 'suporte' ? 'active' : ''}>
            <FontAwesomeIcon icon={faGear} /> Suporte
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;