<template>
        <v-card>
            <v-card class="elevation-12">
              <v-toolbar dark color="pink accent-1">
                <v-toolbar-title>Iniciar Usuario </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <br>
                  <v-text-field 
                    v-model="user.userName"
                    prepend-icon="person"
                    :label="'Usuario'"
                    type="text"


                  ></v-text-field>
                  <v-text-field
                    v-model="user.password"
                    id="password"
                    prepend-icon="lock"
                    :label="'Contraseña'"
                    type="password"
                  ></v-text-field>
                  <br><br>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn class="white--text" :disabled="emergencia_button_disabled" @click.native="extreme = true" color="pink accent-3">NOTIFICAR EMERGENCIA</v-btn>
                <form-extreme v-on:cerrar="cerrar" :active="extreme" />

                <v-spacer></v-spacer>
                <v-btn class="white--text" :disabled="loading" @click.stop="enviar" color="pink accent-2">INICIAR</v-btn>
              </v-card-actions>
            </v-card>


<v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">No te preocupes</v-card-title>
        <v-card-text>Manten la calma y no te exalte, Dentro de poco llegara la ayuda. Ahora Cierra la aplación</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click.native="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>



      <v-snackbar
      v-model="snackbar"
      :timeout="6000"
      :top="true"
    >
      {{ text }}
    </v-snackbar>




        </v-card>
</template>

<script>
import axios from "axios"
import PrivacyPolicy from "~/components/PrivacyPolicy.vue";
import FormExtreme from "~/components/formularios/extrema.vue";



export default {
  data: () => ({
    user:{
      userName:"",
      password: ""
    },
    snackbar:false,
    text:'',
    dialog:false,
    loading: false,
    extreme:false,
    emergencia_button_disabled:false


  }),
  components: {
    PrivacyPolicy,
    FormExtreme
  },
  computed: {

  },
  methods: {
    async enviar() {
      this.loading=true;
      let data = JSON.stringify(this.user);
      axios.post('http://127.0.0.1:3333/api/v1/login', data, {
        headers: {
            'Content-Type': 'application/json'
        }
      }).then(v=>{

        this.loading=false;
        if (v.data.type == "Denunciante") {
          this.$store.state.token=v.data.token.token;
          this.$store.state.user.userName = v.data.userName;
          this.$router.push('/app/menu');
          return;
        } else if(v.data.type == "Autoridad") {
          this.$store.state.token=v.data.token.token;
          this.$store.state.user.userName = v.data.userName;
          this.$router.push('/reports');
          return;
        }
        this.text= v.data.message.message;
        this.snackbar=true;

      }).catch(v=>{
        this.loading=false;
      });


      // this.loading=true;
      // this.$router.push('/app/menu')
    },
      cerrar(envia) {
        if (envia) {
          this.emergencia_button_disabled = true;
          this.dialog= true;
        } else {
          this.emergencia_button_disabled = false;
        }
      this.extreme = false;
    }
  }
}
</script>
