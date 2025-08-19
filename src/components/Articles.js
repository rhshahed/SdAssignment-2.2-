import React, { useState } from 'react';
import './Articles.css';

const DUMMY = Array.from({ length: 23 }).map((_, i) => ({
	id: i + 1,
	title: [
		'How to Structure a Short Story That Hooks the Reader',
		'Building Memorable Scenes: A Practical Checklist',
		'Editing Fast: Practical Tips to Tighten Your Prose',
	][i % 3],
	status: i % 3 === 0 ? 'Published' : i % 3 === 1 ? 'Draft' : 'Review',
	lastEdited: `${(i % 14) + 1} days ago`,
}));

function StatusPill({ status }) {
	const cls = status === 'Published' ? 'pill published' : status === 'Draft' ? 'pill draft' : 'pill review';
	return <span className={cls}>{status}</span>;
}

export default function Articles() {
	const [page, setPage] = useState(1);
	const perPage = 5;
	const total = DUMMY.length;
	const pages = Math.ceil(total / perPage);

	const shown = DUMMY.slice((page - 1) * perPage, page * perPage);

	return (
		<div className="articles-page">
			<div className="articles-table">
				<div className="row header">
					<div className="cell title">Title</div>
					<div className="cell status">Status</div>
					<div className="cell edited">Last Edited</div>
				</div>
				{shown.map(a => (
					<div className="row" key={a.id}>
						<div className="cell title">{a.title}</div>
						<div className="cell status"><StatusPill status={a.status} /></div>
						<div className="cell edited">{a.lastEdited}</div>
					</div>
				))}
			</div>

			<div className="pagination">
				<button disabled={page === 1} onClick={() => setPage(p => Math.max(1, p - 1))}>‹</button>
				{Array.from({ length: pages }).map((_, i) => (
					<button key={i} className={page === i + 1 ? 'active' : ''} onClick={() => setPage(i + 1)}>{i + 1}</button>
				))}
				<button disabled={page === pages} onClick={() => setPage(p => Math.min(pages, p + 1))}>›</button>
			</div>
		</div>
	);
}
