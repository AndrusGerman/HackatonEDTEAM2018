<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      color="pink accent-1"
      class="white--text"
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />

      <v-btn
        icon
        disabled
      >
        <v-icon>location_searching</v-icon>
      </v-btn>
      

      <v-toolbar-title v-text="title"/>
      <v-spacer></v-spacer>
       <v-btn color="pink accent-2" v-if="$route.path == '/reports'" @click="$router.push('/reports/register')" >Registrar Autoridad</v-btn>
     
      <v-btn color="pink accent-2" v-if="$route.path != '/app/menu'" @click="$router.push('/app/register')" >Registrarse</v-btn>
      
      <v-btn color="pink accent-2" v-if="$route.path != '/app'" @click="$router.push('/app')" >Inicio</v-btn>
      

    </v-toolbar>
    <v-content class="back" > 
   

        <!-- <v-parallax height="100%"  src="http://www.notitarde.com/wp-content/uploads/2018/07/mujeres.jpeg">
         -->
        
     
<nuxt/>

        


    </v-content>

    <v-navigation-drawer
      :right="true"
      v-model="rightDrawer"
      temporary
      fixed
    >
      <v-list>




      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019W, EdHack </span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {

    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'home', title: 'Bienvenida', to: '/' },
          { icon: 'web', title: 'App: Cliente', to: '/app' },
          { icon: 'security', title: 'App: Seguridad', to: '/reports' },
        ],
        miniVariant: false,
        rightDrawer: false,
        title: 'EdHack App'
      }
    }
  }
</script>

<style>
.back {
  background-image: url(http://www.notitarde.com/wp-content/uploads/2018/07/mujeres.jpeg);
  background-size: cover;
}
#inspire {
  background: none;
}
</style>
