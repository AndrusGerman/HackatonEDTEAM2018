<template>
        <v-card>
            <v-card class="elevation-12">
              <v-toolbar dark color="pink accent-1">
                <v-toolbar-title>Registrar Autoridad </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <br>
                  <v-text-field 
                    v-model="user.userName"
                    prepend-icon="person"
                    :label="'Nombre de Usuario'"
                    type="text"

 

                  ></v-text-field>




                  <v-text-field
                    v-model="user.password"
                    id="password"
                    prepend-icon="lock"
                    :label="'Contraseña'"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
     
                <v-spacer></v-spacer>
                <v-btn class="white--text" :disabled="loading" @click.stop="enviar" color="pink accent-2">Registrar</v-btn>
              </v-card-actions>
            </v-card>



        </v-card>
</template>

<script>
import axios from "axios"
import PrivacyPolicy from "~/components/PrivacyPolicy.vue";



export default {
  data: () => ({
    user:{
      userName:"",
      password: "",

    },
    dialog:false,
    loading: false


  }),
  components: {
    PrivacyPolicy,
  },
  computed: {

  },
  methods: {
    enviar() {
    let data = JSON.stringify(this.user)
    axios.post('http://127.0.0.1:3333/api/v1/users', data, {
        headers: {
            'Content-Type': 'application/json'
        }
      }).then(v=>{
        alert(v.data.message.message)
        this.$router.push("/app");
      }).catch(v=>{
        alert("Error de red");
      })
    }
  }
}
</script>
