function swapStyleSheet(sheet){
	document.getElementById('stylepage').setAttribute('href', sheet);
}


      const body = document.querySelector('body');
      const darkmode = document.getElementById('darkmode');
      const container =document.getElementById('container');

      darkmode.onclick = function(){
      body.classList.toggle('active');
      darkmode.classList.toggle('active');
      container.classList.toggle('active');
} 
