
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'


const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    VTextField: {
      density: 'compact',
      variant: 'outlined'
    },
    VSelect: {
      density: 'compact',
      variant: 'outlined'
    },
    VAutocomplete: {
      density: 'compact',
      variant: 'outlined'
    },
    VBtn: {
      elevation:'2',
      minWidth: '120',
      rounded: 'lg'
    },
}
})

export default vuetify;
