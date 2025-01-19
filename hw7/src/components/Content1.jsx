import {Component} from 'react';

export class Content1 extends Component {
    constructor() {
        super();
        this.state = {
          time: new Date().toLocaleTimeString(),
        };
        console.log('Content1: constructor');
      }
    
      componentDidMount() {
        this.timer = setInterval(() => {
          this.setState({ time: new Date().toLocaleTimeString() });
        }, 1000);
        console.log('Content1: componentDidMount');
      }

      shouldComponentUpdate(prevProps, prevState) {
        console.log('Content1: shouldComponentUpdate');
        return prevState.time !== this.state.time;
      }
    
      componentDidUpdate(prevProps, prevState) {
        console.log('Content1: componentDidUpdate');
        if (prevState.time !== this.state.time) {
          console.log(`time updated: ${this.state.time}`);
        }
      }
    
      componentWillUnmount() {
        clearInterval(this.timerId);
        console.log('Content1: componentWillUnmount');
      }
    
      render() {
        console.log('Content1: render');
        return (
          <div className='cont1'>
            content1 component
            <h1>{this.state.time}</h1>
          </div>
        );
      }
    }
    