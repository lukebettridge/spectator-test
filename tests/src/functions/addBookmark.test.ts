import addBookmark from "@functions/addBookmark";

describe("add bookmark function", () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});
	const setBookmarkMock = jest.fn();

	it("returns a function", () => {
		const response = addBookmark([], () => {});
		expect(response).toEqual(expect.any(Function));
	});

	it("adds a bookmark successfully", () => {
		addBookmark([testArticles.foo], setBookmarkMock)(testArticles.bar);
		expect(setBookmarkMock).toHaveBeenCalledWith([
			testArticles.bar,
			testArticles.foo
		]);
	});

	it("adds a bookmark to an empty list successfully", () => {
		addBookmark([], setBookmarkMock)(testArticles.bar);
		expect(setBookmarkMock).toHaveBeenCalledWith([testArticles.bar]);
	});

	it("does not add the same bookmark twice", () => {
		addBookmark([testArticles.bar], setBookmarkMock)(testArticles.bar);
		expect(setBookmarkMock).not.toHaveBeenCalled();
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
