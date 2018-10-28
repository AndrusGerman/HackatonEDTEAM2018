<template>
  <v-layout row justify-center>
    <v-dialog v-model="$store.state.formularios.simple" persistent max-width="600px">
      <v-card color="pink lighten-5">
        <v-card-title>
          <span class="headline">Reporte Basico</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs12 sm6>
                <v-select
                  :items="['Yo','Alguien Mas']"
                  v-model="victima"
                  label="Victima"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="victima_name"  :disabled="victima == 'Yo'"  label="Nombre Victima/s*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="description" label="Descripción*" ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="reporte.direction" label="Lugar Direción*" ></v-text-field>
              </v-flex>              

              <v-flex xs12>
                <v-autocomplete
                  :items="['Maltrato','Acoso','Seguimiento','Algo Mas']"
                  label="El Atacante presento ..."
                  v-model="presento"
                  multiple
                ></v-autocomplete>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="red lighten-4" @click.native="$store.state.formularios.simple = false">Cerrar</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="purple lighten-4"  @click.native="enviar(false)">Envio Rapido</v-btn>
          <v-btn color="purple lighten-4"  @click.native="enviar(true)">Envio Localizado</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


<v-snackbar
      v-model="snackbar"
      :timeout="1000000"
      :top="true"
    >
      {{ text }}
    </v-snackbar>


  </v-layout>
</template>

<script>
  import axios from "axios";
  export default {
    created(){
      this.victima_name=this.$store.state.user.userName;
    },
    data: () => ({
      snackbar:false,
      text:'',
      victima:'Yo',
      victima_name:'',
      description:'',
      presento: [],
      reporte:{
        description:'',
        direction:'',
        latitude:0,
        longitude:0,
      }
    }),
    methods:{
      enviar(v) {
        if(this.reporte.direction =="") {
          alert("Agregue la direción");
          return;
        }
        this.reporte.description = `Des: ${this.description}, Presento: ${JSON.stringify(this.presento)}, Victima: ${this.victima_name}`;
        var send = (pos)=>{
          this.reporte.latitude= pos.coords.latitude;
          this.reporte.longitude = pos.coords.longitude;
          this.enviar_post();
        }

        var sendNotPos= ()=> {
          this.enviar_post()
        }
        if(v == false) {
          sendNotPos();
          return;
        }

        if (navigator.geolocation) {
          this.text= "Te estamos localizando....";
          this.snackbar=true;
          navigator.geolocation.watchPosition(send,sendNotPos);
          return;
        }else{
          if (this.reporte.direction){
          this.text= "Enviando....";
          this.snackbar=true;            
            sendNotPos();
            return;
          }else{
            alert("Especificar direción");
            return;
          }
        }
        
      },
      enviar_post() {
          let data = JSON.stringify(this.reporte);
          this.snackbar=false;
          axios.post('http://127.0.0.1:3333/api/v1/complaints', data, {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'bearer ' +this.$store.state.token
              }
            }).then(v=>{
              alert(v.data.message.message);
              this.$store.state.formularios.simple = false;
            }).catch(v=>{
              alert("Error de red");
              this.$store.state.formularios.simple = false;
            })
        
      }
    }
  }
</script>