
var acc = document.getElementsByClassName("acordion1");
var i;
for(i = 0;i<acc.length;i++){
	acc[i].addEventListener("click",function(){
		this.classList.toggle("active");
		var pannel = this.nextElementSibling;
		if(pannel.style.maxHeight){
			pannel.style.maxHeight = null;
		}
		else{
			pannel.style.maxHeight = pannel.scrollHeight + "px";
		}
	});
}
var oppen = document.getElementsByClassName("toggle");
 	oppen[0].addEventListener("click",function(){
 		var side = document.getElementsByClassName("side-bar");
 		side[0].style.width = "300px";
 		side[0].style.visibility= "visible";
 		var content = document.getElementsByClassName("side-content");
 		var i;
 		for(i = 0;i<content.length;i++){
 			content[i].style.visibility="visible";
 		}
 		
 	});
 var close = document.getElementsByClassName("btn-close");
 	console.log(close.length);
 	close[0].addEventListener("click",function(){ 
 		var content = document.getElementsByClassName("side-content");
 		var i;
 		for(i = 0;i<content.length;i++){
 			content[i].style.visibility="hidden";
 		}
 		var side = document.getElementsByClassName("side-bar");
 		side[0].style.width = "0px";
 		side[0].style.visibility = "hiden";
 	});