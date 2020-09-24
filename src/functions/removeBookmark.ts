import { Article } from "../common/types";

const removeBookmark = (
	bookmarks: Article[],
	setBookmarks: (value: Article[]) => any
) => {
	return (article: Article) => {
		try {
			const newBookmarks = bookmarks.filter(
				(bookmark: Article) => bookmark.url !== article.url
			);
			setBookmarks(newBookmarks);
		} catch (e) {}
	};
};

export default removeBookmark;
