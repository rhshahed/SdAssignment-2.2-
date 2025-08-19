import React from 'react';
import './Profile.css';

const USER = {
	name: 'Raihan Hossain',
	email: 'raihan.cse.20230104021@aust.edu',
	joined: '15/8/2025',
	avatar: '/github_dp.jpg',
};

export default function Profile() {
	return (
		<div className="profile-page">
			<div className="profile-card">
				<img src={USER.avatar} alt="avatar" className="avatar" />
				<h2>{USER.name}</h2>
				<div className="email">{USER.email}</div>
				<hr />
				<div className="joined">Joined on: <strong>{USER.joined}</strong></div>
			</div>
		</div>
	);
}
