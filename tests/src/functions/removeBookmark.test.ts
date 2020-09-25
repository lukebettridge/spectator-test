import removeBookmark from "@functions/removeBookmark";

describe("remove bookmark function", () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});
	const setBookmarkMock = jest.fn();

	it("returns a function", () => {
		const res = removeBookmark([], () => {});
		expect(res).toEqual(expect.any(Function));
	});

	it("removes a bookmark successfully", () => {
		removeBookmark(
			[testArticles.bar, testArticles.foo],
			setBookmarkMock
		)(testArticles.bar);
		expect(setBookmarkMock).toHaveBeenCalledWith([testArticles.foo]);
	});
});

const testArticles = {
	bar: {
		author: "John Doe",
		title: "Lorem ipsum dolor sit amet, consectetur.",
		url: "https://example1.co.uk",
		urlToImage: "https://example1.co.uk/public/image.png",
		publishedAt: "2020-09-24T22:00:00Z"
	},
	foo: {
		author: "Jane Doe",
		title: "Excepteur sint occaecat cupidatat non proident.",
		url: "https://example2.co.uk",
		urlToImage: "https://example2.co.uk/public/image.png",
		publishedAt: "2020-09-24T23:00:00Z"
	}
};
