"use strict";

$(function () {
  // Sliders
  var sliderPlans = new Swiper('#swiperPlans', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: "auto",
    freeMode: {
      enabled: true,
      sticky: false,
      momentumBounce: false
    },
    centeredSlides: true,
    mousewheel: {
      enabled: true,
      sensitivity: 1
    },
    spaceBetween: 20,
    speed: 500,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }); // Filter

  var mixer = mixitup(".filter__content", {
    animation: {
      duration: 200
    }
  }); // Menu

  var menuMain = $(".header__menu");
  var btnBurger = $(".header__burger");
  btnBurger.on("click", mobileMenu);

  function mobileMenu(event) {
    event.preventDefault();
    btnBurger.add(menuMain).toggleClass("_active");
  }

  function closeMenu() {
    btnBurger.add(menuMain).removeClass("_active");
  }

  $(window).resize(function () {
    if ($(this).outerWidth() >= 767.98) {
      closeMenu();
    }
  });
  $(document).mouseup(function (e) {
    if (!menuMain.is(e.target) && menuMain.has(e.target).length === 0 && !btnBurger.is(e.target) && btnBurger.has(e.target).length === 0) {
      closeMenu();
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsInNsaWRlclBsYW5zIiwiU3dpcGVyIiwiZGlyZWN0aW9uIiwibG9vcCIsInNsaWRlc1BlclZpZXciLCJmcmVlTW9kZSIsImVuYWJsZWQiLCJzdGlja3kiLCJtb21lbnR1bUJvdW5jZSIsImNlbnRlcmVkU2xpZGVzIiwibW91c2V3aGVlbCIsInNlbnNpdGl2aXR5Iiwic3BhY2VCZXR3ZWVuIiwic3BlZWQiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwibWl4ZXIiLCJtaXhpdHVwIiwiYW5pbWF0aW9uIiwiZHVyYXRpb24iLCJtZW51TWFpbiIsImJ0bkJ1cmdlciIsIm9uIiwibW9iaWxlTWVudSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhZGQiLCJ0b2dnbGVDbGFzcyIsImNsb3NlTWVudSIsInJlbW92ZUNsYXNzIiwid2luZG93IiwicmVzaXplIiwib3V0ZXJXaWR0aCIsImRvY3VtZW50IiwibW91c2V1cCIsImUiLCJpcyIsInRhcmdldCIsImhhcyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLENBQUMsQ0FBQyxZQUFVO0FBRVI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsSUFBSUMsTUFBSixDQUFXLGNBQVgsRUFBMkI7QUFDM0NDLElBQUFBLFNBQVMsRUFBRSxZQURnQztBQUUzQ0MsSUFBQUEsSUFBSSxFQUFFLEtBRnFDO0FBRzNDQyxJQUFBQSxhQUFhLEVBQUUsTUFINEI7QUFJM0NDLElBQUFBLFFBQVEsRUFBRTtBQUNOQyxNQUFBQSxPQUFPLEVBQUUsSUFESDtBQUVOQyxNQUFBQSxNQUFNLEVBQUUsS0FGRjtBQUdOQyxNQUFBQSxjQUFjLEVBQUU7QUFIVixLQUppQztBQVMzQ0MsSUFBQUEsY0FBYyxFQUFFLElBVDJCO0FBVTNDQyxJQUFBQSxVQUFVLEVBQUU7QUFDUkosTUFBQUEsT0FBTyxFQUFFLElBREQ7QUFFUkssTUFBQUEsV0FBVyxFQUFFO0FBRkwsS0FWK0I7QUFjM0NDLElBQUFBLFlBQVksRUFBRSxFQWQ2QjtBQWUzQ0MsSUFBQUEsS0FBSyxFQUFFLEdBZm9DO0FBZ0IzQ0MsSUFBQUEsVUFBVSxFQUFFO0FBQ1pDLE1BQUFBLE1BQU0sRUFBRSxxQkFESTtBQUVaQyxNQUFBQSxNQUFNLEVBQUU7QUFGSTtBQWhCK0IsR0FBM0IsQ0FBcEIsQ0FIUSxDQXlCUjs7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxrQkFBRCxFQUFxQjtBQUN0Q0MsSUFBQUEsU0FBUyxFQUFFO0FBQ1BDLE1BQUFBLFFBQVEsRUFBRTtBQURIO0FBRDJCLEdBQXJCLENBQXJCLENBMUJRLENBZ0NSOztBQUNBLE1BQU1DLFFBQVEsR0FBR3RCLENBQUMsQ0FBQyxlQUFELENBQWxCO0FBQ0EsTUFBTXVCLFNBQVMsR0FBR3ZCLENBQUMsQ0FBQyxpQkFBRCxDQUFuQjtBQUVBdUIsRUFBQUEsU0FBUyxDQUFDQyxFQUFWLENBQWEsT0FBYixFQUFzQkMsVUFBdEI7O0FBRUEsV0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFDdkJBLElBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBSixJQUFBQSxTQUFTLENBQUNLLEdBQVYsQ0FBY04sUUFBZCxFQUF3Qk8sV0FBeEIsQ0FBb0MsU0FBcEM7QUFDSDs7QUFDRCxXQUFTQyxTQUFULEdBQXFCO0FBQ2pCUCxJQUFBQSxTQUFTLENBQUNLLEdBQVYsQ0FBY04sUUFBZCxFQUF3QlMsV0FBeEIsQ0FBb0MsU0FBcEM7QUFDSDs7QUFFRC9CLEVBQUFBLENBQUMsQ0FBQ2dDLE1BQUQsQ0FBRCxDQUFVQyxNQUFWLENBQWlCLFlBQVk7QUFDekIsUUFBSWpDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWtDLFVBQVIsTUFBd0IsTUFBNUIsRUFBb0M7QUFDaENKLE1BQUFBLFNBQVM7QUFDWjtBQUNKLEdBSkQ7QUFLQTlCLEVBQUFBLENBQUMsQ0FBQ21DLFFBQUQsQ0FBRCxDQUFZQyxPQUFaLENBQW9CLFVBQVVDLENBQVYsRUFBYTtBQUM3QixRQUFJLENBQUNmLFFBQVEsQ0FBQ2dCLEVBQVQsQ0FBWUQsQ0FBQyxDQUFDRSxNQUFkLENBQUQsSUFDR2pCLFFBQVEsQ0FBQ2tCLEdBQVQsQ0FBYUgsQ0FBQyxDQUFDRSxNQUFmLEVBQXVCRSxNQUF2QixLQUFrQyxDQURyQyxJQUVHLENBQUNsQixTQUFTLENBQUNlLEVBQVYsQ0FBYUQsQ0FBQyxDQUFDRSxNQUFmLENBRkosSUFHR2hCLFNBQVMsQ0FBQ2lCLEdBQVYsQ0FBY0gsQ0FBQyxDQUFDRSxNQUFoQixFQUF3QkUsTUFBeEIsS0FBbUMsQ0FIMUMsRUFHNkM7QUFDckNYLE1BQUFBLFNBQVM7QUFDaEI7QUFDSixHQVBEO0FBU0gsQ0E1REEsQ0FBRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIFNsaWRlcnNcclxuICAgIGNvbnN0IHNsaWRlclBsYW5zID0gbmV3IFN3aXBlcignI3N3aXBlclBsYW5zJywge1xyXG4gICAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxyXG4gICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG4gICAgICAgIGZyZWVNb2RlOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHN0aWNreTogZmFsc2UsXHJcbiAgICAgICAgICAgIG1vbWVudHVtQm91bmNlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgICAgIG1vdXNld2hlZWw6IHtcclxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgc2Vuc2l0aXZpdHk6IDEsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEZpbHRlclxyXG4gICAgY29uc3QgbWl4ZXIgPSBtaXhpdHVwKFwiLmZpbHRlcl9fY29udGVudFwiLCB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTWVudVxyXG4gICAgY29uc3QgbWVudU1haW4gPSAkKFwiLmhlYWRlcl9fbWVudVwiKTtcclxuICAgIGNvbnN0IGJ0bkJ1cmdlciA9ICQoXCIuaGVhZGVyX19idXJnZXJcIik7XHJcblxyXG4gICAgYnRuQnVyZ2VyLm9uKFwiY2xpY2tcIiwgbW9iaWxlTWVudSk7XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBtb2JpbGVNZW51KGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBidG5CdXJnZXIuYWRkKG1lbnVNYWluKS50b2dnbGVDbGFzcyhcIl9hY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbG9zZU1lbnUoKSB7XHJcbiAgICAgICAgYnRuQnVyZ2VyLmFkZChtZW51TWFpbikucmVtb3ZlQ2xhc3MoXCJfYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkgeyBcclxuICAgICAgICBpZiAoJCh0aGlzKS5vdXRlcldpZHRoKCkgPj0gNzY3Ljk4KSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWVudSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICghbWVudU1haW4uaXMoZS50YXJnZXQpXHJcbiAgICAgICAgICAgICYmIG1lbnVNYWluLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICYmICFidG5CdXJnZXIuaXMoZS50YXJnZXQpXHJcbiAgICAgICAgICAgICYmIGJ0bkJ1cmdlci5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VNZW51KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuIl0sImZpbGUiOiJtYWluLmpzIn0=