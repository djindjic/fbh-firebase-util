System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "fbh-firebase-util/*": "lib/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.13",
    "angularfire": "github:firebase/angularfire@0.9.2",
    "github:firebase/angularfire@0.9.2": {
      "angular": "github:angular/bower-angular@1.3.13",
      "firebase": "github:firebase/firebase-bower@2.1.2"
    }
  }
});

