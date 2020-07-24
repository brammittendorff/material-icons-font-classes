var fs = require('fs');
var path = require('path');

var codepointFileContent = fs.readFileSync(path.resolve(__dirname, 'codepoints'), 'utf8');
var codepointFileLines = codepointFileContent.split("\n");
var cssContent = '';
var cssMinifiedContent = '';

codepointFileLines.forEach(function (codepointFileLine) {
	var lineExplode = codepointFileLine.split(' ');
	cssContent += `.material-icons.m_i_` + lineExplode[0] + `:before {
    content: "\\`+lineExplode[1].trim()+`";
};
`;
	cssMinifiedContent += `.material-icons.m_i_` + lineExplode[0] + `:before{content:"\\`+lineExplode[1].trim()+`"}`;
});

fs.writeFileSync(path.resolve(__dirname, 'dist/material-icons-font-classes.css'), cssContent);
fs.writeFileSync(path.resolve(__dirname, 'dist/material-icons-font-classes.min.css'), cssMinifiedContent);
