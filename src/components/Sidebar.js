import React from 'react';
import './Sidebar.css';

export default function Sidebar({ collapsed, onToggle, active, onNavigate }) {
	// Choose avatar source in a readable way
	const ghUser = process.env.REACT_APP_GITHUB_USER;
	const avatarEnv = process.env.REACT_APP_GITHUB_AVATAR;

	function getAvatar() {
		if (avatarEnv) return avatarEnv;
		if (ghUser) return `https://github.com/${ghUser}.png?size=200`;
		return '/github_dp.jpg';
	}

	const avatar = getAvatar();

	return (
		<div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
			<div className="sidebar-top">
				<div className="brand">
					<img src={avatar} alt="logo" className="sidebar-avatar" />
					{!collapsed && <span className="brand-name">Raihan Hossain</span>}
				</div>
			</div>

			<div className="sidebar-nav">
				<div className={`nav-item ${active === 'profile' ? 'active' : ''}`} onClick={() => onNavigate('profile')}>
					<span className="icon">👤</span>
					<span className="label">Profile</span>
				</div>
				<div className={`nav-item ${active === 'articles' ? 'active' : ''}`} onClick={() => onNavigate('articles')}>
					<span className="icon">📝</span>
					<span className="label">My Articles</span>
				</div>
			</div>
		</div>
	);
}
