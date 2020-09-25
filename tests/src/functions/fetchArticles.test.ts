import axios from "axios";

import fetchArticles from "@functions/fetchArticles";

jest.mock("axios", () => ({
	get: jest.fn()
}));

describe("fetch articles function", () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it("fetches the articles successfully", async () => {
		global.process.env.API_KEY = "foo";
		(axios.get as jest.Mock).mockReturnValue({
			data: { articles: "bar" }
		});

		const res = await fetchArticles();
		expect(axios.get).toHaveBeenCalledWith(
			"https://newsapi.org/v2/top-headlines?q=Coronavirus&pageSize=6",
			{
				headers: {
					Authorization: "Bearer foo"
				}
			}
		);
		expect(res).toEqual({ props: { articles: "bar" } });
	});
});
