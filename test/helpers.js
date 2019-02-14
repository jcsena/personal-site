const randomString = length => {
	const x = 36 ** (length + 1);
	const y = 36 ** length;
	return Math.round(x - Math.random() * y).toString(36).slice(1);
};

const pages = [
	{
		route: '/',
		title: 'Julio Seña',
		heading: 'ABOUT THIS SITE'
	},
	{
		route: '/about',
		title: 'About | Julio Seña',
		heading: 'ABOUT ME'
	},
	{
		route: '/projects',
		title: 'Projects | Julio Seña',
		heading: 'PROJECTS'
	},
	{
		route: '/stats',
		title: 'Stats | Julio Seña',
		heading: 'STATS'
	},
	{
		route: '/contact',
		title: 'Contact | Julio Seña',
		heading: 'CONTACT'
	}
];

export { pages, randomString };
