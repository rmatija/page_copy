import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import "./style.css";

import logo from '../../../assets/images/lovezagreb.jpg'

const MainNav = () => {

  const [header, setHeader] = useState([]);

  useEffect(() => {
    const getHeader = async () => {
      const result = await axios(`https://www.lovezagreb.hr/page/settings`);

      setHeader(Array.from(result.data.headerNav));
      console.log(result.data);
    };

    getHeader();
  }, []);


  return (
    <div className="wrapper">
      <div className="nav-container">
            <div className="logo-container">
            <img src={logo} alt="" />
          </div>
          <div className="nav-items">
            {header.map((li, key) => (
              <li className="nav-item" key={key}>
                <a href={li.link}> {li.name}</a>
              </li>
            ))}
          </div>
          <div className="nav-search">
            <form>
              <input 
                  type='text' 
                  className='search-form' 
                  placeholder='Search lovezagreb.hr'
                  onFocus={(e) => e.target.placeholder = ""} 
                  onBlur={(e) => e.target.placeholder = "Search lovezagreb.hr"}
              />
            </form>
          </div>
        </div>
    </div>
  );
};

export default MainNav;
