<template>

<div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout  justify-center>
          <v-flex xs12 sm8>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>INICIAR USUARIO</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <v-btn
                    icon
                    large
                    target="_blank"
                    slot="activator"
                  >
                    <v-icon large>code</v-icon>
                  </v-btn>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person"  label="Login" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" label="Password"  type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn :disabled="emergencia_button_disabled" @click.native="extreme = true" color="error">NOTIFICAR EMERGENCIA</v-btn>
                <form-extreme v-on:cerrar="cerrar" :active="extreme" />
                <v-spacer></v-spacer>
                <v-btn @click.native="iniciar" color="success">INICIAR</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
  <privacy-policy/>
</div>    
</template>

<script>
import PrivacyPolicy from "~/components/PrivacyPolicy.vue";
import FormExtreme from "~/components/formularios/extrema.vue";

export default {
  components: {
    PrivacyPolicy,
    FormExtreme
  },
  data() {
      return {
        extreme:false,
        emergencia_button_disabled:false
      }
  },
  created() {
  },
  methods:{
    iniciar() {
      alert('Iniciando')
    },
    cerrar() {
      this.extreme = false;
      this.emergencia_button_disabled = true;
    }
  }
}
</script>
