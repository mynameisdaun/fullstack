import Vue from 'vue/dist/vue.js'
import LoginPage from "@/views/LoginPage.vue";

describe('LoginPage.vue',() => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(LoginPage)

    const vm = new Constructor().$mount();

    expect(vm.$el.querySelector('h1').textContent).toEqual('TaskAgile')
  });
})