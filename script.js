const img = document.getElementById('bgImg');
window.onload = function() {
    img.style.width = window.innerWidth + 'px';
    img.style.height = window.innerHeight + 'px';
}
window.onresize = function() {
    img.style.width = window.innerWidth + 'px';
    img.style.height = window.innerHeight + 'px';
}