// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var $, Backbone, Posts, _;
    $ = require('jquery');
    _ = require('underscore');
    Backbone = require('backbone');
    require('assets/js/models/post.js');
    (function() {});
    return Posts = (function(_super) {

      __extends(Posts, _super);

      function Posts() {
        return Posts.__super__.constructor.apply(this, arguments);
      }

      Posts.prototype.model = Post;

      return Posts;

    })(Backbone.Collection);
  });

}).call(this);
