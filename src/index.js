import SkySwiper from './SkySwiper.vue';

const defaults = {
	registerComponents: true,
};

export default {
	install(Vue, options) {
		const { registerComponents } = Object.assign({}, defaults, options);

		if (registerComponents) {
			Vue.component(SkySwiper.name, SkySwiper);
		}
	},
};
