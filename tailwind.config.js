module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  corePlugns: {},
  variants: {
    extend: {}
  },
  theme: {
    extend: {
      fontFamily: {
        jakarta: 'var(--font-jakarta)'
      },
      height: {
        128: '35rem'
      },
      fontSize: {
        '2xs': '0.625rem', // font-size: 10px
        xs: '0.75rem', // font-size: 12px
        sm: '0.875rem', // font-size: 14px
        base: '1rem', // font-size: 16px
        lg: '1.125rem', // font-size: 18px
        xl: '1.25rem', // font-size: 20px
        '2xl': '1.5rem', // font-size: 24px
        '3xl': ['2rem', '2.5rem'], // font-size 32px / 40px
        '4xl': ['2.5rem', '3rem'], // font-size 40px / 48px
        '5xl': ['3rem', '1'], // font-size 48px / line-height 1
        '6xl': ['3.75rem', '1'], // font-size 60px / line-height 1
        '7xl': ['4.5rem', '1'], // font-size 72px / line-height 1
        '8xl': ['6rem', '1'], // font-size 96px / line-height 1
        '9xl': ['8rem', '1'] // font-size 128px / line-height 1
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      },
      maxWidth: {
        '7xl': 1200,
        '8xl': 1280
      },
      colors: {
        red: '#C42127',
        'red-10': '#F3D3D4',

        blue: '#0E3178',
        'blue-10': '#E7F1FF',

        green: '#198754',
        'green-10': '#E0F2D8',

        yellow: '#EAB308',
        'yellow-10': '#FFF3CD',

        surface: '#F5F5F7',
        'surface-disable': '#C4C4C4',

        magenta: '#DC3545',

        overlay: '#00000080',

        cyan: '#00AEEF',

        link: '#2E266F',

        'line-active': '#DEE2E6',
        'line-disable': '#ADB5BC',

        silver: '#737373',

        platinum: '#B6B6B6',

        unactive: '#ADB5BD',

        heart: '#9C1B20',

        black: '#212529'
      },
      borderRadius: {
        '4xl': '2rem' // 32px
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite',
        'slide-up-fade': 'slide-up-fade 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade': 'slide-down-fade 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-fade': 'slide-left-fade 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-fade':
          'slide-right-fade 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        'slide-up-fade': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'slide-down-fade': {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'slide-left-fade': {
          '0%': { opacity: 0, transform: 'translateX(-10px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        'slide-right-fade': {
          '0%': { opacity: 0, transform: 'translateX(10px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        }
      }
    }
  },
  plugins: []
}
