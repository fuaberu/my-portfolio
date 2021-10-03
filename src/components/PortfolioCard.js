import React from 'react';
import 'devicon/devicon.min.css';

const PortfolioCard = ({
	title,
	description,
	liveLink,
	stacks,
	gitLink,
	children,
}) => {
	return (
		<div className="PortfolioCard-container">
			<div className="image-card-container">{children}</div>
			<div className="card-description-container">
				<h3>{title}</h3>
				<p>{description}</p>
				<div className="links-card">
					<a href={gitLink} target="_blank" rel="noreferrer" className="icons">
						Source <i className="devicon-github-original"></i>
					</a>
					<a href={liveLink} target="_blank" rel="noreferrer" className="icons">
						liveLink
					</a>
				</div>
				<ul className="stacks">
					{stacks.map((stack, index) => {
						return (
							<li key={index}>
								<i className={`devicon-${stack.icon}`}></i>
								{stack.text}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default PortfolioCard;
