import { mount } from "@vue/test-utils";
import ValoraApp from "@/components/ValoraApp.vue";



describe('Valora', () => {
    it('el componente existe', () => {
      const wrapper = mount(<ValoraApp />)
      expect(wrapper.exists()).toBe(true)
    });
    
})