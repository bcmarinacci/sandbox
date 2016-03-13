window.log = function log() {
  var output = document.getElementById('output');
  var result = '';
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    var argumentType = typeof arg;
    if (argumentType === 'function') {
      result += arg.toString();
    } else {
      result += JSON.stringify(arg);
    }

    if (i !== arguments.length - 1) {
      result += ' ';
    }
  }

  var p = document.createElement('p');
  p.setAttribute('class', 'log');
  p.innerHTML = '<span class="arrow">→ </span>' + result;
  output.appendChild(p);

  return arguments[0];
}
