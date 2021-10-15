$(document).ready(function () {
  var myData = [{
      "id": "181913649",
      "name": "Drake Hotline Bling",
      "url": "https://i.imgflip.com/30b1gx.jpg",
      "width": 1200,
      "height": 1200,
      "box_count": 2
  },
  {
      "id": "87743020",
      "name": "Two Buttons",
      "url": "https://i.imgflip.com/1g8my4.jpg",
      "width": 600,
      "height": 908,
      "box_count": 3
  },
  {
      "id": "112126428",
      "name": "Distracted Boyfriend",
      "url": "https://i.imgflip.com/1ur9b0.jpg",
      "width": 1200,
      "height": 800,
      "box_count": 3
  },
  {
      "id": "131087935",
      "name": "Running Away Balloon",
      "url": "https://i.imgflip.com/261o3j.jpg",
      "width": 761,
      "height": 1024,
      "box_count": 5
  },
  {
      "id": "247375501",
      "name": "Buff Doge vs. Cheems",
      "url": "https://i.imgflip.com/43a45p.png",
      "width": 937,
      "height": 720,
      "box_count": 4
  },
  {
      "id": "124822590",
      "name": "Left Exit 12 Off Ramp",
      "url": "https://i.imgflip.com/22bdq6.jpg",
      "width": 804,
      "height": 767,
      "box_count": 3
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
