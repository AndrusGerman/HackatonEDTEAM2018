<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <div class="text-xs-center">
        <logo/>
        <vuetify-logo/>
      </div>
      <v-card>
        <v-card-title class="headline">Bienvenido a Woman Safe</v-card-title>
        <v-card-text>
          <p>Tu pagina segura donde podras reportar tus inconveniente rapidamente.</p>
          <p>No te preocupes si es una emergencia grave,solo llena el formulario</p>
          <p>de Emergencia Creado especialmente para ser terminado en muy poco tiempo.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="pink accent-1"
            flat
            nuxt
            to="/app">Proyecto</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import axios from 'axios';

export default {
  components: {
    Logo,
    VuetifyLogo
  },

  created() {
  }
}
</script>
