import React from 'react';
import './Sidebar.css';

export default function Sidebar({ collapsed, onToggle, active, onNavigate }) {
		// Avatar selection order: explicit avatar URL env, GitHub username, uploaded public image, fallback logo
		const ghUser = process.env.REACT_APP_GITHUB_USER;
		const avatarEnv = process.env.REACT_APP_GITHUB_AVATAR;
		const avatar = avatarEnv || (ghUser ? `https://github.com/${ghUser}.png?size=200` : '/github_dp.jpg');

	return (
		<div className={"sidebar " + (collapsed ? 'collapsed' : '')}>
			<div className="sidebar-top">
				<div className="brand">
					<img src={avatar} alt="logo" className="sidebar-avatar" />
					{!collapsed && <span className="brand-name">Raihan Hossain</span>}
				</div>
			</div>

			<div className="sidebar-nav">
				<div className={"nav-item " + (active === 'profile' ? 'active' : '')} onClick={() => onNavigate('profile')}>
					<span className="icon">👤</span>
					<span className="label">Profile</span>
				</div>
				<div className={"nav-item " + (active === 'articles' ? 'active' : '')} onClick={() => onNavigate('articles')}>
					<span className="icon">📝</span>
					<span className="label">My Articles</span>
				</div>
			</div>
		</div>
	);
}
