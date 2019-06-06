
var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		poster: 'https://www.posters.eu/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/g/b/gb_fp2601_2.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		poster: 'https://image.ceneostatic.pl/data/products/126926/i-krol-lew-the-lion-king-dvd.jpg'
	},
	{
		id: 3,
		title: 'Epoka Lodowcowa 4',
		desc: 'Film o zwierzętach',
		poster: 'https://ecsmedia.pl/c/epoka-lodowcowa-4-wedrowka-kontynentow-w-iext40688055.jpg'
	},
	{
		id: 4,
		title: 'Sami Swoi',
		desc: 'Film o zwasnionych sąsiadach',
		poster: 'https://media.merlin.pl/media/300x452/000/004/091/56ba95d0b0784.jpg'
	},
	{
		id: 5,
		title: 'Pan życia i smierci',
		desc: 'Film o handlarzu bronią',
		poster: 'https://static.intelimedia.pl/sub/_bn19671.jpg'
	}
];





var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function() {
		return React.createElement('li', {},
			React.createElement(MovieTitle, {title: this.props.movie.title}),
			React.createElement(MovieDescription, {desc: this.props.movie.desc}),
			React.createElement(MoviePoster, {img: this.props.movie.poster})
		)
	}
});

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('h2', {}, this.props.title);
	}
});

var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('p', {}, this.props.desc);
	}
});

var MoviePoster = React.createClass({
	propTypes: {
		img: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('img', {src: this.props.img});
	}
});

var loopThroughList = movies.map(function(movie) {
	return React.createElement(Movie, { key: movie.id, movie: movie });
});

var element = React.createElement('div', {}, 
	React.createElement('h1', {}, 'Lista filmów:'),
	React.createElement('ul', {}, loopThroughList)
);

ReactDOM.render(element, document.getElementById('app'));