function customRender(reactElement, mainContainer) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHtml = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);

  domElement.setAttribute("href", reactElement.props.target);
  container.appendild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: "_blank",
  },

  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
