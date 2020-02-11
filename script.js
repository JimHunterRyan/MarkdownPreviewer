window.onload = function() {

    


  var input = this.document.getElementById("editor")
        
    var output = this.document.getElementById("preview")
    
    
        
    

    input.addEventListener("onkeydown", func());
        
    function func(){
        var newString = input.innerHTML
        output.innerHTML = marked(newString);
    }
};
