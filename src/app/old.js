let app = angular.module("todoApp",[]);

app.controller("todolist", function($scope) {

     $scope.messagenew = function() {

          let msgnew ={};

          let dt= new Date();

          let str= dt.toISOString();

          let s=str.split("T");

          let t=s[1].split(".");

          msgnew.name=$scope.name;

          msgnew.country=$scope.country;

       msgnew.age=$scope.age;

       msgnew.priv=false;

       msgnew.date=s[0];

       msgnew.time=t[0];

       msgnew.msg=$scope.text;

      let err=false, iderr=0;

      $scope.error="";

       if($scope.name===undefined) {

        $scope.error="Please, enter name";

        iderr++;

        err=true;

       }   

         if($scope.country===undefined) {

         

        if(iderr)  $scope.error+="\nPlease, enter country";

        else $scope.error="Please, enter country";

        iderr++;

        err=true;

       }   

         if($scope.age===undefined) {

         

          if(iderr)  $scope.error+="\nPlease, enter age";

        else $scope.error="Please, enter age";

        iderr++;

        err=true;

       } 

        if($scope.text===undefined) {

        

          if(iderr)  $scope.error+="\nPlease, enter text message";

        else $scope.error="Please, enter text message";

        err=true;

        iderr++;

       }   

         

       if(!err)$scope.users.push(msgnew);

      };

      $scope.liked=function(id){

          if(!$scope.users[id-1].click)

              $scope.users[id-1].like++;

          else

              $scope.users[id-1].like--;

          $scope.users[id-1].click=!$scope.users[id-1].click;

      };

      $scope.answer=function(id){

          if($scope.text==undefined) 

             $scope.text=$scope.users[id-1].name+", ";

          else

             $scope.text+=" "+$scope.users[id-1].name+",";

        

      };

      $scope.quote=function(id){

          $scope.text="«"+$scope.users[id-1].msg+"» (user:"+

          $scope.users[id-1].name+")";

      },

      $scope.spam=function(id){

        

          let usr=$scope.users;

          $scope.users.splice(id-1,1);

      }

      /*

      $scope.private=function(){

          let msgnew ={};

          let dt= new Date();

          let str= dt.toISOString();

          let s=str.split("T");

          let t=s[1].split(".");

          msgnew.name=$scope.name;

          msgnew.country=$scope.country;

       msgnew.age=$scope.age;

       msgnew.priv=true;

       msgnew.date=s[0];

       msgnew.time=t[0];

       msgnew.msg=$scope.text;

      let err=false, iderr=0;

      $scope.error="";

       if($scope.name===undefined) {

        $scope.error="Please, enter name";

        iderr++;

        err=true;

       }   

         if($scope.country===undefined) {

         

        if(iderr)  $scope.error+="\nPlease, enter country";

        else $scope.error="Please, enter country";

        iderr++;

        err=true;

       }   

         if($scope.age===undefined) {

         

          if(iderr)  $scope.error+="\nPlease, enter age";

        else $scope.error="Please, enter age";

        iderr++;

        err=true;

       } 

        if($scope.text===undefined) {

        

          if(iderr)  $scope.error+="\nPlease, enter text message";

        else $scope.error="Please, enter text message";

        err=true;

        iderr++;

       }   

         

       if(!err)$scope.users.push(msgnew);

      };*/

      

});