if (!localStorage.hasOwnProperty('joinedD')) {
var c = confirm('Wan\'t to join the Discord?');
if (c) {
  localStorage.setItem('joinedD',true);
  var a = document.createElement('a');
  a.href='https://discord.gg/nqxbUr85JK';
  a.click();
}
}
