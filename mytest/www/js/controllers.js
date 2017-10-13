angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$ionicSideMenuDelegate) {
	$scope.pics=[{
		'src':'ad.png'
	},{
		'src':'mike.png'
	},{
		'src':'ben.png'
	}]
	 $scope.toggleLeftSideMenu = function() {
	    $ionicSideMenuDelegate.toggleLeft();
	  };
})




.controller('SafeCtrl', function($scope) {
	$scope.prompt=[{
		'title':'1.大数据甄别风险',
		'text':'运用大数据进行征信，采集多达2000个维度数据，进行全方位数据分析。'
	},{
		'title':'2.专注个人消费贷款',
		'text':'在人民币1000-500000元之间，个人消费信贷为主。单个借款额度低，违约风险小。'
	},{
		'title':'3.风险与收益匹配',
		'text':'公司按照借款客户的资质和违约风险进行分区展示，分为新手安全标专区、中风险收益区、高风险收益区及合作专区。'
	},{
		'title':'4.强大的贷后管理',
		'text':'公司建立了强大的催收团队，并委托专业的资产管理公司进行催收，目前逾期30天内的借款的还款率在85% 以上。'
	}]
})

.controller('ChatsCtrl', function($scope,Product) {
  $scope.products=Product.all();
})


.controller('AccountCtrl', function($scope) {
  $scope.tz_person=function(){
  	window.location='#/tab/person';
  }
})

.controller('PersonCtrl', function($scope) {
	
  
})
.directive('hideTabs',function($rootScope){
	return {
		restrict:'A',
		link:function(scope,element,attributes){
			scope.$on('$ionicView.beforeEnter',function(){
				$rootScope.hideTabs=attributes.hideTabs;
			})
			scope.$on('$ionicView.beforeLeave',function(){
				$rootScope.hideTabs=false;
			})
		}
	}
})