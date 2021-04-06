import { Theme } from 'theme-ui'

const camillo: Theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512, 680],
  fonts: {
    body: 'Open Sans, sans-serif',
    heading: 'Barlow, Open Sans, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  colors: {
    text: '#000',
    background: '#F4F7FA',
    primary: '#5C79AC',
    secondary: '#B9BEC3',
    muted: '#f6f6f6',
  },
  radii: ['0px'],
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      fontFamily: 'body',
      borderRadius: 0,
      cursor: 'pointer',
    },
    secondary: {
      color: 'primary',
      bg: 'secondary',
      fontFamily: 'heading',
      fontWeight: 'bold',
      'text-transform': 'uppercase',
      borderRadius: 0,
      cursor: 'pointer',
    },
  },

  // below apply only to MDX documents
  styles: {
    // li: {
    //   // code: {
    //   //   fontFamily: 'monospace',
    //   //   fontSize: 'inherit',
    //   // },
    // },
    // code: {
    //   fontFamily: 'monospace',
    //   fontSize: 'inherit',
    // },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      code: {
        fontFamily: 'monospace',
        fontSize: 'inherit',
      },
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },

    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
}

export default camillo
