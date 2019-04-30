import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'

import HelloWorld from '@/components/HelloWorld.vue'
import Carousel from '@/components/Carousel.vue'
import ProductDisplay from '@/components/ProductDisplay.vue'

describe('ProductDisplay.vue', () => {

    let wrapper
    const assert = require('chai').assert
    beforeEach(function () {
      wrapper = shallowMount(ProductDisplay)
  })

  it('checks if all buttons have a Shoe Image to show', () => {
    wrapper.find("#afOne").trigger('click')
    assert.notEqual(wrapper.vm.img,'default','There is an active button without image to show')
    wrapper.find("#jordan1").trigger('click')
    assert.notEqual(wrapper.vm.img,'default','There is an active button without image to show')
    wrapper.find("#airmax").trigger('click')
    assert.notEqual(wrapper.vm.img,'default','There is an active button without image to show')
    wrapper.find("#running").trigger('click')
    assert.notEqual(wrapper.vm.img,'default','There is an active button without image to show')
  })

  it('check if the shoe image changes when button clicked', () => {
    wrapper.find("#afOne").trigger('click')
    assert.equal(wrapper.vm.img, 'AF1', 'The image did not change the expected way')
    wrapper.find("#jordan1").trigger('click')
    assert.equal(wrapper.vm.img, 'Jordan1', 'The image did not change the expected way')
  })

  it('check if the info displayed is the correct one', () => {
    wrapper.find("#afOne").trigger('click')
    wrapper.find("#Inspect").trigger('click')
    assert.equal(wrapper.vm.about, 'The Air Force 1 was produced in 1982 and discontinued in 1984. It was re-released in 1986 with the modern italic Nike logo with a Swoosh on the bottom on the back of the shoe.', 'The info displayed is not Correct')
  })

  it('check if the info label resets after another shoe is selected', ()=> {
    wrapper.find("#afOne").trigger('click')
    wrapper.find("#Inspect").trigger('click')
    wrapper.find("#jordan1").trigger('click')
    assert.isEmpty(wrapper.vm.about, "The Info label has not been cleared correclty")
  })

  it('check if all shoe options have descriptions', ()=> {
    wrapper.find("#afOne").trigger('click')
    wrapper.find("#Inspect").trigger('click')
    assert.isNotEmpty(wrapper.vm.about,'There is an empty description')
    wrapper.find("#jordan1").trigger('click')
    wrapper.find("#Inspect").trigger('click')
    assert.isNotEmpty(wrapper.vm.about,'There is an empty description')
    wrapper.find("#airmax").trigger('click')
    wrapper.find("#Inspect").trigger('click')
    assert.isNotEmpty(wrapper.vm.about,'There is an empty description')
    wrapper.find("#running").trigger('click')
    wrapper.find("#Inspect").trigger('click')
    assert.isNotEmpty(wrapper.vm.about,'There is an empty description')
  })
  

})

