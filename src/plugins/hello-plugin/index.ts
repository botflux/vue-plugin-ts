import _Vue from 'vue';

function HelloPlugin(Vue: typeof _Vue, options?: any): void {
    Vue.$hello = 'world';
    Vue.prototype.$hello = 'world prototype';
}

_Vue.use (HelloPlugin);

