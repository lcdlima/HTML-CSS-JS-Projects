function generoPersonalizado() {
  document.querySelector('.gen-personalizado').style.display = 'flex';
}
function generoDefinido() {
  document.querySelector('.gen-personalizado').style.display = 'none';
}
document.getElementById('genero-Personalizado').addEventListener('click', generoPersonalizado);
document.getElementById('genero-feminino').addEventListener('click', generoDefinido);
document.getElementById('genero-masculino').addEventListener('click', generoDefinido);
