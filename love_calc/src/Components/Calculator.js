import React from 'react';
import axios from 'axios';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    firstName: "",
                    secondName: "",
                    percentage: "",
                    result: ""
                }
            ]
        }
        this.getTheData = this.getTheData.bind(this)
    }

    getTheData() {
        axios({
            "method":"GET",
            "url":"https://love-calculator.p.rapidapi.com/getPercentage",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"love-calculator.p.rapidapi.com",
            "x-rapidapi-key":"3acd025854mshb88d4616eac0063p19e3a5jsn722c3bcc8795",
            "useQueryString":true
            },"params":{
            "fname": `${this.props.firstName}`,
            "sname": `${this.props.secondName}`
            }
            })
            .then((res)=>{
                this.setState({ data: res.data })
            })
            .catch((err)=>{
              console.log(err)
            })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.getTheData}>GET DATA</button>
            </div>
        )
    }

}

export default Calculator;