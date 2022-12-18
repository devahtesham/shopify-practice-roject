$(function () {
  $(".container").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 821,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".slick-arrow").forEach(function (el) {
      if (el.className.includes("slick-disabled")) {
        el.style.display = "none";
      } else {
        el.style.display = "block";
      }
      el.addEventListener("click", (e) => {
        document.querySelectorAll(".slick-arrow").forEach(function (el) {
          if (el.className.includes("slick-disabled")) {
            el.style.display = "none";
          } else {
            el.style.display = "block";
          }
        });
      });
    });
  });
});
