import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	Alert,
	Jumbotron,
	Grid,
	Row,
	Col,
	FormGroup,
	ControlLabel,
	FormControl,
	Button,
	ButtonToolbar
} from 'react-bootstrap';
import {
	updateFirstName,
	updateLastName,
	updateEmail,
	updatePassword,
	updateGender,
	updateCountry,
	updateAge,
	createAccount
} from '../actions/signUpActions';

class SignUp extends Component {
	constructor(props, context) {
		super(props, context);

		this.updateFirstName = this.updateFirstName.bind(this);
		this.updateLastName = this.updateLastName.bind(this);
		this.updateCountry = this.updateCountry.bind(this);
		this.updateGender = this.updateGender.bind(this);
		this.updateEmail = this.updateEmail.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.updateAge = this.updateAge.bind(this);
		this.createAccount = this.createAccount.bind(this);
		this.renderError = this.renderError.bind(this);

		this.state = {};
	}

	getValidationState() {}

	updateFirstName(e) {
		this.props.updateFirstName(e.target.value);
	}

	updateLastName(e) {
		this.props.updateLastName(e.target.value);
	}

	updateCountry(e) {
		this.props.updateCountry(e.target.value);
	}

	updateGender(e) {
		this.props.updateGender(e.target.value);
	}

	updateEmail(e) {
		this.props.updateEmail(e.target.value);
	}

	updatePassword(e) {
		this.props.updatePassword(e.target.value);
	}

	updateAge(e) {
		this.props.updateAge(e.target.value);
	}

	createAccount(e) {
		// this.props.history.push('/signin')
		this.props.createAccount();
	}

	renderError(error) {
		if (!error) {
			return null;
		}
		return (
			<Alert bsStyle="danger">
				<div>{error}</div>
			</Alert>
		);
	}
	renderSuccess(message) {
		if (!message) {
			return null;
		}
		return (
			<Alert bsStyle="success">
				<div>
					{message} <Link to="/signin">Sign In</Link>
				</div>
			</Alert>
		);
	}

	isFormValid() {
		const { signUp: { firstName, lastName, age, email, password, gender, country } } = this.props;
		return firstName && lastName && age && email && gender && country && password;
	}

	render() {
		const { signUp: { firstName, lastName, age, email, gender, country } } = this.props;
		return (
			<Jumbotron
				style={{
					width: '100%',
					maxWidth: 600,
					margin: '25px auto',
					backgroundColor: 'white',
					border: '1px solid rgba(193, 191, 191, 0.57)'
				}}>
				<Grid>
					<Row className="show-grid">
						<Col xs={12} md={12} style={{ textAlign: 'center', margin: '10px auto' }}>
							<h4>SIGN UP</h4>
						</Col>

						<Col xs={12} md={12}>
							<form>
								<FormGroup controlId="country">
									<FormControl
										componentClass="select"
										placeholder="Country"
										value={country}
										onChange={this.updateCountry}>
										<option value="US">United States</option>
										<option value="CA">Canada</option>
									</FormControl>
								</FormGroup>
								<FormGroup controlId="email">
									<ControlLabel srOnly={true}>Email</ControlLabel>
									<FormControl
										type="text"
										value={email}
										placeholder="Email"
										onChange={this.updateEmail}
									/>
								</FormGroup>
								<FormGroup controlId="Password">
									<ControlLabel srOnly={true}>Password</ControlLabel>
									<FormControl
										type="password"
										placeholder="Password"
										onChange={this.updatePassword}
									/>
								</FormGroup>
								<FormGroup controlId="firstName">
									<ControlLabel srOnly={true}>First Name</ControlLabel>
									<FormControl
										type="text"
										value={firstName}
										placeholder="First name"
										onChange={this.updateFirstName}
									/>
								</FormGroup>
								<FormGroup controlId="lastName">
									<ControlLabel srOnly={true}>Last Name</ControlLabel>
									<FormControl
										type="text"
										value={lastName}
										placeholder="Last name"
										onChange={this.updateLastName}
									/>
								</FormGroup>
								<FormGroup controlId="age">
									<ControlLabel srOnly={true}>Age</ControlLabel>
									<FormControl type="text" value={age} placeholder="Age" onChange={this.updateAge} />
								</FormGroup>
								<FormGroup controlId="gender">
									<FormControl
										componentClass="select"
										placeholder="gender"
										value={gender}
										onChange={this.updateGender}>
										<option disabled value="">
											Select
										</option>
										<option value="male">Male</option>
										<option value="female">Female</option>
									</FormControl>
								</FormGroup>

								{this.renderError(this.props.createAccountError)}
								{this.renderSuccess(this.props.createAccountSuccess)}

								<ButtonToolbar>
									<Button
										disabled={this.props.appBusy || !this.isFormValid()}
										onClick={this.createAccount}
										style={{ margin: '10px auto' }}
										bsStyle="info">
										SIGN UP
									</Button>
								</ButtonToolbar>
							</form>
						</Col>
					</Row>
				</Grid>
			</Jumbotron>
		);
	}
}

const mapStateToProps = state => ({
	signUp: state.signUp,
	appBusy: state.app.appBusy,
	createAccountError: state.signUp.createAccountError,
	createAccountSuccess: state.signUp.createAccountSuccess
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			updateFirstName,
			updateLastName,
			updateEmail,
			updatePassword,
			updateGender,
			updateCountry,
			updateAge,
			createAccount
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
