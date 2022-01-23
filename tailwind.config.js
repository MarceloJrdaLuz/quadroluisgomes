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
        'limpeza': "url('/images/limpeza.jpg')"
      }),
      brightness: {
        30: '.30',
      },
      height: {
        0.5: '0.10rem'
      }
    },
  },
  plugins: [],
}