/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        rnf: ["RNF", "serif"],
      },
      transformOrigin: {
        'transform-1Halfpx': '1.5px',
      },
      keyframes: {
        bounceFrontPage: {
          '0%': {
            transform: 'translateY(-5%)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          },
          '100%': {
            transform: 'translateY(-5%)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
        },
      },
      animation: {
        'bounceFP': 'bounceFrontPage 3s linear infinite',
      },
      maxWidth: {
        'full-card': '600px',
      },
    },
    colors: {
      twitterBlue: '#1DA1F2',
      youtubeRed: '#c4302b',
      instagramPurple: '#833AB4',
      spotifyGreen: '#1DB954',
      applePurple: '#D56DFB',
      discordPurple: '#7289da',
      patreonOrange: '#f96854',
      msmRed: '#EC5151',
      msmRedAnalagYellow: '#ECEC51',
      msmRedAnalagGreen: '#9FEC51',
      msmBlue: '#05E1EF',
      msmBlueTriYellow: '#E1EF05',
      msmYellow: '#F7CA3D',
      msmYellowTetraGreen: '#3DF76D',
      msmYellowCompBlue: '#3D6AF7',
      bkgColor: '#fef6e4',
      navColor: '#FEF8EB',
      navColorComplement: '#EBF1FE',
      navColorComplementPurple: '#DED9CE',
      collapseColor: "#FEF7E7",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}
