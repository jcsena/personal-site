import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Nav = () => (
	<section id="sidebar">
		<section id="intro">
			<Link to="/" className="logo">
				<img src={`${BASE_PATH}/images/me_icon.png`} alt="" />
			</Link>
			<header>
				<h2>Julio Seña</h2>
				<p>
					<a href="mailto:julio.657.js@gmail.com">julio.657.js@gmail.com</a>
				</p>
			</header>
		</section>

		<section className="blurb">
			<h2>About</h2>
			<p>
				Hi, I&apos;m Julio. I&apos;m a software developer and I&apos;m working at <a href="http://seds.org">https://wisy.app/</a>.
			</p>
			<ul className="actions">
				<li>
					{window.location.pathname !== `${BASE_PATH}/resume` ? (
						<Link to="/resume" className="button">
							Learn More
						</Link>
					) : (
						<Link to="/about" className="button">
							About Me
						</Link>
					)}
				</li>
			</ul>
		</section>

		<section id="footer">
			<ul className="icons">
				{data.map(s => (
					<li key={s.label}>
						<a href={s.link}>
							<FontAwesomeIcon icon={s.icon} />
						</a>
					</li>
				))}
			</ul>
			<p className="copyright">
				&copy; Julio Seña <Link to="/">juliosena.com</Link>.
			</p>
		</section>
	</section>
);

export default Nav;
