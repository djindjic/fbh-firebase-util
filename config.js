System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.8",
    "angularfire": "github:firebase/angularfire@0.9.0",
    "github:firebase/angularfire@0.9.0": {
      "angular": "github:angular/bower-angular@1.3.8",
      "firebase": "github:firebase/firebase-bower@2.0.6"
    }
  }
});

