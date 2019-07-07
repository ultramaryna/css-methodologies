import React from "react";
import "./styles.scss";

import Menu from "../../molecules/Menu/Menu";
import Logo from "../../atoms/Logo/Logo";

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
      <header className={isMenuOpen ? 'o-header -menuActive' : 'o-header'}>
        <Logo />
        <Menu isOpen={isMenuOpen}/>
        <button type="button" className="o-header_toggleMobile" onClick={this.toggleMenu.bind(this)}>
          <i className="icon-bars" />
        </button>
      </header>
    )
  }
}

export default Header;