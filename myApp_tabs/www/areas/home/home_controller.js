angular.module('home.controller', ['home.service'])
  .controller('HomeCtrl', function($scope, GlobalVariable, $ionicModal, $ionicActionSheet) {
    getHeaderSlideData();

    function getHeaderSlideData() {
      $scope.headerSlideData = [{
        alt: "双十一预热主场会",
        src: "img/home/home-headerSlide-1.jpg"
      }, {
        alt: "双十一预热主场会",
        src: "img/home/home-headerSlide-2.jpg"
      }, {
        alt: "双十一预热主场会",
        src: "img/home/home-headerSlide-3.jpg"
      }, {
        alt: "双十一预热主场会",
        src: "img/home/home-headerSlide-4.jpg"
      }, {
        alt: "双十一预热主场会",
        src: "img/home/home-headerSlide-5.jpg"
      }, ]
    }
    initHeaderSlide();

    // function initHeaderSlide() {
    //   var headerSwiper = new Swiper('#headerSlider', {
    //     slidesPerView: 1,
    //     paginationClickable: true,
    //     centeredSlides: true,
    //     autoplay: 2000,
    //     autoplayDisableOnInteraction: false,
    //     loop: true,
    //     pagination: '.swiper-pagination', // 如果需要分页器
    //     // 改变自动更新
    //     observer: true,
    //     observeParents: true
    //   });
      function initHeaderSlide() {
        var mySwiper = new Swiper("#headerSlider", {
          pagination: '.swiper-pagination',
          //direction: 'vertical',
          autoplay: 2000,
          slidesPerView: 1,
          paginationClickable: true,
          centeredSlides: true,
          autoplayDisableOnInteraction: false,
          loop: true,
          observer: true,
          observeParents: true
        })
    }

  })
