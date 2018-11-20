export const brandColors = {
  katablue: '#006fe6',
  lightkatablue: '#7fbcff',
  softkatablue: '#d8ebff',

  semicobalt: '#2662cf',
  cobalt: '#2053af',
  darkcobalt: '#19428c',

  iceblue: '#f8fcff',
  icebluetwo: '#f4faff',
  icebluethree: '#d8ebff',

  black: '#000',
  grey80: '#24282d',
  grey70: '#484c4f',
  grey60: '#676b6d',
  grey50: '#949a9d',
  grey40: '#c2c7c8',
  grey30: '#e2e6e8',
  grey20: '#edf1f2',
  grey10: '#f6f7f8',
  white: '#fff',

  blue: '#2a90ff',
  green: '#00c853',
  red: '#e53935',
  yellow: '#ffc400'
};

const theme = {
  // Site colors
  colors: {
    brand: brandColors.katablue,
    accent: brandColors.katablue,
    accentDark: brandColors.cobalt,
    drawer: {
      background: brandColors.icebluetwo,
      border: brandColors.icebluethree
    },
    black: brandColors.black,
    border: brandColors.grey30,
    ui: {
      bright: brandColors.grey20,
      light: brandColors.grey10,
      whisper: brandColors.grey10
    },
    footer: {
      background: brandColors.icebluetwo,
      border: brandColors.icebluethree
    },
    code: brandColors.grey20,
    gray: {
      dark: brandColors.grey80,
      copy: brandColors.grey70,
      calm: brandColors.grey50
    },
    ink: brandColors.black,
    white: brandColors.white,
    error: brandColors.red
  },

  // Font stack
  fonts: {
    sansSerif:
      // tslint:disable-next-line:max-line-length
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Arial, sans-serif',
    serif: 'Georgia, Times New Roman, Times, serif',
    monospace: 'Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace, monospace'
  },

  // Media breakpoints (Important: use `min-width`!)
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },

  // Container widths
  containerWidth: {
    md: 720,
    lg: 960,
    xl: 1140
  },

  // Dimensions
  dimensions: {
    fontSize: {
      regular: 16,
      large: 18
    },
    headingSizes: {
      h1: 2.441,
      h2: 1.953,
      h3: 1.563,
      h4: 1.25
    },
    lineHeight: {
      regular: 1.45,
      heading: 1.2
    },
    containerPadding: 1.5
  },

  // Widths
  widths: {
    drawer: {
      sm: 200,
      lg: 300
    }
  },

  // Heights
  heights: {
    header: 64
  },

  // z-index
  zIndex: {
    content: 1,
    header: 90,
    overlay: 95,
    floatingButton: 100,
    drawer: 105
  }
};

export default theme;
