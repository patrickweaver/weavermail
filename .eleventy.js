const handlebarsPlugin = require("@11ty/eleventy-plugin-handlebars");
const handlebars = require("handlebars");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(handlebarsPlugin, {
    // Override the `ejs` library instance
    eleventyLibraryOverride: handlebars,
  });

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true,
  });

  eleventyConfig.addPassthroughCopy("build/*.js");

  return {
    dir: {
      input: "build",
      output: "dist",
    },
    templateFormats: [
      "md",
      "css",
      "map",
      "hbs",
      "njk",
      "gif",
      "jpg",
      "jpeg",
      "png",
      "mp3",
      "mp4",
      "pdf",
    ],
  };
};
