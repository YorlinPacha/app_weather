import { mount } from "@vue/test-utils";
import ValoraApp from "@/components/ValoraApp.vue";



describe('Valora', () => {
    it('el componente existe', () => {
      const wrapper = mount(<ValoraApp />)
      expect(wrapper.exists()).toBe(true)
    });
//      it('tiene 2 elementos de etiqueta button', () => {
//          const pTags = wrapper.findAll('button');
//         expect(pTags).toHaveLength(2);
//  });
})