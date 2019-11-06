import _Vue from 'vue'

declare module 'vue/types/vue' {
  
  interface Vue {
    $hello: string;
  }
  interface VueConstructor {
      $hello: string;
  }
}

declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}
