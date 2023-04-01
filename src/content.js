function testfunction() {
  console.log('export worked');
}

function createCustomElement(elementObj) {
  const node = document.createElement(elementObj.getElement());
  node.textContent = elementObj.getText();
  let classes = elementObj.getClasses();
  if (!classes) {
    const classArr = elementObj.classes.split(' ');
    for (const _class of classArr) {
      node.classList.add(_class);
    }
  }
  if (!elementObj.getChildren()) {
    for (const child of elementObj.getChildren()) {
      const childElement = createCustomElement(child);
      node.appendChild(childElement);
    }
  }
  return node;
}

// Element and Text are strings, Classes is a string and Children is an array of ElementObj
const createElementObj = (element, text, classes, children = []) => {
  let _element = element;
  let _text = text;
  let _classes = classes;
  let _children = children;

  const getElement = () => {
    return _element;
  };

  const getText = () => {
    return _text;
  };

  const getClasses = () => {
    return _classes;
  };

  const getChildren = () => {
    return _children;
  };

  const addChild = (child) => {
    children.push(child);
  };

  return { addChild, getElement, getText, getClasses, getChildren };
};

// Takes in the Content Array and edits div.content to add all required elements.
function loadContent(contentArr) {
  const contentContainer = document.querySelector('#content');
  for (const elementObj of contentArr) {
    contentContainer.appendChild(createCustomElement(elementObj));
  }
}

const homeContent = (function () {})();

var menuContent = (function () {})();

var contactContent = (function () {})();

const testContent = {
  element: 'h1',
  text: 'something',
  _classes: 'flex flex-col',
  children: [],
};

const homeTestContent = [
  createElementObj('h1', 'something', 'flex flex-col'),
  createElementObj('div', '', 'flex flex-col'),
];
