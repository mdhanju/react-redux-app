import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

export class WmsActivities extends Component {
	render() {
		return (
			<Row className="show-grid" style={{ border: '1px solid #dee2e6', padding: 15, height: 400 }}>
				<Col xs={12} md={12} style={{ textAlign: 'center' }}>
					TRANSACTIONS
				</Col>
			</Row>
		);
	}
}
