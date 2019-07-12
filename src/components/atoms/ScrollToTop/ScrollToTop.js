import React from "react"

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
      <button className="a-scrollTop" type="button" onClick={() => this.scrollToTop()}>
        <i className="icon-chevron" />
      </button>
    );
  }
}

export default ScrollToTop