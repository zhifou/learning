import { configure } from '@storybook/react';

function loadStories() {
  require('./stories/userStory/index.story');
}

configure(loadStories, module);