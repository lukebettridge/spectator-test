import { Article } from "../common/types";

const addBookmark = (
	bookmarks: Article[],
	setBookmarks: (value: Article[]) => any
) => {
	return (article: Article) => {
		try {
			const bookmarkExists = !!bookmarks.find(
				(bookmark: Article) => bookmark.url === article.url
			);
			if (bookmarkExists) return;
			setBookmarks([article, ...bookmarks]);
		} catch (e) {}
	};
};

export default addBookmark;
