import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'bg-base': 'bg-white dark:bg-black',
  },

  theme: {
    colors: {
      primary: {
        DEFAULT: '#049',
      },
    },
  },

  presets: [
    presetUno(),

    presetIcons({
      scale: 2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],

  transformers: [
    transformerVariantGroup(),
  ],
})
