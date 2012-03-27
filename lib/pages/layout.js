
module.exports = function() {
  doctype(5);
  return html(function() {
    return head(function() {
      title('I like my Coffee Black');
      meta({
        name: 'viewport',
        content: 'width=device-width, initial-scale=0.6, maximum-scale=0.55'
      });
      script({
        src: '/javascripts/jquery.min.js'
      });
      link({
        rel: 'stylesheet',
        href: '/stylesheets/app.css'
      });
      return link({
        rel: 'shortcut icon',
        href: '/images/favicon.ico'
      });
    });
  });
};
