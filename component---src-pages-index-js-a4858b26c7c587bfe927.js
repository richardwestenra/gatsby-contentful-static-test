webpackJsonp([0x208b9a1850c78600],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/home/circleci/repo/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/circleci/repo/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/circleci/repo/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/home/circleci/repo/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/home/circleci/repo/node_modules/babel-preset-stage-0/lib/index.js","/home/circleci/repo/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js':function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=o("./node_modules/react/react.js"),u=l(s),c=o("./node_modules/gatsby-link/index.js"),d=l(c),p=o("./node_modules/prop-types/index.js"),f=n(p),m=o("./src/utils/typography.js"),h={data:f.object.isRequired},b=function(e){var t=e.node;return u.default.createElement("div",{key:t.id},u.default.createElement(d.default,{style:{color:"inherit",textDecoration:"none"},to:"/products/"+t.id+"/"},u.default.createElement("div",{style:{display:"flex",alignItems:"center",borderBottom:"1px solid lightgray",paddingBottom:(0,m.rhythm)(.5),marginBottom:(0,m.rhythm)(.5)}},u.default.createElement("div",{style:{marginRight:(0,m.rhythm)(.5)}},t.image[0].responsiveResolution.src&&u.default.createElement("img",{style:{margin:0},width:t.image[0].responsiveResolution.width,height:t.image[0].responsiveResolution.height,src:t.image[0].responsiveResolution.src,srcSet:t.image[0].responsiveResolution.srcSet})),u.default.createElement("div",{style:{flex:1}},t.productName.productName))))},g=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.us.edges;return u.default.createElement("div",{style:{marginBottom:(0,m.rhythm)(2)}},u.default.createElement("h2",null,"Gatsby's integration with the Contentful Image API"),u.default.createElement(d.default,{to:"/image-api/"},"See examples"),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("h2",null,"Localization"),u.default.createElement("p",null,"The ",u.default.createElement("code",null,"gatsby-source-contentful")," plugin offers full support for Contentful's localization features. Our sample space includes products localized into both English and German."),u.default.createElement("p",null,"An entry and asset node are created for each locale following fallback rules for missing localization. In addition, each node has an additional field added, ",u.default.createElement("code",null,"node_locale")," so you can select for nodes from a single locale"),u.default.createElement("h3",null,"en-US"),e.map(function(e,t){var o=e.node;return u.default.createElement(b,{node:o})}))},t}(u.default.Component);g.propTypes=h,t.default=g;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-a4858b26c7c587bfe927.js.map