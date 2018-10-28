<template>
      <v-layout row wrap>
        
        <v-flex xs12 sm12 md5 offset-md1>
          <br/>
            <main-login/>
        </v-flex>

        <v-flex xs12 sm12 md5 offset-md1>
          <br/>
          <v-card dark color="secondary">
            <info-login/>
          </v-card>
        </v-flex>

      </v-layout>
</template>

<script>

//import NaviMenu from '~/components/NavigationMenu.vue' <navi-menu/>
import MainLogin from '~/components/login/MainLogin.vue'
import InfoLogin from '~/components/login/InfoLogin.vue'

export default {
  components: {
    MainLogin,
    InfoLogin
  }
}
</script>
