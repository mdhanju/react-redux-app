import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { WmsAddFundingSource } from './WmsAddFundingSource';
import { showAddCardModal, hideAddCardModal } from '../actions/fundingActions';

class WmsFundingSources extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	handleAddCardModal() {}
	render() {
		return (
			<Row className="show-grid" style={{ border: '1px solid #dee2e6', padding: 15, height: 400 }}>
				<Col xs={12} md={12} style={{ textAlign: 'center' }}>
					FUNDING SOURCES
					<Button
						onClick={this.props.showAddCardModal}
						bsStyle="info"
						bsSize="small"
						style={{ float: 'right' }}>
						+ ADD
					</Button>
				</Col>
				<Col xs={12} md={12} style={{ textAlign: 'center' }}>
					<WmsAddFundingSource {...this.props} />
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = state => ({
	app: state.app,
	funding: state.funding
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			showAddCardModal,
			hideAddCardModal
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(WmsFundingSources);
