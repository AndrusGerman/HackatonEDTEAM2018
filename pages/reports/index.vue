<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Reportes ...</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="desserts"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.stateRef.name }}</td>
        <td>{{ props.item.description }}</td>
        <td>{{ props.item.direction }}</td>
        <td>Lati:{{ props.item.latitude }}<br> Long: {{ props.item.longitude }}</td>
        <td class="justify-center layout px-0">


          <v-tooltip v-model="show" top>
          <v-btn  @click="atender(props.item)" slot="activator" icon>
            <v-icon color="grey lighten-1">warning</v-icon>
          </v-btn>
          <span>Atender..</span>
        </v-tooltip>

          

          <v-tooltip v-model="show" top>
          <v-btn  @click="atender(props.item)" slot="activator" icon>
            <v-icon color="grey lighten-1">cloud_done</v-icon>
          </v-btn>
          <span>Culminar..</span>
        </v-tooltip>



        </td>
      </template>
      <template slot="no-data">
          
      </template>
    </v-data-table>





  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data: () => ({
      dialog: false,
      edit:false,
      headers: [
        {  text: 'Estado',value:"stateComplaint"},
        { text: 'Descripción', value: 'description' },
        { text: 'Direción', value: 'direction' },
        { text: 'Localization', value: '' },
        {text:'Opciones',value:''}
      ],
      description: [],
      desserts:[],
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
    },

    created () {
      this.initialize();
    },

    methods: {
      initialize () {
        axios.get('http://127.0.0.1:3333/api/v1/complaints',{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' +this.$store.state.token
        }
      }).then(v=>{
          this.desserts=v.data.items;
        })
      },
      deleteItem (item) {
      },

      close () {
      },

      save () {
  
      },
      atender(item){
          this.edit=true;
          this.defaultItem=item;
      }
    }
  }
</script>