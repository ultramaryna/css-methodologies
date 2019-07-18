import React from "react";
import { Link } from "gatsby";

import Menu from '../Menu/index';
import logo from '../../../assets/images/logo.svg';

import { StyledHeader, Logo, ToggleBtn } from './styles';

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
      <StyledHeader>
        <Link to="/">
          <Logo src={logo} alt="Musicale - logo" isMenuOpen={isMenuOpen} />
        </Link>
        <Menu isOpen={isMenuOpen}/>
        <ToggleBtn type="button" onClick={this.toggleMenu.bind(this)}>
          <i className="icon-bars" />
        </ToggleBtn>
      </StyledHeader>
    )
  }
}

export default Header;