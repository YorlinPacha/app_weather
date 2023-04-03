
import DiarioPrincipalDeporte from '@/components/DiarioPrincipalDeporte.vue'
import {mount} from "@vue/test-utils"
let wrapper;
describe('DiarioPrincipalDeporte', () => {
    it('renderizaElComponente', () => {
      const wrapper = mount(<DiarioPrincipalDeporte />)
      expect(wrapper.exists()).toBeTruthy()
    })
  })


