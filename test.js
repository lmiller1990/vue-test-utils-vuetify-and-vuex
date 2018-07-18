// Import the mount() method from the test utils
// and the component you want to test
import { createLocalVue,shallowMount } from '@vue/test-utils'
import SimpleComponent from './SimpleComponent'
import Vuetify from 'vuetify'

const myPlugin = {
  install: function(Vue, opts) {
    Vue.mixin({
      // this causes the problem
    })
  }
}

describe('SimpleComponent', () => {
  it('example test with vuetify first', () => {
    let localVue = createLocalVue()
    localVue.use(Vuetify)
    localVue.use(myPlugin)

    const wrapper = shallowMount(SimpleComponent, {localVue})

    console.log("-- Vuetify first --")
    console.log(wrapper.html())
  })

  it('example test with vuetify second', () => {
    let localVue = createLocalVue()
    localVue.use(myPlugin)
    localVue.use(Vuetify)

    const wrapper = shallowMount(SimpleComponent, {localVue})

    console.log("-- Vuetify second --")
    console.log(wrapper.html())
  })
})
