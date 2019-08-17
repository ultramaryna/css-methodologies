import React from "react";
import { Button, Icon } from './styles';

class ScrollToTop extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false
    }
  }

  componentDidMount() {
    const self = this;

    window.addEventListener('scroll', function() {
      const scrollPosition = this.scrollY / document.body.scrollHeight;
      if (scrollPosition > 0.4) {
        self.setState({isVisible: true});
      }
    });
  }

  scrollToTop() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <Button type="button" onClick={() => this.scrollToTop()} title="Scroll to top">
        <Icon className="icon-chevron" />
      </Button>
    );
  }
}

export default ScrollToTop;