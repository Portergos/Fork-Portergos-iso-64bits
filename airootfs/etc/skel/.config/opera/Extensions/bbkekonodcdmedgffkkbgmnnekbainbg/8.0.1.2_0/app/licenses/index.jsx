/**
 * Software License Web App
 *
 * Ghostery Browser Extension
 * https://www.ghostery.com/
 *
 * Copyright 2017 Ghostery, Inc. All rights reserved.
 * See https://www.ghostery.com/eula for license.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'react-remarkable';
import licenses from '../../tools/licenses/licenses.json';

const licensesArray = [];
Object.keys(licenses).forEach(key=>{
	licensesArray.push(licenses[key]);
});

class License extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false
		}
		this.toggleLicenseText = this.toggleLicenseText.bind(this);
	}
	render() {
		const license = this.props.license;
		return (
			<div className="license">
				<div>{`${t('license_module')}: ${license.name}`}</div>
				<a href={license.repository} target="_blank"><span style={{color: '#4A4A4A'}}>{`${t('license_repository')}:`}</span>{` ${license.repository || t('license_information_missing')}`}</a>
				<div>{`${t('license_type')}: ${license.licenses}`}</div>
				<div>{`${t('license_publisher')}: ${license.publisher || t('license_unknown')}`}</div>
				<div>{`${t('license_url')}: ${license.url || t('license_unknown')}`}</div>
				<div>{`${t('license_email')}: ${license.email || t('license_unknown')}`}</div>
				<div style={{cursor:'pointer', fontWeight: '700'}} onClick={this.toggleLicenseText}>
					{t('license_text')}
					{
						this.state.expanded &&
						<div className="license-text">
							<Markdown source={license.licenseText || t('license_generic')} />
						</div>
					}
				</div>
			</div>
		);
	}
	toggleLicenseText() {
		this.setState({expanded: !this.state.expanded});
	}
}

class Licenses extends React.Component {
	render() {
		const list = licensesArray.map((license, index) => <License index={index} key={license.name} license={license}/>);
		return (
			<div id="licenses-page">
				<div id="header" className="row padded-content expanded valign-middle">
					<div className="column medium-2">
						<img className="logo" src="/app/images/setup/logo-title-white.svg" />
					</div>
					<div className="column" />
					<div className="column medium-6 text-right">
						<span style={{fontSize: '18px', marginRight: '40px'}}>
							{ t('license_licenses') }
						</span>
					</div>
				</div>
				<div id="content">
					<div className="license-list">{ list }</div>
				</div>
				<div id="footer">
					<div className="columns copyright text-center" dangerouslySetInnerHTML={this.createFooterMarkup()} />
				</div>
			</div>
		);
	}

	/**
	 * Wrapper function for dangerouslySetInnerHTML. Provides extra security
	 * @return {object}
	 */
	createFooterMarkup() {
		return { __html: t('setup_footer_license') };
	};
}

ReactDOM.render(
	<Licenses />,
	document.getElementById('root')
);
