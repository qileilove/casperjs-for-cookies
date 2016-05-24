var casper = require('casper').create();
var fs = require('fs')

// casper.userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36 SE 2.X MetaSr 1.0');

 // var cookies = JSON.stringify(phantom.cookies);
 // var fs = require('file-system');
 // var cookies="testingsdfghj";
// var cookies = JSON.stringify((this.page.cookies));
casper.start('https://github.com/login/');
casper.waitForSelector('input.btn.btn-primary.btn-block'); // wait for the form node to be added
casper.then(function() {
  this.fillSelectors('.auth-form-body', {
      '#login_field': 'qileilove',
      '#password': '*****'
   });
  this.click('input.btn.btn-primary.btn-block'); // Click the login button instead of submitting the form
  this.echo('Browser Cookie: ' + this.evaluate(function() {
       return document.cookie;
   }));
  // fs.writeFile('cookies.txt', cookies, function(err) {});
  // var cookies = phantom.cookies;
  //    this.echo("cookie.length = " + cookies.length);
  //    for (var i in cookies) {
  //        this.echo(cookies[i].name + "=" +  cookies[i].value);
  //    }
});
//do your login stuff...
casper.run(function() {
  var cookies = JSON.stringify((this.page.cookies));
  fs.write('cookie.txt', cookies, 'w');
  this.exit();
});
 // fs.write("cookies.txt", cookies,"w");
casper.wait(3000); // Wait for ajax form submission
// casper.waitForText(LOGIN PAGE TEXT);
casper.then(function() {
  this.capture('logged-in.png')
});

casper.run();
