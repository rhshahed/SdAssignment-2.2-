import React, { useState } from 'react';
import { Table, Badge, Pagination } from 'react-bootstrap';
import './Articles.css';


const TITLES = [
	'Story Ideas to Try',
	'Writing Prompts for Practice',
	'Plotting Basics',
	'Scene Building Techniques',
	'Quick Editing Checklist',
];


const articles = [];
const STATUSES = ['Published', 'Draft', 'Review'];
for (let i = 0; i < 23; i++) {
	const title = `${TITLES[i % TITLES.length]} (${i + 1})`;
	const status = STATUSES[i % STATUSES.length];
	const edited = `${(i % 14) + 1} days ago`;
	articles.push({ id: i + 1, title, status, edited });
}

function StatusBadge({ status }) {
	// simple if/else mapping to Bootstrap variants — easier to read than nested ternaries
	let variant = 'primary';
	if (status === 'Published') variant = 'success';
	else if (status === 'Draft') variant = 'warning';

	return (
		<Badge bg={variant} pill>
			{status}
		</Badge>
	);
}

export default function ArticleTable() {
	const [page, setPage] = useState(1);
	const perPage = 5;
	const total = articles.length;
	const pages = Math.max(1, Math.ceil(total / perPage));

	const shown = articles.slice((page - 1) * perPage, page * perPage);

	const goto = (n) => setPage(() => Math.min(Math.max(1, n), pages));

	return (
		<div className="articles-page">
			<div className="p-3">
				<h4 className="mb-3">📄 My Articles</h4>

				<Table hover responsive className="align-middle">
					<thead className="table-light">
						<tr>
							<th>Title</th>
							<th>Status</th>
							<th className="text-end">Last Edited</th>
						</tr>
					</thead>
					<tbody>
						{shown.map((a) => (
							<tr key={a.id}>
								<td style={{ fontWeight: 600 }}>{a.title}</td>
								<td>
									<StatusBadge status={a.status} />
								</td>
								<td className="text-muted text-end">{a.edited}</td>
							</tr>
						))}
					</tbody>
				</Table>

				<Pagination className="justify-content-center mt-3" aria-label="Article pagination">
					<Pagination.Prev onClick={() => goto(page - 1)} disabled={page === 1} />
					{Array.from({ length: pages }).map((_, i) => (
						<Pagination.Item key={i + 1} active={page === i + 1} onClick={() => goto(i + 1)}>
							{i + 1}
						</Pagination.Item>
					))}
					<Pagination.Next onClick={() => goto(page + 1)} disabled={page === pages} />
				</Pagination>
			</div>
		</div>
	);
}
