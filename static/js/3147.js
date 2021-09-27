window.onload = function () {
  var myData = {
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
  };

  var textedJson = JSON.stringify(myData, undefined, 4);
  console.log(textedJson)
  CreateTableFromJSON()
  function CreateTableFromJSON() {
    var textedJson = JSON.stringify(myData, undefined, 4);
    var e = JSON.parse(textedJson);
    console.log(e);
    for (e, o = [], r = 0; r < e.length; r++)
      for (var t in e[r])-1 === o.indexOf(t) && o.push(t);
    var n = document.createElement("table"), a = n.insertRow(-1);
    for (r = 0; r < o.length; r++) {
        var i = document.createElement("th");
        i.innerHTML = o[r], a.appendChild(i)
    }
    for (r = 0; r < e.length; r++) {
      a = n.insertRow(-1);
      for (var c = 0; c < o.length; c++) {
          a.insertCell(-1).innerHTML = e[r][o[c]]
      }
    }
    var l = document.getElementById("showData"); 
    n.setAttribute('id', 'tab'); l.innerHTML = "", l.appendChild(n) 
  }
}