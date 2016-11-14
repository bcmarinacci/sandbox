'use strict';

window.log = (...args) => {
  const output = document.getElementById('output');
  const result = (
    args
      .map((arg) => {
        if (arg instanceof Function) {
          return arg.toString();
        }

        return JSON.stringify(arg);
      })
      .join(' ')
  );

  const p = document.createElement('p');
  p.setAttribute('class', 'log');
  p.innerHTML = '<span class="arrow">→ </span>' + result;
  output.appendChild(p);

  return args[0];
};
