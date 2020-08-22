
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
(document.getElementById('p2	').parentNode.id=='c2') &&
(document.getElementById('p3	').parentNode.id=='c3') &&
(document.getElementById('p4	').parentNode.id=='c4') &&
(document.getElementById('p5	').parentNode.id=='c5') &&
(document.getElementById('p6	').parentNode.id=='c6') &&
(document.getElementById('p7	').parentNode.id=='c7') &&
(document.getElementById('p8	').parentNode.id=='c8') &&
(document.getElementById('p9	').parentNode.id=='c9') &&
(document.getElementById('p10	').parentNode.id=='c10') &&
(document.getElementById('p11	').parentNode.id=='c11') &&
(document.getElementById('p12	').parentNode.id=='c12') &&
(document.getElementById('p13	').parentNode.id=='c13') &&
(document.getElementById('p14	').parentNode.id=='c14') &&
(document.getElementById('p15	').parentNode.id=='c15') &&
(document.getElementById('p16	').parentNode.id=='c16') &&
(document.getElementById('p17	').parentNode.id=='c17') &&
(document.getElementById('p18	').parentNode.id=='c18') &&
(document.getElementById('p19	').parentNode.id=='c19') &&
(document.getElementById('p20	').parentNode.id=='c20') &&
(document.getElementById('p21	').parentNode.id=='c21') &&
(document.getElementById('p22	').parentNode.id=='c22') &&
(document.getElementById('p23	').parentNode.id=='c23') &&
(document.getElementById('p24	').parentNode.id=='c24') &&
(document.getElementById('p25	').parentNode.id=='c25') &&
(document.getElementById('p26	').parentNode.id=='c26') &&
(document.getElementById('p27	').parentNode.id=='c27') &&
(document.getElementById('p28	').parentNode.id=='c28') &&
(document.getElementById('p29	').parentNode.id=='c29') &&
(document.getElementById('p30	').parentNode.id=='c30') &&
(document.getElementById('p31	').parentNode.id=='c31') &&
(document.getElementById('p32	').parentNode.id=='c32') &&
(document.getElementById('p33	').parentNode.id=='c33') &&
(document.getElementById('p34	').parentNode.id=='c34') &&
(document.getElementById('p35	').parentNode.id=='c35') &&
(document.getElementById('p36	').parentNode.id=='c36') &&
(document.getElementById('p37	').parentNode.id=='c37') &&
(document.getElementById('p38	').parentNode.id=='c38') &&
(document.getElementById('p39	').parentNode.id=='c39') &&
(document.getElementById('p40	').parentNode.id=='c40') &&
(document.getElementById('p41	').parentNode.id=='c41') &&
(document.getElementById('p42	').parentNode.id=='c42') &&
(document.getElementById('p43	').parentNode.id=='c43') &&
(document.getElementById('p44	').parentNode.id=='c44') &&
(document.getElementById('p45	').parentNode.id=='c45') &&
(document.getElementById('p46	').parentNode.id=='c46') &&
(document.getElementById('p47	').parentNode.id=='c47') &&
(document.getElementById('p48	').parentNode.id=='c48') &&
(document.getElementById('p49	').parentNode.id=='c49') &&
(document.getElementById('p50	').parentNode.id=='c50') &&
(document.getElementById('p51	').parentNode.id=='c51') &&
(document.getElementById('p52	').parentNode.id=='c52') &&
(document.getElementById('p53	').parentNode.id=='c53') &&
(document.getElementById('p54	').parentNode.id=='c54') &&
(document.getElementById('p55	').parentNode.id=='c55') &&
(document.getElementById('p56	').parentNode.id=='c56') &&
(document.getElementById('p57	').parentNode.id=='c57') &&
(document.getElementById('p58	').parentNode.id=='c58') &&
(document.getElementById('p59	').parentNode.id=='c59') &&
(document.getElementById('p60	').parentNode.id=='c60') &&
(document.getElementById('p61	').parentNode.id=='c61') &&
(document.getElementById('p62	').parentNode.id=='c62') &&
(document.getElementById('p63	').parentNode.id=='c63') &&
(document.getElementById('p64').parentNode.id=='c64') )
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