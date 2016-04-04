//引导页功能的业务逻辑
angular.module('guidePage.controller', ['guidePage.service'])
  .controller('GuidePageCtrl', function($scope, GlobalVariable, $ionicModal, $ionicActionSheet) {
    var guideSlide = new Swiper('#guideSlide', {
      pagination: '.swiper-pagination', //分页器
      onSlideChangeEnd: function(swiper) {
        var index = guideSlide.activeIndex + 1;
        if (index == 2 || index == 3) {
          var item = $("#tips-" + index);
          if (item.hasClass("hidden")) {
            item.removeClass("hidden");
            item.addClass("guide-show");
          }
        }
      }
    })




    // console.log(GlobalVariable.SERVER_PATH)
    // $scope.func_change = function(index){
    //  console.log(index)
    // }
    // $scope.show = function() {

    //    // 显示操作表
    //    $ionicActionSheet.show({
    //      buttons: [
    //        { text: '相册' },
    //        { text: '相机' },
    //      ],
    //      destructiveText: 'Delete',
    //      titleText: 'Modify your album',
    //      cancelText: 'Cancel',
    //      buttonClicked: function(index) {
    //       switch(index){
    //         case 0 :
    //         console.log('相册');
    //         break;
    //         case 1 :
    //         console.log('相机');
    //         break;
    //       }

    //        return true;
    //      }
    //    });

    //  };
    //  $ionicModal.fromTemplateUrl('modal.html', {
    //   scope: $scope,
    //   animation: 'slide-in-up'
    // }).then(function(modal) {
    //   $scope.modal = modal;
    // });
    // $scope.openModal = function() {
    //   $scope.modal.show();
    // };
    // $scope.closeModal = function() {
    //   $scope.modal.hide();
    // };
    // //当我们用到模型时，清除它！
    // $scope.$on('$destroy', function() {
    //   $scope.modal.remove();
    // });
    // // 当隐藏的模型时执行动作
    // $scope.$on('modal.hide', function() {
    //   // 执行动作
    // });
    // // 当移动模型时执行动作
    // $scope.$on('modal.removed', function() {
    //   // 执行动作
    // });
  })
