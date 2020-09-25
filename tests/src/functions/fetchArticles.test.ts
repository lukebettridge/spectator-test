import axios from "axios";

import fetchArticles from "@functions/fetchArticles";

jest.mock("axios", () => ({
	get: jest.fn()
}));

describe("fetch articles function", () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});
	global.console.log = jest.fn();

	it("fetches the articles successfully", async () => {
		global.process.env.API_KEY = "foo";
		(axios.get as jest.Mock).mockReturnValue({
			data: { articles: "bar" }
		});

		const res = await fetchArticles();
		expect(axios.get).toHaveBeenCalledWith(
			"https://newsapi.org/v2/everything?domains=thetimes.co.uk&pageSize=6",
			{
				headers: {
					Authorization: "Bearer foo"
				}
			}
		);
		expect(res).toEqual({ props: { articles: "bar" } });
	});

	[
		{
			scenario: "response",
			returnValue: null
		},
		{
			scenario: "data",
			returnValue: { data: null }
		}
	].map(({ scenario, returnValue }) =>
		it(`throws when ${scenario} is null`, async () => {
			(axios.get as jest.Mock).mockReturnValue(returnValue);

			await fetchArticles();
			expect(global.console.log).toHaveBeenCalledWith(expect.any(Error));
		})
	);
});
