import React from "react";
import axios from "axios";

import Message from "./Message.js";

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					firstName: "",
					secondName: "",
					percentage: "",
					result: "",
				},
            ],
		};
		this.getTheData = this.getTheData.bind(this);
    }

	getTheData() {
		axios({
			method: "GET",
			url: "https://love-calculator.p.rapidapi.com/getPercentage",
			headers: {
				"content-type": "application/octet-stream",
				"x-rapidapi-host": "love-calculator.p.rapidapi.com",
				"x-rapidapi-key":
					"3acd025854mshb88d4616eac0063p19e3a5jsn722c3bcc8795",
				useQueryString: true,
			},
			params: {
				fname: `${this.props.firstName}`,
				sname: `${this.props.secondName}`,
			},
		})
			.then((res) => {
				this.setState({ data: res.data });
				setTimeout(function () {}, 100);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<Message result={this.state.data.result} />
				<button onClick={this.getTheData}>GET DATA</button>
				<h2>
					Chances of Successful Relationship:{" "}
					{this.state.data.percentage}%{" "}
				</h2>
			</div>
		);
	}
}

export default Calculator;
