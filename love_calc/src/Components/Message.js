import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        console.log(this.props)
        return (
            <div>
                <h2> {this.props.result} </h2>
            </div>
        )
    }

}

export default Calculator;