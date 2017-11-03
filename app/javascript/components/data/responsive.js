export let responsiveSettings = [
        {
          // fullhd
          breakpoint: 3000,
          settings: {
            infinite: false,
            arrows: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          // widescreen
          breakpoint: 1392,
          settings: {
            infinite: false,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          // desktop
          breakpoint: 1200,
          settings: {
            infinite: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          // tablet
          breakpoint: 1008,
          settings: {
            infinite: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          //most phones
          breakpoint: 768,
          settings: {
            infinite: false,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          //most phones
          breakpoint: 500,
          settings: {
            infinite: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        },
      ]

export let responsiveGridSettings = function(count) {
  console.log("settings count", count)
    let settings = [
        {
          // fullhd
          breakpoint: 3000,
          settings: {
            infinite: false,
            arrows: false,
            rows: count < 5 ? 1 : Math.trunc(count / 5),
            slidesPerRow: 5
          }
        },
        {
          // widescreen
          breakpoint: 1392,
          settings: {
            infinite: false,
            arrows: false,
            rows: count < 4 ? 1 : Math.trunc(count / 4),
            slidesPerRow: 4
          }
        },
        {
          // desktop
          breakpoint: 1200,
          settings: {
            infinite: false,
            arrows: false,
            rows: count < 3 ? 1 : Math.trunc(count / 3),
            slidesPerRow: 3
          }
        },
        {
          // tablet
          breakpoint: 1008,
          settings: {
            infinite: false,
            arrows: false,
            rows: count < 3 ? 1 : Math.trunc(count / 3),
            slidesPerRow: 3
          }
        },
        {
          //most phones
          breakpoint: 768,
          settings: {
            infinite: false,
            arrows: false,
            rows: count < 2 ? 1 : Math.trunc(count / 2),
            slidesPerRow: 2
          }
        },
        {
          //most phones
          breakpoint: 500,
          settings: {
            infinite: false,
            arrows: false,
            rows: count,
            slidesPerRow: 1
          }
        },
      ]

      return settings
    }



