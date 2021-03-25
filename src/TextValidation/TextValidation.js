import React, { Component } from "react";

class TextValidation extends Component {

    state = {
        minLength: 5
    }

    render () {

        let message = null;

        if (this.props.length <= this.state.minLength) {
            message = <p>Text too short</p>
        } else if (this.props.length > this.state.minLength) {
            message = <p>Text long enough</p>
        }

        return (
            <div>
                {message}
            </div>
        );
    }

}

export default TextValidation;