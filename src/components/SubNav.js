import React from 'react';

const makeActive = (selected) => {
	let selectedTab = document.getElementsByClassName('subnav__item')[selected];

	document.getElementsByClassName('active')[0].classList.remove('active');
	selectedTab.className += ' active';
}

const SubNav = ({handleNavChange}) => {
	return (
		<div className="subnav__wrapper">
			<div className="subnav__item" onClick={() => {handleNavChange(0); makeActive(0)}}>
				<h2>Flywheel Managed Service</h2>
				<p>Have our experts do it for you</p>
			</div>
			<div className="subnav__item active" onClick={() => {handleNavChange(1); makeActive(1)}}>
				<h2>Flywheel</h2>
				<p>Manage products & campaigns on your own</p>
			</div>
			<div className="subnav__item" onClick={() => {handleNavChange(2); makeActive(2)}}>
				<h2>For Agencies</h2>
				<p>Create value for your own customers</p>
			</div>
		</div>
	)
}

export default SubNav