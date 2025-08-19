import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Profile from './Profile';
import Articles from './Articles';
import './Dashboard.css';

export default function Dashboard() {
	// UI state
	const [collapsed, setCollapsed] = useState(false);
	const [active, setActive] = useState('articles'); // 'articles' or 'profile'

	// Named handlers make the code easier to follow than inline arrow toggles
	const toggleSidebar = () => setCollapsed(prev => !prev);
	const navigateTo = (page) => setActive(page);

	const pageTitle = active === 'articles' ? 'My Articles' : 'Profile';

	return (
		<div className="dashboard-root">
			<Sidebar collapsed={collapsed} onToggle={toggleSidebar} active={active} onNavigate={navigateTo} />

			<div className={`main ${collapsed ? 'main-collapsed' : ''}`}>
				<div className="topbar">
					<button className="top-hamburger" onClick={toggleSidebar} aria-label="Toggle sidebar">≡</button>
					<div className="title">{pageTitle}</div>
				</div>

				<div className="content">
					{active === 'articles' ? <Articles /> : <Profile />}
				</div>
			</div>
		</div>
	);
}
