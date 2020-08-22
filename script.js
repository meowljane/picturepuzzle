
function start(e) {
	e.dataTransfer.effecAllowed = 'move'; 
	e.dataTransfer.setData("Text", e.target.id); 
	e.target.style.opacity = '1'; 
}

function end(e){
	e.target.style.opacity = '';
	e.target.style.width='50px';			
	e.dataTransfer.clearData("Data");			
}


function enter(e) {
	return true;
}


function over(e) {
	if ((e.target.className == "cell") || (e.target.id == "startbox"))
		return false;
	else
	return true;
}
    

function drop(e){
	e.preventDefault(); 
	var elementoArrastrado = e.dataTransfer.getData("Text");
	e.target.appendChild(document.getElementById(elementoArrastrado)); 
	comprobarPuzzle();
}

function comprobarPuzzle(){
	if((document.getElementById('p1').parentNode.id=='c1') &&
		(document.getElementById('p2').parentNode.id=='c2') &&
		(document.getElementById('p3').parentNode.id=='c3') &&
		(document.getElementById('p4').parentNode.id=='c4'))
	{
		alert('You finished the puzzle.');
	}
}


function comprobarnavegador() {
	if( 
		(navigator.userAgent.toLowerCase().indexOf('msie ') > -1) || 
		((navigator.userAgent.toLowerCase().indexOf('safari') > -1) && (navigator.userAgent.toLowerCase().indexOf('chrome') == -1)))
	{
		alert("Tu navegador no soporta correctamente las funciones Drag & Drop de HTML5. Prueba con otro navegador.");
	}

}