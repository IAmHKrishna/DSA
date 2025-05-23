var app = angular.module('authApp', ['ngRoute']);

// Routing
app.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/login', {
      template: `
        <h2>Login</h2>
        <form ng-submit="login()">
          <input type="text" ng-model="user.username" placeholder="Username" required /><br/>
          <input type="password" ng-model="user.password" placeholder="Password" required /><br/>
          <button type="submit">Login</button>
          <p style="color:red" ng-if="error">{{ error }}</p>
        </form>
      `,
      controller: 'LoginCtrl'
    })
    .when('/dashboard', {
      template: `
        <h2>Dashboard</h2>
        <p>Welcome, authenticated user!</p>
        <button ng-click="logout()">Logout</button>
      `,
      controller: 'DashboardCtrl',
      protected: true
    })
    .otherwise({ redirectTo: '/login' });

  $httpProvider.interceptors.push('AuthInterceptor');
});

// AuthService
app.factory('AuthService', function($window, $q) {
  return {
    login: function(user) {
        console.log("user",user);
      // Simulate server check
      if (user.username === 'admin' && user.password === 'admin') {
        var token = 'mock-jwt-token';
        $window.localStorage.setItem('token', token);
        return $q.resolve({ token });
      } else {
        return $q.reject({ message: 'Invalid credentials' });
      }
    },
    logout: function() {
      $window.localStorage.removeItem('token');
    },
    isAuthenticated: function() {
      return !!$window.localStorage.getItem('token');
    },
    getToken: function() {
      return $window.localStorage.getItem('token');
    }
  };
});

// Token Interceptor
app.factory('AuthInterceptor', function(AuthService) {
  return {
    request: function(config) {
      var token = AuthService.getToken();
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    }
  };
});

// Route Guard
app.run(function($rootScope, $location, AuthService) {
  $rootScope.$on('$routeChangeStart', function(event, next) {
    if (next.protected && !AuthService.isAuthenticated()) {
      event.preventDefault();
      $location.path('/login');
    }
  });
});

// Login Controller
app.controller('LoginCtrl', function($scope, $location, AuthService) {
  $scope.user = {};
  $scope.login = function() {
    console.log(";skdflkjsdfljsldkfj");
    AuthService.login($scope.user)
      .then(() => $location.path('/dashboard'))
      .catch(() => $scope.error = 'Invalid username or password');
  };
});

// Dashboard Controller
app.controller('DashboardCtrl', function($scope, $location, AuthService) {
  $scope.logout = function() {
    AuthService.logout();
    $location.path('/login');
  };
});
