import * as content from './content';

export const homeContent = [
  content.createElementObj('div', '', 'flex flex-col', [
    content.createElementObj('h1', "Gabe's Italian"),
    content.createElementObj(
      'h2',
      'Nothing brings people together like good food.'
    ),
    content.createElementObj('button', 'Menu'),
  ]),
];
