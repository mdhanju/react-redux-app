import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { WmsHeader } from '../components/WmsHeader';
import WmsFundingSources from '../components/WmsFundingSources';
import { WmsActivities } from '../components/WmsActivities';

class Dashboard extends Component {
	render() {
		return (
			<Grid>
				<WmsHeader />
				<Row className="show-grid">
					<Col xs={12} md={8}>
						<WmsActivities />
					</Col>
					<Col xs={12} md={4}>
						<WmsFundingSources {...this.props} />
					</Col>
				</Row>
			</Grid>
		);
	}
}

const mapStateToProps = state => ({
	app: state.app
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
