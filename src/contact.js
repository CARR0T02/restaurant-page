import { createElementObj } from './content';

export const contactContent = [
  createElementObj('div', '', 'main flex flex-col justify-center', [
    createElementObj('h1', "Gabe's Italian", 'logo'),
    createElementObj('div', '', 'contact', [
      createElementObj('h3', 'Contact Us'),
      createElementObj('p', 'Phone Number: +39 06 85 42 71 23'),
      createElementObj('p', 'Email: gabeitalian32@gmail.com'),
      createElementObj(
        'p',
        "Location: Via Consolare Antica, 722, 98071 Capo d'Orlando ME, Italy"
      ),
    ]),
  ]),
];
