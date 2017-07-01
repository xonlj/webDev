var ulist = document.querySelector("ul");
var html = document.querySelector("html");
html.onclick = function(){
    var listitem = document.createElement("li");
    var itemcontent = prompt("please enter the new list item");
    listitem.textContent = itemcontent;
    ulist.appendChild(listitem);
    
    listitem.onclick = function(e) {
    e.stopPropagation();
    var listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }    
}
