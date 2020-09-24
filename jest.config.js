module.exports = {
	moduleNameMapper: {
		"^@components/(.*)": "<rootDir>/src/components/$1",
		"^@functions/(.*)": "<rootDir>/src/functions/$1"
	},
	testEnvironment: "node",
	testRegex: "/tests/.*\\.(test|spec)?\\.(ts)$",
	transform: { "^.+\\.ts?$": "ts-jest" }
};
