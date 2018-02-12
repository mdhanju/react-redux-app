import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

export class WmsHeader extends Component {
	render() {
		return (
			<Row className="show-grid" style={{ backgroundColor: '#dee2e6', padding: 15, marginBottom: 10 , marginTop: 10 }}>
				<Col xs={12} md={12}>
					<h3 className="text-center">DASHBOARD</h3>
				</Col>
			</Row>
		);
	}
}
