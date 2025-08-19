import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Profile from './Profile';
import Articles from './Articles';
import './Dashboard.css';

export default function Dashboard() {
	const [collapsed, setCollapsed] = useState(false);
	const [active, setActive] = useState('articles');

		return (
			<div className="dashboard-root">
				<Sidebar collapsed={collapsed} onToggle={() => setCollapsed(c => !c)} active={active} onNavigate={setActive} />

				<div className={"main " + (collapsed ? 'main-collapsed' : '')}>
					<div className="topbar">
						<button className="top-hamburger" onClick={() => setCollapsed(c => !c)} aria-label="Toggle sidebar">≡</button>
						<div className="title">{active === 'articles' ? 'My Articles' : 'Profile'}</div>
					</div>

					<div className="content">
						{active === 'articles' ? <Articles /> : <Profile />}
					</div>
				</div>
			</div>
		);
}
