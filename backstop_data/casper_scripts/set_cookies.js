var fs = require('fs');

module.exports = function(casper, scenario, vp) {

  casper.echo("Setting cookies");
  casper.then(function(){
    var cookiesJSON = fs.read('cookie.txt');
      var cookies = JSON.parse(cookiesJSON);
    for (var i = 0; i < cookies.length; i++) {

      casper.page.addCookie(cookies[i]);

    };
  });
casper.echo("end cookies");
casper.start("https://github.com/settings/profile");
casper.then(function() {
  this.capture('cookie.png')
});
casper.run();
}
