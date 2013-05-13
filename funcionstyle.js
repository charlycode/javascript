function getStyle(elemento, propiedadCss) {
  var valor = "";
  if(document.defaultView && document.defaultView.getComputedStyle){
    valor = document.defaultView.getComputedStyle(elemento, '').getPropertyValue(propiedadCss);
  }
  else if(elemento.currentStyle) {
    propiedadCss = propiedadCss.replace(/\-(\w)/g, function (strMatch, p1) {
      return p1.toUpperCase();
    });
    valor = elemento.currentStyle[propiedadCss];
  }
  return valor;
}



// Código HTML
<p id="parrafo">...</p>
 
// Regla CSS
#parrafo { color: #008000; }
 
// Código JavaScript para cualquier navegador
var parrafo = document.getElementById("parrafo");
var color = getStyle(parrafo, 'color');