export default {
  ssr : true,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['./main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/tailwindcss', 'nuxt-webfontloader'],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-i18n'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  webfontloader: {
    google: {
      families: [
        'Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'
      ]
    }
  },
  server: {
    host: '0.0.0.0',
    port: 9510,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
          title: 'Rock Paper Scissors',
          subtitle: 'With Neural Networks',

          gameStart: 'Start Game',
          youWin: 'You Win',
          youLose: 'You Lose',
          draw: 'Draw',

          score: 'Score',
          human: 'Human',
          ai: 'AI',
          rock: 'Rock',
          paper: 'Paper',
          scissors: 'Scissors',
          reset: 'Reset',
          gameCount: 'Game count',

          what: 'What is this?',
          thisIs:
            'This is a paper scissors rock game created using artificial intelligence.',
          thisGame:
            "This game can read the players' patterns to determine the next steps for 'AI' will take in order to win.",
          builtWith: 'Built with Nuxt JS & Tailwind CSS framework.',
          how: "How to Play?",
          step1: "Begin the game by selecting one of the following options: 'rock', 'scissors', or 'paper'.",
          step2: "Continue choosing one of these options to establish a repeating sequence.",
          step3: "Examples of Sequences:",
          pattern1: "Continuous rock: rock, rock, rock, etc.",
          pattern2: "Alternating rock and scissors: rock, scissors, rock, scissors, etc.",
          pattern3: "Cyclic sequence of all three: rock, scissors, paper, rock, scissors, paper, etc.",
          pattern4: "Continuous paper: paper, paper, paper, etc.",
          step4: "Notice the pattern of your choices and anticipate the outcome."
          }
      }
    }
  }
}
