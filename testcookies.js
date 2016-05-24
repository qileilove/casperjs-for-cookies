var casper = require('casper').create();
var fs = require('fs');

var cookiesJSON = fs.read('cookie.txt');
var cookies = JSON.parse(cookiesJSON);
for (var i = 0; i < cookies.length; i++) {
  phantom.addCookie(cookies[i]);
}

// phantom.cookies = JSON.parse(data);
// casper.userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36 SE 2.X MetaSr 1.0');

 // var cookies = JSON.stringify(phantom.cookies);
 // var fs = require('file-system');
 // var cookies="testingsdfghj";
// var cookies = JSON.stringify((this.page.cookies));
// casper.then(function() {
//   // this.fillSelectors('.auth-form-body', {
//   //     '#login_field': 'qileilove',
//   //     '#password': 'qilei60636'
//   //  });
//   // this.click('input.btn.btn-primary.btn-block'); // Click the login button instead of submitting the form
//   // this.echo('Browser Cookie: ' + this.evaluate(function() {
//   //      return document.cookie;
//   //  }));
//   // fs.writeFile('cookies.txt', cookies, function(err) {});
//   // var cookies = phantom.cookies;
//   //    this.echo("cookie.length = " + cookies.length);
//   //    for (var i in cookies) {
//   //        this.echo(cookies[i].name + "=" +  cookies[i].value);
//   //    }
//var fs = require('fs')
// var fs = require('fs')
// var data = fs.read("cookie.txt")
// phantom.cookies = JSON.parse(data)
//
// });
// var data = fs.read("cookie.txt");
// phantom.cookies = JSON.parse(data);

// casper.test.setUp(function () {
//   casper.echo('cookies:'+JSON.parse(data));
//   // casper.echo('Cookies enabled?: ' + phantom.cookiesEnabled);
//   phantom.addCookie(JSON.parse(data));
// });
casper.start('https://github.com/settings/profile');
// casper.waitForSelector('input.btn.btn-primary.btn-block'); // wait for the form node to be added

 // fs.write("cookies.txt", cookies,"w");
casper.wait(3000); // Wait for ajax form submission
// casper.waitForText(LOGIN PAGE TEXT);
casper.then(function() {
  this.capture('ok-in.png')
});

casper.run();
