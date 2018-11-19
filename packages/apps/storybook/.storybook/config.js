import { configure } from '@storybook/react'

// const req = require.context('../../../components', true, /\.stories\.jsx$/)

// function loadStories() {
//     req.keys().forEach(filename => req(filename))
// }

// function requireAll(requireContext) {
// return requireContext.keys().map(requireContext);
// }

// function loadStories() {
//     requireAll(require.context("../../../components", true, /\.stories\.jsx?$/));
// }

function loadStories() {
    require('../../../components/Barbaz/Barbaz.stories.jsx'),
    require('../../../components/Bazar/Bazar.stories.jsx')
}

configure(loadStories, module)
