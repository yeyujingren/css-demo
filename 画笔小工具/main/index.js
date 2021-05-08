window.onload = function () {
   const painting = document.getElementById('painting');
   // 如果不支持，则给出提示，并返回
   if (!painting.getContext) {
     window.alert('您的浏览器暂时不支持canvas呦，请升级浏览器版本，或者更换其他浏览器🐶');
     return;
   }
   painting.width = document.documentElement.clientWidth;
   painting.height = document.documentElement.clientHeight;
}