import { Article } from "../common/types";

const isBookmarked = (bookmarks: Article[]) => {
	return (article: Article) => {
		try {
			const bookmarkExists = !!bookmarks.find(
				(bookmark: Article) => bookmark.url === article.url
			);
			return bookmarkExists;
		} catch (e) {}
	};
};

export default isBookmarked;
