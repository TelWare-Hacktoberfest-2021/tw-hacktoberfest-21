$(document).ready(function () {
  var myData = [{
    "fileSizeBytes": 2411668,
    "url": "https://random.dog/9ff0ffc6-f6f0-4d7a-80c2-5df0ac437d5e.JPG"
},
{
  "fileSizeBytes": 245900,
  "url": "https://random.dog/ea60dc85-258d-471b-8299-3fdb1c9e8319.jpg"
},
{
  "fileSizeBytes": 2066314,
  "url": "https://random.dog/064e72d5-9932-45f3-92a8-5e36b8da7b8a.mp4"
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