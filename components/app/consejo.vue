<template>
  <v-layout row justify-center>
    <v-dialog v-model="$store.state.app.consejo" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="pink accent-1">
          <v-btn icon dark @click.native="$store.state.app.consejo = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Consejo</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <!-- <v-btn dark flat @click.native="dialog = false">Save</v-btn> -->
          </v-toolbar-items>
        </v-toolbar>

        <v-list three-line subheader>
          <v-subheader>¿Que es el maltrato de Genero?</v-subheader>
  <v-card-text>
    <p>  Podríamos  definir  al  maltrato  doméstico  como  los  actos  y  las  carencias  que  turban  gravemente  a  las  personas,  atentan  contra  su  integridad corporal,  su  desarrollo  físico,  afectivo,  intelectual  o  moral;  y  cuyas  manifestaciones  son  el  descuido  y/o  lesiones  de  orden  físico  y/o  psíquico  por parte de un familiar o personas que con ellas convivan.</p>

  </v-card-text>
            
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>¿CÓMO DEBES ACTUAR ?</v-subheader>
          <v-card-text>
            <p> Lo  primero  es  acudir  a  tu  centro  de  salud  u  hospital  más  cercano  para  que  te  hagan  un  reconocimiento  médico  completo.  Si  no  puedes acudir  por  tu  propio  píe,  llama  al  Teéfono  de  Emergencias  112  para  que  acudan  a  donde  estés.  Si  has  sufrido  una  agresión  sexual,  coméntalo  y pide  una  revisión  específica.  Al  personal  sanitario  deberás  relatarle  de  la  forma  más  completa  posible  todas  las  agresiones  de  las  que  has  sido víctima,  así  como  tu  estado  físico  y  emocional.  No  olvides  que  las  lesiones  pueden  ser  tanto  físicas  como  psicológicas.  Es  muy  importante  que pidas el parte de lesiones</p>
          </v-card-text>
        </v-list>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false
      }
    }
  }
</script>