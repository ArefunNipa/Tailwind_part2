tailwind.config = {
  theme: {
    extend: {
      colors: {
        overlay: 'rgb(22 12 109 / 80%)',
        menubgcolor: 'rgb(22 12 109 / 60%)',
      },
      maxWidth: {
        container: '1320px',
        gallerycontainer: '1170px',
      },
      fontFamily: {
        fontfamilyone: ['Open Sans'],
        fontfamilytwo: ['Paprika'],
      },
      backgroundImage: {
        bannerimage: "url('./images/banner.jpg')",
      },
      fontSize: {
        bannertext: '75px',
      },
      lineHeight: {
        lineheight: '85px',
      }
    }
  }
}