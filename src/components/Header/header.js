import React from "react"
import { Link } from "gatsby"

import Menu from './components/Menu/menu';
import logo from '../../assets/images/logo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    }
  }

  toggleMenu() {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  }

  render() {
    const { isMenuOpen } = this.state;
    return (
      <header className={isMenuOpen ? 'header header--menu-active' : 'header'}>
        <Link to="">
          <img src={logo} alt="Musicale - logo" className="header__logo"/>
        </Link>
        <Menu isOpen={isMenuOpen}/>
        <button type="button" className="header__toggle-mobile" onClick={this.toggleMenu.bind(this)}>
          <i className="icon-bars" />
        </button>
      </header>
    )
  }
}

export default Header
