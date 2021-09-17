import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'
import LoginPage from '@/views/LoginPage'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })

  it('should render correct contents', () => {
    const Constructor = Vue.extend(LoginPage)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent).toEqual('TaskAgile')
  })
})
