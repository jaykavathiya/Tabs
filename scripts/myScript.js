var app = angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider .when("/", {
        templateUrl : "views/tab1.html",
        controller:	"myCtrl"	
    })
    .when("/tab2", {
        templateUrl : "views/tab2.html",
        controller : "myCtrl1"
    })
    .when("/tab3", {
        templateUrl : "views/tab3.html",
      	controller : "myCtrl2"
    })
   
   
});
app.controller('myCtrl',function($scope){
	$scope.names = ["Show All","Text","Videos","Photos"];
	$scope.tasks = ["photo1.jpg","photo2.jpg","video1.mp4","video2.mp4","text1.txt","text2.txt"];
});

app.controller("myCtrl1",function($scope){
	$scope.imageList = [
	   {url:"images/image1.jpg",name:"image1"},
	   {url:"images/image2.jpg",name:"image2"},
	   {url:"images/image3.jpg",name:"image3"},
	   {url:"images/image4.jpg",name:"image4"},
	   {url:"images/image5.jpg",name:"image5"},
	   ]
	$scope.myFunction = function(index){
		var a = this.imageList[index].url;
	    $scope.clickImage = a;
	}
});
app.controller('myCtrl2',function($scope){
	$scope.items = ["item1","item2","item3","item4"];
	
    $scope.add = function(item){
    	this.items.pop();
    	this.items.unshift(item);
    	$scope.item = "";
    }	
})
