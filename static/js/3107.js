$(document).ready(function () {
  var myData = [{
    "fileSizeBytes": 5476798,
    "url": "https://random.dog/580ce3c8-a8bf-48a8-92cc-68d1955c7dc8.jpg"
}];

  function CreateTableFromJSON() {
    var col = [];
  
    for (var i = 0; i < myData.length; i++) {
      for (var key in myData[i]) {
        if (col.indexOf(key) === -1) {
          col.push(key);
        }
      }
    }
  
    var table = document.createElement("table");
    table.setAttribute("border", "1");
    var tr = table.insertRow(-1);
  
    for (var i = 0; i < col.length; i++) {
      var th = document.createElement("th");      
      th.innerHTML = col[i];
      tr.appendChild(th);
    }

    for (var i = 0; i < myData.length; i++) {
      tr = table.insertRow(-1);
      for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = myData[i][col[j]];
      }
    }

    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
  }

  CreateTableFromJSON()
});