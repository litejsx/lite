import { createElement, render } from "../../dist";
import styles from './styles.module.scss';
const state = 0;
const Test = (props) => {
  return createElement("div", null, "test");
};
const App = (() => {
  const msg = 'hello';
  const click = () => {
    console.log('clcik');
  };
  const helloHTML = createElement("div", null, "hello");
  const listHTML = createElement("div", null, [1, 2].map(value => createElement("div", null, value)));
  return createElement("div", {
    class: styles.test,
    onClick: click
  }, [state, createElement("div", {
    onClick: click,
    style: { color: 'yellow', background: 'blue' },
  }, [" ", msg]), createElement(Test), createElement(Test), createElement("input"), helloHTML, listHTML]);
});

render(App, document.getElementById('app'))