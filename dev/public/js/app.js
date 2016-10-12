/* Define and configure app:
 ********************************************************/

var app = angular.module("myApp", []);
var url = 'https://dl.dropboxusercontent.com/u/7797721/apps/js-revision/data/questions.json';


/* Define controller. Here we retrieve a JSON document
   with a list of questions and answers. We will then
   populate the HTML using Angular's "ng-for" directive:
 ********************************************************/

app.controller("myCtrl", function($scope, $http) {
   $http.get(url)
    .then(function(response) {
        $scope.questions = response.data;
        setTimeout(function() {
            (function() {
                var answerToggleButtonText = {
                    show: '<i class="glyphicon glyphicon-chevron-up"></i>&nbsp;hide answer',
                    hide: '<i class="glyphicon glyphicon-chevron-down"></i>&nbsp;show answer'
                };

                /* When show/hide answer is clicked, show answer if currently
                   not visible — otherwise hide it.  */

                $('.button-toggle-answer').parent().parent().next().hide();
                $('.button-toggle-answer').click(function() {
                    if ($(this).parent().parent().next().is(":visible")) {
                        $(this).parent().parent().next().slideUp();
                        $(this).html(answerToggleButtonText.hide);
                    } else {
                        $(this).parent().parent().next().slideDown();
                        $(this).html(answerToggleButtonText.show);
                    }
                });
            })();
        }, 100);
    });
});