module.exports = {
  moduleFileExtensions: ["js", "vue"],
  testMatch: ["**/tests/**/*.test.js"],
  moduleNameMapper: {
    "^~/(.*)": "<rootDir>/src/$1",
  },
  modulePathIgnorePaterns: ["<rootDir>/node_modules", "<rootDir>/dist"],
  testUrl: "http://localhost",
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest",
  },
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "/node_modules/(?!(axios)/)", // axios만 예외적으로 변환
  ],
};
