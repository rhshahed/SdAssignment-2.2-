import React from 'react';
import './Profile.css';

export default function Profile() {
	const user = {
		name: 'Raihan Hossain',
		email: 'raihan.cse.20230104021@aust.edu',
		joined: '15/8/2025',
		avatar: '/github_dp.jpg',
	};

	return (
		<div className="profile-page">
			<div className="profile-card">
				<img src={user.avatar} alt="avatar" className="avatar" />
				<h2>{user.name}</h2>
				<div className="email">{user.email}</div>
				<hr />
				<div className="joined">Joined on: <strong>{user.joined}</strong></div>
			</div>
		</div>
	);
}
