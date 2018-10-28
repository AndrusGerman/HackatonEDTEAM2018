<template>
  <div
    id="e3"
    class="grey lighten-3"
  >
    <v-card color="pink accent-2">
        <br>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
  



         <v-flex xs4>
            <v-card color="cyan darken-2" class="white--text">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Consejos</div>
                      <div>¿Como debes actuar?</div>
                      <div>¿DÓNDE ACUDIR ANTE UN CASO DE MALOS TRATOS?</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                    src="https://www.socialblabla.com/wp-content/uploads/2017/02/consejos.png"
                    height="165px"
                    contain
                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-btn @click.native="$store.state.app.consejo=true" flat color="white">Explorar</v-btn>
            </v-card>
          </v-flex>





          <v-flex xs4>
            <v-card color="purple" class="white--text">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Reportar Un caso</div>
                      <div>En caso de abuso contra usted</div>
                      <div>o alguien mas notificar</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                    src="http://soshomeprotect.co.uk/wp-content/uploads/2017/01/SOS-Logo1-Transparent-BG.png"
                    height="165px"
                    contain
                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-btn @click.native="$store.state.formularios.simple=true" flat color="white">NOTIFICAR CASO</v-btn>
            </v-card>
          </v-flex>



    <v-flex xs4>
            <v-card color="blue" class="white--text">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Example</div>
                      <div>Nada :(</div>
                      <div></div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                    height="165px"
                    contain
                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-btn flat color="white">Explorar</v-btn>
            </v-card>
          </v-flex>



        </v-layout>
      </v-container>
      <br>
      <br>
      <br>
      <br>
      <br>
      <form-simple/>
      <form-consejo/>
    </v-card>
  </div>
</template>

<script>
import FormSimple from '~/components/formularios/reporte.vue'
import FormConsejo from '~/components/app/consejo.vue'
  export default {
    props:{
 
    },
    components:{
        FormSimple,
        FormConsejo
    },
    data: () => ({

    }),
  watch: {

  },
    methods:{
        enviar() {
          if (this.usuario.direcion== '') {
            alert('Es importante, tener por lo menos una direción');
            return;
          }
            this.$emit('cerrar',true);
        },
        guardar_posicion(dato){
            if (this.notifico) {
                return
            }
            this.usuario.latitud= dato.coords.latitude
            this.usuario.longitud=dato.coords.longitude
            this.notifico = true;
       }
    }
  }
</script>