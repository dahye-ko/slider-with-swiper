// new Swiper(CSS 선택자, 옵션)
new Swiper(".mySwiper", {
  slidesPerView: 3, // 한번에 보이는 슬라이드 개수
  spaceBetween: 20, // 슬라이드 사이 간격
  loop: true, // loop 여부
  centeredSlides: true, // 활성 슬라이드 위치를 center로 설정
  autoplay: {
    delay: 3000, // 자동 슬라이드 시간차
    pauseOnMouseEnter: true, // 마우스를 얹으면 일시정지
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".arrow-next",
    prevEl: ".arrow-prev",
  },
});
