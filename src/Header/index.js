import React from "react";
import { Row, Col } from 'react-bootstrap';
import SearchBar from './Searchbar';
import MenuBar from './Menubar';
import classNames from 'classnames';

import './header.style.less';

const rouletteHeader = classNames({
	'show-grid': true,
	'rouletteHeader': true
});

export const Header = (props) => {
  return (
  	<Row className={rouletteHeader}>
      <Col md={12}>
        <Row>
          <Col md={8} mdOffset={2}>
            <div className='logo'>
              NetflixRoulette
            </div>
            <div className='title'>
              Find your movie
            </div>
            <div className='search-bar'>
              <SearchBar />
            </div> 
            <div className='menu-bar'>
              <MenuBar />
            </div>             
          </Col>
        </Row>          
      </Col>
    </Row>  
  );
}
