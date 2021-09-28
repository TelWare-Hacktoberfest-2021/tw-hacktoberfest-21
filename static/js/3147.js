$(document).ready(function () {
  var myData = [{
    "username": "3147@telware",
    "user": "3147",
    "territory": "Demo",
    "domain": "telware",
    "department": "Tech",
    "uid": "3147@telware",
    "login": "3147@telware",
    "scope": "Super User",
    "user_email": "nperalta@telware.com",
    "displayName": "Nestor Peralta",
    "access_token": "xyz",
    "expires_in": 3600,
    "token_type": "Bearer",
    "refresh_token": "zyx",
    "client_id": "chromecall",
    "apiversion": "Version: 42.0.0-alpha.1328"
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