import "./style.css";

export const component = (type, text) => {
  var element = document.createElement(type);
  element.innerHTML = text;
  element.className = "hello";

  return element;
};
