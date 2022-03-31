module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home': "url('/images/fotosalao.png')",
        'designacoes': "url('/images/designacoes.png')",
        'cartas': "url('/images/cartas.jpg')",
        'contas': "url('/images/contas.jpg')",
        'limpeza': "url('/images/limpeza.jpg')",
        'campo': "url('/images/campo.png')"
      }),
      brightness: {
        30: '.30',
      },
      height: {
        0.5: '0.10rem'
      },
      colors:{
        cyan:{
          950: '#093e49'
        },
        teste:{
          100: '#006d77',
          200: '#83c5be',
          300: '#edf6f9',
        }
      }
    },
  },
  plugins: [],
}