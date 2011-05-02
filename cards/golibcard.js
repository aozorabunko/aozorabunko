function goLibCard(){
  location.href =
      location.href.replace(/\/files\//,'/card').replace(/_[0-9]+./,'.');
}

document.getElementById("card").style.display = "block";