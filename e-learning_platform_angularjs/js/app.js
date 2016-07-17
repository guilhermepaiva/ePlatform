var mainApp = angular.module('mainApp', ['ui.router', 'authMdl', 'dashMdl', 'courseMdl', 'settingsMdl', 'adminMdl', 'paymentsMdl', 'schoolService', 'userService', 'ngFileUpload']);

mainApp.constant('railsServer', 'localhost:3000');
mainApp.constant('subscriptionValue', 30);

//fecthes headers from localstore
mainApp.factory('requestHeaders', function(){
	return function(){
		return {
			'X-USER-EMAIL': localStorage.email,
            'X-USER-TOKEN': localStorage.token
		};
	}
});

mainApp.config(['railsServer', '$stateProvider', function(railsServer, $stateProvider, $urlRouterProvider) {

	$stateProvider
        .state("sign_up", {
            url: "/sign_up",
            templateUrl: "./views/sign_up.html",
            controller: "authCtrl"
        })
        .state("login", {
            url: "/login",
            templateUrl: "./views/login.html",
            controller: "authCtrl"
        })
        .state("forgot_password", {
            url: "/forgot_password",
            templateUrl: "./views/forgot_password.html",
            controller: "authCtrl"
        })
        .state("reset_password", {
            url: "/reset_password",
            templateUrl: "./views/reset_password.html",
            controller: "authCtrl"
        })
        .state("dashboard", {
            url: "/dashboard",
            templateUrl: "./views/dashboard.html",
            controller: "dashCtrl"
        })
        .state("course", {
            url: "/courses/{courseId}", // we could also use :courseId
            templateUrl: "./views/course.html",
            resolve: {
                courseId: ['$stateParams', function($stateParams) {
                    return $stateParams.courseId;
                }]
            },
            controller: 'courseCtrl'
        })
        .state("admin", {
            url: "/admin",
            templateUrl: "./views/admin.html",
            controller: "adminCtrl"
        })
        .state("settings", {
            url: "/settings",
            templateUrl: "./views/settings.html",
            controller: "settingsCtrl"
        })
        .state("subscriptions", {
            url: "/subscriptions",
            templateUrl: "./views/subscriptions.html",
            controller: "paymentsCtrl"
        });
    $urlRouterProvider.otherwise("dashboard");

}]);