import React, { Component } from 'react';
import { Col, Row, Button, Modal, FormControl, FormGroup, ControlLabel, ButtonToolbar } from 'react-bootstrap';

const STYLES = {
	input: {
		marginBottom: 15
	}
};
export class WmsAddFundingSource extends Component {
	constructor(props, context) {
		super(props, context);
		this.handleChange = this.handleChange.bind(this);
		this.state = {};
	}

	handleChange() {}

	addCard() {}

	render() {
		console.log(this.props);
		const { show, expiryMonth, expiryYear, expiryCvv, addressId } = this.props.funding;
		return (
			<Modal show={show} onHide={this.props.hideAddCardModal}>
				<Modal.Header closeButton>
					<Modal.Title>ADD CARD</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<FormGroup controlId="cardnumber">
						<ControlLabel srOnly={true}>cardnumber</ControlLabel>
						<FormControl
							type="number"
							style={STYLES.input}
							value={this.state.value}
							placeholder="Card number (*************)"
							onChange={this.handleChange}
						/>
					</FormGroup>
					<FormGroup controlId="Expiry">
						<ControlLabel srOnly={true}>Expiry</ControlLabel>
						<FormControl
							type="text"
							style={STYLES.input}
							value={this.state.value}
							placeholder="Expiry (MM/YY)"
							onChange={this.handleChange}
						/>
					</FormGroup>
					<FormGroup controlId="SecurityCode">
						<ControlLabel srOnly={true}>SecurityCode</ControlLabel>
						<FormControl
							type="number"
							style={STYLES.input}
							value={this.state.value}
							placeholder="Security Code (***)"
							onChange={this.handleChange}
						/>
					</FormGroup>
					<FormGroup controlId="address">
						<FormControl
							componentClass="select"
							placeholder="Billing address"
							onChange={this.updateCountry}>
							<option value="1">1901 Halford Ave Santa Clara, CA-95051</option>
							<option value="2">110 Noth Avenue Ave Santa Clara, CA-95051</option>
						</FormControl>
					</FormGroup>

					<ButtonToolbar>
						<Button onClick={this.addCard} style={{ margin: '10px auto' }} bsStyle="info">
							SAVE
						</Button>
					</ButtonToolbar>
				</Modal.Body>
			</Modal>
		);
	}
}
