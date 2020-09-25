import { Article } from "../common/types";

const addBookmark = (
	bookmarks: Article[],
	setBookmarks: (value: Article[]) => any
) => {
	return (article: Article) => {
		try {
			bookmarks = bookmarks || [];
			const bookmarkExists = !!bookmarks.find(
				(bookmark: Article) => bookmark.url === article.url
			);
			if (bookmarkExists)
				throw new Error("A bookmark already exists for this article.");
			if (!article)
				throw new Error("There was a problem adding your bookmark.");
			setBookmarks([article, ...bookmarks]);
		} catch (err) {
			console.log(err);
		}
	};
};

export default addBookmark;
