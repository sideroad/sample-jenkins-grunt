How to setup grunt on jenkins
=============================

[Grunt](gruntjs.com) is suitable for building JavaScript.
[Jenkins](http://jenkins-ci.org/) is suitable for CI.

This is browser javascript sample project and building JavaScript with Grunt on Jenkins.

# Awesome project
  - src              // Script files
  - dist             // Compressed production files
  - test             // Test code
  - cov              // Test coverage
  - Gruntfile.js     // Grunt config file
  - package.json     // Project config file
  - jenkins-grunt.sh // Kick grunt on jenkins

## Gruntfile.js
Execute `jshint`, `testem`, `clean`, `qunit-cov`, `concat`, `uglify`

### [jshint](https://github.com/gruntjs/grunt-contrib-jshint)
Detect errors and potential problems in JavaScript code and can be used to enforce coding conventions.

### [testem](https://github.com/sideroad/grunt-testem)
Execute browser testing framework automatically. It's can be execute across a multitude of browsers and output the results in the TAP format.

### [clean](https://github.com/gruntjs/grunt-contrib-clean)
Cleaning production and coverage directiory before building

### [qunit-cov](https://github.com/afonsof/grunt-qunit-cov)
Coverage unit test in qunit

### [concat](https://github.com/gruntjs/grunt-contrib-concat)
Concatenate files

### [uglify](https://github.com/gruntjs/grunt-contrib-uglify)
Minify files with UglifyJS

## jenkins-grunt.sh
  - Add node and phatomjs path to PATH environment variable.
  - Copy grunt_node_modules into local directory ( `npm install` is prefer than copy )
  - Execute grunt

```shell
export PATH=/path/to/node:/path/to/node_bin:/path/to/phantomjs:$PATH;

mkdir node_modules
cp -R /path/to/grunt_node_modules/* node_modules
grunt
```

# Jenkins Configration

## Install plugins
###[TAP Plugin](http://wiki.jenkins-ci.org/display/JENKINS/TAP+Plugin)  
This plugin publishes TAP test results.

## Create New Job
`Jenkins` -> `New job` -> `Build a free-style software project`
![CreateNewJob](https://github.com/sideroad/sample-jenkins-grunt/raw/master/images/create_new_job.png)

Click `Add build step` -> `Execute shell` and input `sh jenkins-grunt.sh` into Command area
![ExecuteGrunt](https://github.com/sideroad/sample-jenkins-grunt/raw/master/images/execute_grunt.png)

Click `Add post-build action` -> `Publish TAP Results` and input `test/testem.tap` into Test results
![PublishTAP](https://github.com/sideroad/sample-jenkins-grunt/raw/master/images/publish_tap.png)

Save and finish!