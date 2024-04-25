window.onload = function() {
    var img = document.getElementById('bgImg');
    window.onresize = function() {
        img.style.width = window.innerWidth + 'px';
        img.style.height = window.innerHeight + 'px';
    }
    img.style.width = window.innerWidth + 'px';
    img.style.height = window.innerHeight + 'px';
}