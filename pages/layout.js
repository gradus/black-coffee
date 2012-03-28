
module.exports = function() {
  doctype(5);
  return html(function() {
    head(function() {
      title(this.title);
      meta({
        name: 'viewport',
        content: 'width=device-width, initial-scale=0.7, maximum-scale=1'
      });
      link({
        rel: 'stylesheet',
        href: 'stylesheets/base.css'
      });
      link({
        rel: 'stylesheet',
        href: 'stylesheets/skeleton.css'
      });
      link({
        rel: 'stylesheet',
        href: "/stylesheets/" + this.css + ".css"
      });
      link({
        rel: 'shortcut icon',
        href: '/images/favicon.ico'
      });
      script({
        src: '/javascripts/jquery.min.js'
      });
      return script({
        src: 'javascripts/tabs.js'
      });
    });
    return body(function() {
      return div('.container', function() {
        return div({
          id: 'wrap'
        }, function() {
          ul('.tabs', function() {
            li(function() {
              return a(this.black || '', {
                href: '/'
              }, 'Black');
            });
            li(function() {
              return a(this.sugar || '', {
                href: '/sugar'
              }, 'Sugar');
            });
            return li(function() {
              return a(this.cream || '', {
                href: '/cream'
              }, 'Cream');
            });
          });
          return content();
        });
      });
    });
  });
};
