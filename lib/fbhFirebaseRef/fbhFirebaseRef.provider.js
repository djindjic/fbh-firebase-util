import angular from 'angular';

export let fbhFirebaseRefProviderModule = angular.module('fbhFirebaseRefProviderModule', []);

fbhFirebaseRefProviderModule.provider('fbhFirebaseRef', function() {
  this.appName = null;

  this.setAppName = function(name) {
    this.appName = name;
  };

  this.$get = ['Firebase', '$firebase', function (FirebaseObj, $firebase) {
    let that = this;
    function firebaseRef(path) {
      var ref = new FirebaseObj(`https://${that.appName}.firebaseio.com/`);
      var args = Array.prototype.slice.call(arguments);
      if( args.length ) {
        ref = ref.child(pathRef(args));
      }
      return ref;
    }
    function pathRef(args) {
      for (var i = 0; i < args.length; i++) {
        if (angular.isArray(args[i])) {
          args[i] = pathRef(args[i]);
        }
        else if( typeof args[i] !== 'string' ) {
          throw new Error('Argument '+i+' to firebaseRef is not a string: '+args[i]);
        }
      }
      return args.join('/');
    }

    function syncData(path, props) {
      var ref = firebaseRef(path);
      props = angular.extend({}, props);
      angular.forEach(['limit', 'startAt', 'endAt'], function(k) {
        if( props.hasOwnProperty(k) ) {
          var v = props[k];
          ref = ref[k].apply(ref, angular.isArray(v)? v : [v]);
          delete props[k];
        }
      });
      return $firebase(ref, props);
    }

    return {
      syncObject: function(path, factoryConfig) {
        return syncData.apply(null, arguments).$asObject();
      },

      syncArray: function(path, factoryConfig) {
        return syncData.apply(null, arguments).$asArray();
      },

      ref: firebaseRef
    };
  }];
});