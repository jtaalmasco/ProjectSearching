$(document).ready(function(){
    $.ajax({
        url:"https://jsonblob.com/api/9e6235c5-54a6-11e7-ae4c-492d6e319a6b",
        success: function(data){
            var length = data.length;
             var labels = ['id', 'project-name', 'owner','date'];
            buildTable(labels, data, document.getElementById('table-data1'));
        }
    })


    //helper functions


    var buildTable = function(labels, objects, container) {
      var table = document.createElement('table');
      table.className = "table-container";
      table.id = "table-containerId";
      var thead = document.createElement('thead');
      thead.className = "table-head-container";
      var tbody = document.createElement('tbody');
      tbody.className = "table-body-container";

      var theadTr = document.createElement('tr');
      for (var i = 0; i < labels.length; i++) {
        var theadTh = document.createElement('th');
        theadTh.innerHTML = labels[i];
        theadTr.appendChild(theadTh);
      }
      //thead.appendChild(theadTr);
      //table.appendChild(thead);

      for (j = 0; j < objects.length; j++) {
        var tbodyTr = document.createElement('tr');
        for (k = 0; k < labels.length; k++) {
          var tbodyTd = document.createElement('td');
          tbodyTd.innerHTML = objects[j][labels[k].toLowerCase()];
          tbodyTr.appendChild(tbodyTd);
        }
        tbody.appendChild(tbodyTr);
      }
      table.appendChild(tbody);

      container.appendChild(table);
    }
})
