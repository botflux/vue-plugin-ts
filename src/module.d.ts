
import Vue from 'vue'

declare module 'vue/types/vue' {
    export interface Vue {
        $hello: string;
    }
    export interface VueConstructor {
        $hello: string;
    }
}