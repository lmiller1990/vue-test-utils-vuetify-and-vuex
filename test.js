// Import the mount() method from the test utils
// and the component you want to test
import { createLocalVue,shallowMount } from '@vue/test-utils'
import SimpleComponent from './SimpleComponent'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

describe('SimpleComponent', () => {
    it('example test with vuetify first', () => {
        let localVue = createLocalVue()
        localVue.use(Vuetify)
        localVue.use(Vuex)

        const wrapper = shallowMount(SimpleComponent, {localVue})

        console.log("-- Vuetify first --")
        console.log(wrapper.html())
    })

    it('example test with vuetify second', () => {
        let localVue = createLocalVue()
        localVue.use(Vuex)
        localVue.use(Vuetify)

        const wrapper = shallowMount(SimpleComponent, {localVue})

        console.log("-- Vuetify second --")
        console.log(wrapper.html())
    })

    it('example test without vuetify', () => {
        let localVue = createLocalVue()

        const wrapper = shallowMount(SimpleComponent, {localVue})

        console.log("-- Without Vuetify --")
        console.log(wrapper.html())
    })
})
