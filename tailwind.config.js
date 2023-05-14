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
        'transform-4px': '4px',
      },
    },
    colors: {
      twitterBlue: '#1DA1F2',
      youtubeRed: '#c4302b',
      instagramPurple: '#833AB4',
      spotifyGreen: '#1DB954',
      msmRed: '#EC5151',
      msmBlue: '#05E1EF',
      msmYellow: '#F7CA3D',
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}
