app.directive('postingformat', function() {
	
	function hashtag(text){
		
		
		text= text.replace(/#(\S*)/g,'<a href="#/hashtag/$1" class="posting_hashtag">#$1</a>');
		return text;
	}
	
	return {
		restrict: 'AE',
		link: function(scope, element, attrs) {
			scope.posting.doc.msg_formatted = scope.posting.doc.msg;
			scope.posting.doc.msg_formatted = hashtag(scope.posting.doc.msg_formatted);
		},
		scope: {
			posting: '=postingformat'
		},
		template: '<div class="posting_msg" ng-bind-html="posting.doc.msg_formatted"></div>'
	};
});