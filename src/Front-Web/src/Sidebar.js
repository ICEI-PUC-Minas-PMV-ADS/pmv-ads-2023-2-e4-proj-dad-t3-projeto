import React, { useContext } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseUser,
  faChartLine,
  faBoxArchive,
  faGear,
  faRightFromBracket,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faJoomla } from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from './context/authContext';

const Sidebar = () => {
  const ctx = useContext(AuthContext);
  return (
    <div className="sidebar">
      <div className="logo-container">
        <FontAwesomeIcon icon={faJoomla} className="logo" />
      </div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/"
          >
            <FontAwesomeIcon icon={faHouseUser} /> Home Page
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/recursosHumanos"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <FontAwesomeIcon icon={faUser} /> Recursos Humanos
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/despesas"
          >
            <FontAwesomeIcon icon={faChartLine} /> Despesas
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/estoque"
          >
            <FontAwesomeIcon icon={faBoxArchive} /> Estoque
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/faturamento"
          >
            <FontAwesomeIcon icon={faDollarSign} /> Faturamento
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/suporte"
          >
            <FontAwesomeIcon icon={faGear} /> Suporte
          </NavLink>
        </li>
      </ul>
      <Link
        className="logoutLink"
        onClick={() => {
          ctx.onLogout();
        }}
      >
        <FontAwesomeIcon icon={faRightFromBracket} /> Sair
      </Link>
    </div>
  );
};

export default Sidebar;
