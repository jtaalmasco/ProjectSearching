$(document).ready(function(){
    $.ajax({
        url:"https://jsonblob.com/api/9e6235c5-54a6-11e7-ae4c-492d6e319a6b",
        success: function(data){
                    jQuery("#table-data1").jqGrid({
					data : data,
					datatype : "local",
					height : '250',
					colNames : ['id','project-name','owner','date','edit'],
					colModel : [
						{ name : 'id', index:'id', sortable:false, editable:true}, 
						{ name : 'project-name', index : 'project-name', editable : false, sortable:false}, 
						{ name : 'owner', index : 'owner', editable : false, sortable:false}, 
						{ name : 'date', index : 'date', editable : false,sortable:false }, 
						{ name : 'act', index : 'act', sortable : false}],
					rowNum : 9,
					rowList : [10, 20,30],
					pager : '#pager_jqgrid',
					sortname : 'id',
					toolbarfilter: true,
					viewrecords : true,
					sortorder : "asc",
				
					gridComplete: function(){
						var ids = jQuery("#table-data1").jqGrid('getDataIDs');
						for(var i=0;i < ids.length;i++){
							var cl = ids[i];
							//for Update/Save/Edit
						    be = "<button class='btn btn-xs btn-default btn-quick' title='Edit Row' onclick=\"jQuery('#table-data1').editRow('"+cl+"');\"><i class='fa fa-pencil'></i></button>"; 
							se = "<button class='btn btn-xs btn-default btn-quick' title='Save Row' onclick=\"jQuery('#table-data1').saveRow('"+cl+"');\"><i class='fa fa-save'></i></button>";
							ca = "<button class='btn btn-xs btn-default btn-quick' title='Cancel' onclick=\"jQuery('#table-data1').restoreRow('"+cl+"');\"><i class='fa fa-times'></i></button>";  
							jQuery("#table-data1").jqGrid('setRowData',ids[i],{act:be+se+ca});

							//for Yes/No
							
							yesNo = "<label class='switch switch-success'><input type='checkbox' checked='><span class='switch-label' data-on='YES' data-off='NO'></span></label>";
							jQuery("#table-data1").jqGrid('setRowData',ids[i],{stat:yesNo});
							
						}	
					},
                 
					afterEditCell:function (rowid, cellname, value, iRow, iCol){
  					 document.getElementById(iRow+'_'+cellname).select();
   					} ,
					editurl : "ajax/dummy-jqtable.html",
					multiselect : true,
					autowidth : true,
				});

                 jQuery("#table-data1").jqGrid('navGrid', "#pager_jqgrid", {
					edit : false,
					add : false,
					del : true
					
				})

				jQuery("#table-data1").jqGrid('inlineNav', "#pager_jqgrid");
                
				// On Resize
				jQuery(window).resize(function() {

					if(window.afterResize) {
						clearTimeout(window.afterResize);
					}

					window.afterResize = setTimeout(function() {

						/**
							After Resize Code
							.................
						**/

						jQuery("#table-data1").jqGrid('setGridWidth', jQuery("#middle").width() - 32);

					}, 500);

				});
                jQuery(".ui-jqgrid").removeClass("ui-widget ui-widget-content");
				jQuery(".ui-jqgrid-view").children().removeClass("ui-widget-header ui-state-default");
				jQuery(".ui-jqgrid-labels, .ui-search-toolbar").children().removeClass("ui-state-default ui-th-column ui-th-ltr");
				jQuery(".ui-jqgrid-pager").removeClass("ui-state-default");
				jQuery(".ui-jqgrid").removeClass("ui-widget-content");

				jQuery(".ui-jqgrid-htable").addClass("table table-bordered table-hover");
				jQuery(".ui-pg-div").removeClass().addClass("btn btn-sm btn-primary");
				jQuery(".ui-icon.ui-icon-plus").removeClass().addClass("fa fa-plus");
				jQuery(".ui-icon.ui-icon-pencil").removeClass().addClass("fa fa-pencil");
				jQuery(".ui-icon.ui-icon-trash").removeClass().addClass("fa fa-trash-o");
				jQuery(".ui-icon.ui-icon-search").removeClass().addClass("fa fa-search");
				jQuery(".ui-icon.ui-icon-refresh").removeClass().addClass("fa fa-refresh");
				jQuery(".ui-icon.ui-icon-disk").removeClass().addClass("fa fa-save").parent(".btn-primary").removeClass("btn-primary").addClass("btn-success");
				jQuery(".ui-icon.ui-icon-cancel").removeClass().addClass("fa fa-times").parent(".btn-primary").removeClass("btn-primary").addClass("btn-danger");

				jQuery( ".ui-icon.ui-icon-seek-prev" ).wrap( "<div class='btn btn-sm btn-default'></div>" );
				jQuery(".ui-icon.ui-icon-seek-prev").removeClass().addClass("fa fa-backward");

				jQuery( ".ui-icon.ui-icon-seek-first" ).wrap( "<div class='btn btn-sm btn-default'></div>" );
				jQuery(".ui-icon.ui-icon-seek-first").removeClass().addClass("fa fa-fast-backward");		  	

				jQuery( ".ui-icon.ui-icon-seek-next" ).wrap( "<div class='btn btn-sm btn-default'></div>" );
				jQuery(".ui-icon.ui-icon-seek-next").removeClass().addClass("fa fa-forward");

				jQuery( ".ui-icon.ui-icon-seek-end" ).wrap( "<div class='btn btn-sm btn-default'></div>" );
				jQuery(".ui-icon.ui-icon-seek-end").removeClass().addClass("fa fa-fast-forward");
	


            //var length = data.length;
            //var labels = ['id', 'project-name', 'owner','date'];
            //buildTable(labels, data, document.getElementById('table-data1'));
        }
 
    })
       
    //search functions
    /*
    $(".search").keyup(function () {
        var searchTerm = $(".search").val();
        var listItem = $('table-data1 tbody').children('tr');
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
    
        $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
            return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
        }
        });
        
        $("#table-data1 tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
            $(this).attr('visible','false');
        });

        $("#table-data1 tbody tr:containsi('" + searchSplit + "')").each(function(e){
            $(this).attr('visible','true');
        });

        var jobCount = $('#table-data1 tbody tr[visible="true"]').length;
        $('.counter').text(jobCount + ' item');

        if(jobCount == '0') {
            $('.no-result').show();
        }
        else {
            $('.no-result').hide();
        }
	});
    */

    //helper functions

    /*
    var buildTable = function(labels, objects, container) {
      var table = document.createElement('table');
      table.className = "table-container table table-bordered";
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
      thead.appendChild(theadTr);
      table.appendChild(thead);

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
    */
})
