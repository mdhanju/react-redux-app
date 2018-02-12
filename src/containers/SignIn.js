import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
import { updateEmail, updatePassword, signInUser } from '../actions/signInActions.js';

class SignIn extends Component {
	constructor(props, context) {
		super(props, context);

		this.updateEmail = this.updateEmail.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.signIn = this.signIn.bind(this);

		this.state = {};
	}

	updateEmail(e) {
		this.props.updateEmail(e.target.value);
	}

	updatePassword(e) {
		this.props.updatePassword(e.target.value);
	}

	signIn(e) {
		this.props.signInUser();
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
		setTimeout(() => {
			this.props.history.push(`/dashboard?token=${this.props.token}`);
		}, 500);
		return (
			<Alert bsStyle="success">
				<div>{message}</div>
			</Alert>
		);
	}

	isFormValid() {
		const { signIn: { email, password } } = this.props;
		return email && password;
	}

	render() {
		const { signIn: { email, password, signInError, signInSuccess } } = this.props;
		return (
			<Jumbotron
				style={{
					width: '100%',
					maxWidth: 500,
					margin: '50px auto',
					backgroundColor: 'white',
					border: '1px solid rgba(193, 191, 191, 0.57)'
				}}>
				<Grid>
					<Row className="show-grid">
						<Col xs={12} md={12} style={{ textAlign: 'center', margin: '15px auto' }}>
							<h4>SIGN IN</h4>
						</Col>

						<Col xs={12} md={12}>
							<form>
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
										value={password}
										placeholder="Password"
										onChange={this.updatePassword}
									/>
								</FormGroup>

								{this.renderError(signInError)}
								{this.renderSuccess(signInSuccess)}

								<ButtonToolbar>
									<Button
										disabled={this.props.appBusy || !this.isFormValid()}
										onClick={this.signIn}
										style={{ margin: '10px auto' }}
										bsStyle="info">
										SIGN IN
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
	appBusy: state.app.appBusy,
	signIn: state.signIn,
	token: state.user.token
});

const mapDispatchToProps = dispatch => bindActionCreators({ updateEmail, updatePassword, signInUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
