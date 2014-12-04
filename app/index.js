'use strict';
var chalk = require('chalk');
var inquirer = require('inquirer');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    if (!this.options['skip-welcome-message']) {
      this.log(yosay(
        'Welcome to the classy ' + chalk.blue('Bootstrap Examples') + ' generator!'
      ));
      this.log(chalk.magenta(
        'Out of the box latest CSS distribution of Bootstrap 3.* is used with jQuery, Grunt and all tools.'
      ));
      this.log(chalk.magenta(
        'Just pick an offical example from the list below to start your project'
      ));
    }

    var prompts = [{
      type: 'list',
      name: 'examples',
      message: 'Which official example use to build the project?',
      paginated: true,
      choices: [new inquirer.Separator('--- Using the framework ---'), {
        name: 'Starter template',
        value: 'starterTemplate',
        checked: true
      }, {
        name: 'Theme',
        value: 'theme',
        checked: false
      }, {
        name: 'Grids',
        value: 'grids',
        checked: false
      }, {
        name: 'Jumbotron',
        value: 'jumbotron',
        checked: false
      }, {
        name: 'Jumbotron narrow',
        value: 'jumbotron-narrow',
        checked: false
      }, new inquirer.Separator('--- Navbars in action ---'), {
        name: 'Navbar',
        value: 'navbar',
        checked: false
      }, {
        name: 'Static top navbar',
        value: 'navbar-static-top',
        checked: false
      }, {
        name: 'Fixed navbar',
        value: 'navbar-fixed-top',
        checked: false
      }, new inquirer.Separator('--- Custom components ---'), {
        name: 'Cover',
        value: 'cover',
        checked: false
      }, {
        name: 'Carousel',
        value: 'carousel',
        checked: false
      }, {
        name: 'Blog',
        value: 'blog',
        checked: false
      }, {
        name: 'Dashboard',
        value: 'dashboard',
        checked: false
      }, {
        name: 'Sign-in page',
        value: 'signin',
        checked: false
      }, {
        name: 'Justified nav',
        value: 'justified-nav',
        checked: false
      }, {
        name: 'Sticky footer',
        value: 'sticky-footer',
        checked: false
      }, {
        name: 'Sticky footer with navbar',
        value: 'sticky-footer-navbar',
        checked: false
      }, new inquirer.Separator('--- Experiments ---'), {
        name: 'Non-responsive Bootstrap',
        value: 'non-responsive',
        checked: false
      }, {
        name: 'Offcanvas',
        value: 'offcanvas',
        checked: false
      }]
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
