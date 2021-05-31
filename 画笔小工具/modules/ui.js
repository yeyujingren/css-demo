export let color = '#000';
const colorSetter = document.getElementById('color-select');
colorSetter.oninput = function (e) {
  color = e.target.value;
}

