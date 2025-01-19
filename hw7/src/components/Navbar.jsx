import { Component } from "react";

export class Navbar extends Component {

constructor() {
    super();
    this.state = {
      title: 'Navbar',
    };
    console.log('Navbar: constructor');
  }

  componentDidMount() {
    console.log('Navbar: componentDidMount');
  }

  shouldComponentUpdate(prevProps, prevState) {
    console.log('Navbar: shouldComponentUpdate');
    return prevState.title !== this.state.title;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Navbar: componentDidUpdate');
    if (prevState.title !== this.state.title) {
      console.log(` title change from "${prevState.title}" to "${this.state.title}"`);
    }
  }

  componentWillUnmount() {
    console.log('Navbar: componentWillUnmount');
  }

  render() {
    console.log('Navbar: render');
    return (
      <div className="nav">
        navbar component
        <h2>{this.state.title}</h2>
        <button onClick={() => this.setState({ title: 'Header' })}>change title</button>
      </div>
    );
  }
}
