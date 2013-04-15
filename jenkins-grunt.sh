export PATH=/usr/local/bin:/path/to/node:/path/to/node_bin:/path/to/phantomjs:/path/to/jscoverage:$PATH;

mkdir node_modules
cp -R /path/to/grunt_node_modules/* node_modules
grunt jenkins --no-color
