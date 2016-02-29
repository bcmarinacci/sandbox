window.log = function log() {
  var output = document.getElementById('output');
  var result = '';
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    var argumentType = typeof arg;
    if (argumentType === 'function') {
      result += arg.toString();
    } else {
      result += JSON.stringify(arg);
    }

    if (i !== args.length - 1) {
      result += ', ';
    }
  }

  var p = document.createElement('p');
  p.setAttribute('class', 'log');
  p.innerHTML = '<span class="arrow">→ </span>' + result;
  output.appendChild(p);
}
