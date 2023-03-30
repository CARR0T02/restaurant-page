function testfunction() {
  console.log('export worked');
}

function createCustomElement(element, text, classes) {
  const node = document.createElement(element);
  node.textContent = text;
  if (classes !== undefined) {
    const classArr = _classes.split(' ');
    for (const _class of classArr) {
      node.classList.add(_class);
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
