import isBookmarked from "@functions/isBookmarked";

describe("is bookmarked function", () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});
	global.console.log = jest.fn();

	it("returns a function", () => {
		const res = isBookmarked([]);
		expect(res).toEqual(expect.any(Function));
	});

	it("returns true when bookmark already exists", () => {
		const res = isBookmarked([testArticles.bar])(testArticles.bar);
		expect(res).toEqual(true);
	});

	it("returns false when bookmark doesn't already exists", () => {
		const res = isBookmarked([testArticles.bar])(testArticles.foo);
		expect(res).toEqual(false);
	});

	it("handles an article that doesn't exist", () => {
		const res = isBookmarked([testArticles.bar])(null);
		expect(global.console.log).toHaveBeenCalledWith(expect.any(Error));
	});

	[
		{
			scenario: "an empty",
			bookmarks: []
		},
		{
			scenario: "a null",
			bookmarks: null
		}
	].map(({ scenario, bookmarks }) =>
		it(`returns false for ${scenario} list`, () => {
			const res = isBookmarked(bookmarks)(testArticles.foo);
			expect(res).toEqual(false);
		})
	);
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
