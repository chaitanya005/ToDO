var add = document.getElementById("add");
var removeAll = document.getElementById("removeall");
var list = document.getElementById("list");

//remove button

removeAll.onclick =  function(){
    list.innerHTML = ' '; //making blank
}

//add button

add.onclick = function(){
    addlis(list); 
    document.getElementById("userinput").value = " ";
    document.getElementById("userinput").focus();
}


function addlis(targetUl){
    
    var inputText = document.getElementById('userinput').value; //input given by user
    
    var li  = document.createElement('li'); // creating list to add listitems(nodes)
    
    // textnode as inputText is not a node and a list can only append NODES
    var textNode  = document.createTextNode(inputText + ' ');
    
    var removeButton = document.createElement('button');
    
    if( inputText !== ' '){
        removeButton.className = 'btn btn-xs btn-danger';
        removeButton.innerHTML = ' &times; ';
        removeButton.setAttribute('onclick','removeMe(this)');
        
        li.appendChild(textNode);
        li.appendChild(removeButton);
        targetUl.appendChild(li);
    }else{
        
        alert("please give a TODO ");
    }
    
    
}


function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}