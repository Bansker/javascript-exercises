const getTheTitles = function(library) {
	titles = library.map((book) => {
		return book.title;
	});

	return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
