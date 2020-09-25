import { Article } from "../common/types";

const removeBookmark = (
	bookmarks: Article[],
	setBookmarks: (value: Article[]) => any
) => {
	return (article: Article) => {
		bookmarks = bookmarks || [];
		try {
			// Grab all bookmarks that do not have the same URL as the compared article
			const newBookmarks = bookmarks.filter(
				(bookmark: Article) => bookmark.url !== article.url
			);
			setBookmarks(newBookmarks);
		} catch (err) {
			console.log(err);
		}
	};
};

export default removeBookmark;
