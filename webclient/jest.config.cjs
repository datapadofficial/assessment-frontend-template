// jest.config.js
const nextJest = require("next/jest");
const path = require("path");
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // preset: "ts-jest/presets/js-with-babel",
  // preset: "ts-jest/presets/default-esm",
  // preset: "ts-jest/presets/js-with-ts-legacy",
  preset: "ts-jest/presets/js-with-ts",

  // testEnvironment: "jest-environment-jsdom",
  testEnvironment: "node",

  // extensionsToTreatAsEsm: [".ts", ".tsx"],

  // globals: {
  //   "ts-jest": {
  //     useESM: true,
  //   },
  // },

  // moduleNameMapper: {
  //   "^(\\.{1,2}/.*)\\.js$": "$1",
  // },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),

  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleDirectories: ["node_modules", `${__dirname}/node_modules`, __dirname],

  roots: [
    __dirname,
    // path.join(__dirname, "./src"),
    path.join(__dirname, "../core/src"),
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
const config = new Promise(async (resolve) => {
  const output = await (createJestConfig(customJestConfig)());

  output.transformIgnorePatterns = [
    // '/node_modules/',
    "^.+\\.module\\.(css|sass|scss)$",
  ];

  resolve(output);
});

module.exports = config;
