<template>
  <v-layout row justify-center>
    <v-dialog v-model="active" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Formulario de emergencia</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                  
              </v-flex>


              <v-flex xs12 >
                <v-text-field
                  label="Calle direción"
                  hint="Esto ayudara a localizarle mas rapido"
                  persistent-hint
                  v-model="dire"
                  required
                ></v-text-field>
      
              </v-flex>
                <v-flex xs12 >
                <v-text-field
                  label="Descripcion"
                  v-model="descri"
                  hint="Opcional"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>



              <v-flex xs12 sm6>
                <v-autocomplete
                  :items="['Acoso', 'Maltrato', 'Otros', 'Conocido']"
                  label="El Caso es de"
                  v-model="acodo"
                  multiple
                ></v-autocomplete>

              </v-flex>
              <v-flex xs12 sm6>
                <v-autocomplete
                  :items="['Primera Vez','Constante']"
                  label="Se presenta Por"
                  v-model="cuantas"
                  hint="Opcional"
                ></v-autocomplete>
              </v-flex>

              <!--
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
        -->
              <!--
              <v-flex xs12 sm6>
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-flex>
              -->
            </v-layout>
          </v-container>
          <small></small>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1"  @click.native="$emit('cerrar',false)">Cerrar</v-btn>
          <v-spacer></v-spacer>
           <v-btn :disabled="notifico" slot="activator" color="primary" @click.native="enviar(true)" dark>NOTIFICAR RAPTO</v-btn>
          <v-btn :disabled="notifico" color="error"  @click.native="enviar(false)">NOTIFICAR</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>


<script>
import axios from "axios";
  export default {
    props:{
        active:{
        }
    },
    data: () => ({
      dialog: true,
      manual:false,
      notifico:false,
      dire:'',
      descri:'',
      acodo:[],
      cuantas:[],
      usuario:{
          latitude:0,
          longitude:0,
          description:''
      }
    }),
  watch: {
    // whenever question changes, this function will run
    active: function (newQuestion, oldQuestion) {
      if (newQuestion == true) {
        navigator.geolocation.watchPosition(this.guardar_posicion);
      }
    }
  },
  created(){
    navigator.geolocation.watchPosition(this.guardar_posicion);
  },
    methods:{
        enviar(secuestro) {
          if (this.dire == ''){
            alert("Por Favor especifique la calle en la que se encuentra\nHo algun dato relacionado");
            return;
          }
          if (secuestro){
            this.usuario.description = "~Secuestro~"
          }
          this.usuario.description += `Lugar: ${this.dire},Detalle: ${this.descri}, Tipo ${JSON.stringify(this.acodo)} , De: ${JSON.stringify(this.cuantas)}`
          

          let data = JSON.stringify(this.usuario)
          axios.post('http://127.0.0.1:3333/api/v1/complaints/urgent', data, {
              headers: {
                  'Content-Type': 'application/json'
              }
            }).then(v=>{
              alert(v.data.message.message)
            }).catch(v=>{
              alert("Error de red");
            })
          this.$emit('cerrar',true);
        },
        guardar_posicion(dato){
            this.usuario.latitude= dato.coords.latitude
            this.usuario.longitude=dato.coords.longitude
            this.notifico = true;
            this.$emit('cerrar',false);
       }
    }
  }
</script>
