module.exports = {
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  stories: ['../src/storybook/*.stories.@(jsx|tsx)'],
};
