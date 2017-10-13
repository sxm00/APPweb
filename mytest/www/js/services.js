angular.module('starter.services', [])

.factory('Product', function() {
 	var product=[{
 		'products':'K-125',
 		'profit':'8.0',
 		'state':'可追加',
 		'money':'100000',
 		'time':'18天'
 	},{
 		'products':'K-126',
 		'profit':'7.6',
 		'state':'开放中',
 		'money':'100000',
 		'time':'18天'
 	},{
 		'products':'K-145',
 		'profit':'8.8',
 		'state':'待计息',
 		'money':'100000',
 		'time':'18天'
 	},{
 		'products':'K-120',
 		'profit':'4.0',
 		'state':'计息中',
 		'money':'100000',
 		'time':'18天'
 	}
 	]
 	return {
 		all:function(){
 			return product;
 		}
 	}
});
