// import { mount } from '@vue/test-utils'
// import ModelType from '@/views/ModelType.vue'
// 
// describe('Test Component: ModelType.vue', () => {
//   test('Vue component instance?', () => {
//     const wrapper = mount(ModelType)
//     expect(wrapper.isVueInstance()).toBeTruthy()
//   })
// })
// 


import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import vuetify from "vuetify"
import Vuex from 'vuex';
import Vue from 'vue';

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(vuetify)

describe('Home.vue', () => {
  let wrapper;
  let title = 'Precept-Health-Task'
  beforeEach(()=>{
    Vue.use(vuetify);
    wrapper = shallowMount(Home);
  })
  it('renders a vue instance', () => {
    expect(shallowMount(Home).isVueInstance()).toBe(true);
  });
})
