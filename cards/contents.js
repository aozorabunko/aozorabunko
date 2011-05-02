function add_blank_node(node){
    var div = document.createElement("div");
    div.className = "contents_invisible";
    
    var button = document.createElement("span");
    button.onclick = new Function ("toggle(this)");
    button.appendChild(document.createTextNode("+"));
    
    node.appendChild(div);
    div.appendChild(button);
    return div;
}

function initialize(){
    var flag = true;
    var root_level = 2;
    var root = $("#contents").get()[0]; //document.getElementById("contents");
    var heads = $(".midashi_anchor").get(); //document.getElementsByClassName("midashi_anchor");
    for (var i = 0, len = heads.length; i < len; i++) {
	var node = heads[i];
	var heading = node.parentNode;
	if(heading){
	    if(flag){
		flag = false;
		root.style.display = 'block';
		var button = document.createElement("span");
		button.onclick = new Function ("toggle(this)");
		button.appendChild(document.createTextNode("+"));
		root.appendChild(button);
		root.appendChild(document.createTextNode("–ÚŽŸ"));
	    }
	    var level = parseInt(heading.tagName.slice(1,2));
	    
	    if (root_level >= level)
		    while (root_level >= level){
			root = root.parentNode;
			root_level--;
		    }
	    if ((root_level + 1) < level)
		while ((root_level + 1) < level){
		    root = add_blank_node(root);
		    root_level++;
		}
	    var div = add_blank_node(root);
	    var link = document.createElement("a");
	    link.setAttribute("href","#" + node.id);
	    var copying = node.firstChild;
	    link.appendChild(copying.cloneNode(true));
	    while (copying.nextSibling){
		copying = copying.nextSibling;
		link.appendChild(copying.cloneNode(true));
	    }	    
	    div.appendChild(link);
	    root = div;
	    root_level = level;
	}
    }
}

function toggle(element){
  if (element.firstChild.nodeValue == "+"){
   element.firstChild.nodeValue = "-"
  }else{
   element.firstChild.nodeValue = "+"
  }
  var childs = element.parentNode.childNodes;
  for (var i = 1, len = childs.length; i < len; i++) {
    var node = childs[i]
    if (node.className){
      if (node.className == "contents_invisible"){
	  node.className = "contents_visible";
	  var c = node.childNodes[1];
	  if (c.tagName == "A"){
	      false;
	  }else{
	      toggle(node.childNodes[0]);
	  }
      }else if(node.className == "contents_visible"){
	  node.className = "contents_invisible";
	  var c = node.childNodes[1];
	  if (c.tagName == "A"){
	      false;
	  }else{
	      toggle(node.childNodes[0]);
	  }
      }
    }
  }
}

initialize()