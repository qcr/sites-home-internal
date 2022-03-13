const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  basePath: "/sites-home-internal",
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push(
      ...[
        {
          test: /\.ya?ml$/,
          loader: "qcr-sites-shared/lib/loaders/yaml",
        },
      ]
    );

    return config;
  },
};
