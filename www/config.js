System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.5",
    "angularfire": "github:firebase/angularfire@0.9.0",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:firebase/angularfire@0.9.0": {
      "angular": "github:angular/bower-angular@1.3.5",
      "firebase": "github:firebase/firebase-bower@2.0.6"
    }
  }
});

