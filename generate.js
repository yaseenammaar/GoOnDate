<script>
var canvas = document.createElement("canvas");

canvas.width = 512;
canvas.height = 512;

var url = canvas.toDataURL();

var a = document.createElement('a');
a.download = 'my.png';
a.href = url;
a.textContent = 'Download PNG';



document.body.appendChild(a);


</script>