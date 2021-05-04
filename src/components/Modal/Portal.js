import { React, Component } from 'react';
import reactDom from 'react-dom';


const portalRoot = document.getElementById('portal');



export default class Portal extends Component {

    constructor() {
        super();
        this.elem = document.createElement('div');
    }
    componentDidMount = () => {
        portalRoot.appendChild(this.elem);
    }

    componentWillUnmount = () => {
        portalRoot.removeChild(this.elem);
    }
    render () {
        const { children } = this.props;
        return reactDom.createPortal(children, this.elem);
    }
}