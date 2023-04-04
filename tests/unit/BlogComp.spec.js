import { mount } from "@vue/test-utils";
import BlogComp from "@/components/BlogComp.vue";



describe('Blog', () => {
    it('el componente existe', () => {
      const wrapper = mount(BlogComp)
      expect(wrapper.exists()).toBe(true)
    });
    it('tiene cuatro elementos de etiqueta img', () => {
        const pTags = wrapper.findAll('img');
        expect(pTags).toHaveLength(4);
});
})