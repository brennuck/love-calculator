import React from "react";
import Calculator from "./Components/Calculator";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [
				{
					firstName: "",
					secondName: "",
				},
			],
		};
	}

	handleChanges = (e) => {
		this.setState({
			data: {
				...this.state.data,
				[e.target.name]: e.target.value,
			},
		});
	};

	render() {
        console.log(this.state.data.firstName);
        console.log(this.state.data.secondName);
		return (
			<div className="App">
				<form>
					<input
						type="text"
						name="firstName"
						value={this.state.data.firstName}
                        onChange={this.handleChanges}
						placeholder="First Name"
					/>
					<input
						type="text"
						name="secondName"
						value={this.state.data.secondName}
                        onChange={this.handleChanges}
						placeholder="Second Name"
					/>
				</form>
				<Calculator
					firstName={this.state.data.firstName}
					secondName={this.state.data.secondName}
					handleChanges={this.handleChanges}
				/>
			</div>
		);
	}
}

export default App;
