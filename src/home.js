import { createElementObj } from './content';

export const homeContent = [
  createElementObj('div', '', 'main flex flex-col justify-center', [
    createElementObj('h1', "Gabe's Italian", 'logo'),
    createElementObj('h3', 'Nothing brings people together like good food.'),
    createElementObj('button', 'Menu'),
  ]),
];
