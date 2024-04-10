import MyHeader from './Header.vue'

export default {
  title: 'Example/Header',
  component: MyHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: {
      MyHeader
    },
    setup() {
      return {
        ...args
      }
    },
    template: '<my-header :user="user" />'
  }),
  parameters: {
    layout: 'fullscreen'
  }
}

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}

export const LoggedOut = {
  args: {
    user: null
  }
}
