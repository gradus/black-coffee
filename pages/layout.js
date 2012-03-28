
module.exports = function() {
  doctype(5);
  return html(function() {
    head(function() {
      title('I like my Coffee Black');
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
        href: '/stylesheets/app.css'
      });
      return link({
        rel: 'shortcut icon',
        href: '/images/favicon.ico'
      });
    });
    return content();
  });
};
