import React, { Component } from "react";

class Footer extends Component{
    constructor(props) {
        super(props);
        console.log('props F : ',this.props);
    }
    render(){
        return (
            <div>
                Footer
            </div>
        );
    }
}
export default Footer;