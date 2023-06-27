const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItMark = require("markdown-it-mark");
const tm = require('markdown-it-texmath');

module.exports = function(eleventyConfig) {
  
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };

  function handleUnicodeInMathMode(errorCode, errorMsg, token) {
    if (errorCode === 'unicodeTextInMathMode') {
      return false;
    }
  }

  // with /css/index.css works
  // eleventyConfig.addPassthroughCopy({
  //   "public/": "/"
  // })
	
  eleventyConfig.addPassthroughCopy({
    'public/': 'public/'
  });

  eleventyConfig.addPassthroughCopy({
    'unit-01-proofs/images/': 'unit-01-proofs/images/',
    'unit-02-structures/images/': 'unit-02-structures/images/',
    'unit-03-counting/images/': 'unit-03-counting/images/',
    'unit-04-probability/images/': 'unit-04-probability/images/',    
  });

  // eleventyConfig.addWatchTarget("notes/**/*.{svg,webp,png,jpeg}");

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.setLibrary('md', markdownIt(options));
  eleventyConfig.amendLibrary('md', mdLib => mdLib.use(markdownItMark));
  eleventyConfig.amendLibrary('md', mdLib => {
    mdLib.use(tm, { engine: require('katex'),
    delimiters: 'dollars',
    katexOptions: { 
      macros: {'\\RR': '\\mathbb{R}', '\\textlangle': '〈', '\\textrangle': '〉'}, 
      output: 'mathml', 
      strict: handleUnicodeInMathMode('unicodeTextInMathMode') 
    }});
  });

  return {
    dir: {
      input: 'notes',
      includes: '../_includes',
      output: '_site',
    },
    pathPrefix: '/bite-sized-math-for-cs/',
  }
};