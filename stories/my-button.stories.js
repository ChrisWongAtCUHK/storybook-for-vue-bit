import Vue from 'vue'

Vue.component('my-button', {
	data() {
		return {
			count: 0
		}
	},
	template: '<span><slot></slot><button v-on:click="count++">You clicked me {{ count }} times.</button></span>'
})

export default { title: 'Button' }

export const withText = () => '<my-button>with text</my-button>'

export const withEmoji = () => '<my-button>😀 😎 👍 💯</my-button>'
