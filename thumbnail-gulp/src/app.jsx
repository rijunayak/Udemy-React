var options = {
	thumbnailData: [{
		title: 'See Tutorials',
		number: 32,
		header: 'Learn React',
		description: 'React is a fantastic new library for making fast dynamic changes. React is a fantastic new library for making fast dynamic changes.',
		imageUrl: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'
	}, {
		title: 'Show Courses',
		number: 25,
		header: 'Learn Gulp',
		description: 'Gulp will speed up your development time. Gulp will speed up your development time.',
		imageUrl: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'
	}]
};

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.target'));