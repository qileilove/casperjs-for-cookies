module.exports = function(casper,fs, scenario, vp) {
  // scenario is the current scenario object being run from your backstop config
  // vp is the current viewport object being run from your backstop config

  // Example: setting cookies
  casper.echo("Setting cookies");
  casper.then(function(){
    casper.page.addCookie([
        {
            "domain": "github.com",
            "httponly": false,
            "name": "tz",
            "path": "/",
            "secure": true,
            "value": "Asia%2FShanghai"
        },
        {
            "domain": ".github.com",
            "expires": "Wed, 23 May 2018 16:10:40 GMT",
            "expiry": 1527091840,
            "httponly": false,
            "name": "_ga",
            "path": "/",
            "secure": false,
            "value": "GA1.2.844960253.1464019838"
        },
        {
            "domain": "github.com",
            "httponly": true,
            "name": "_gh_sess",
            "path": "/",
            "secure": true,
            "value": "eyJsYXN0X3dyaXRlIjoxNDY0MDE5ODM4NDIyLCJmbGFzaCI6eyJkaXNjYXJkIjpbImFuYWx5dGljc19kaW1lbnNpb24iLCJhbmFseXRpY3NfbG9jYXRpb24iXSwiZmxhc2hlcyI6eyJhbmFseXRpY3NfZGltZW5zaW9uIjp7Im5hbWUiOiJkaW1lbnNpb241IiwidmFsdWUiOiJMb2dnZWQgSW4ifSwiYW5hbHl0aWNzX2xvY2F0aW9uIjoiL2Rhc2hib2FyZCJ9fSwic2Vzc2lvbl9pZCI6IjBiYmE5OTU1M2JjMTkxODQ0OTdmZDEyYzFlYTcxYjlkIiwiY29udGV4dCI6Ii8ifQ%3D%3D--64bcda9c43b80b54b85d7ad47959b3e8c082fc26"
        },
        {
            "domain": "github.com",
            "expires": "Mon, 06 Jun 2016 16:10:38 GMT",
            "expiry": 1465229438,
            "httponly": true,
            "name": "user_session",
            "path": "/",
            "secure": true,
            "value": "42Sd3GFPG0qmpusR-OkH_V4lRiWoWYBqBrJPZcaGCH9FMeTUV0MrfnKAlhMfpo-ls5tpqllR-02_3X1k"
        },
        {
            "domain": ".github.com",
            "expires": "Fri, 23 May 2036 16:10:38 GMT",
            "expiry": 2095171838,
            "httponly": true,
            "name": "dotcom_user",
            "path": "/",
            "secure": true,
            "value": "qileilove"
        },
        {
            "domain": ".github.com",
            "expires": "Fri, 23 May 2036 16:10:38 GMT",
            "expiry": 2095171838,
            "httponly": true,
            "name": "logged_in",
            "path": "/",
            "secure": true,
            "value": "yes"
        },
        {
            "domain": ".github.com",
            "expires": "Mon, 23 May 2016 16:20:37 GMT",
            "expiry": 1464020437,
            "httponly": false,
            "name": "_gat",
            "path": "/",
            "secure": false,
            "value": "1"
        },
        {
            "domain": ".github.com",
            "expires": "Wed, 23 May 2018 16:10:37 GMT",
            "expiry": 1527091837,
            "httponly": false,
            "name": "_octo",
            "path": "/",
            "secure": false,
            "value": "GH1.1.712622791.1464019838"
        }
    ]
);
  });
  // `casper.thenOpen()` demonstrates a redirect to the original page with your new cookie value.

  // this step is not required if used with _onBeforeScript_
  // casper.then(function() {
  //   this.capture('cookie.png')
  // });

  casper.start("https://github.com/");

  // // Example: Adding script delays to allow for things like CSS transitions to complete.
  // casper.echo( 'Clicking button' );
  // casper.click( '.toggle' );
  // casper.wait( 250 );
  //
  // // Example: changing behaivior based on config values
  // if (vp.name === 'phone') {
  //   casper.echo( 'doing stuff for just phone viewport here' );
  // }

  // ...do other cool stuff here, see Casperjs.org for a full API and many ideas.
}
