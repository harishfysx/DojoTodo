define(["dojo/ready", "dojo/parser", "dojo/on", "dojo/query","dijit/registry", "dojo/dom-construct", "dijit/Dialog", "dijit/form/Form","dijit/form/ValidationTextBox", "dijit/form/DateTextBox", "dojo/domReady!"],
    function(ready, parser, on, query, registry, domConstruct, Dialog) {
        ready(function() {
            addToDo();
            var box0 = registry.byId("myInput");

            function addToDo() {
                var addBtn = registry.byId("myAdd");
                on(addBtn, "click", function() {
                    require(["dojo/text!./widgets/templates/newTodoElem.html"], function(modalContent) {
                        var dialog = new Dialog({
                            title: "Create New Todo",
                            style: "width: 450px",
                            content: modalContent
                        });
                        dialog.show().then(function(){
                        setupDialog(dialog);
                      });
                    });
                });
            }
            //Set Up dialog
            function setupDialog(dialog){
            var form = registry.byNode(query(".todo-item-dialog")[0]);
            var cancelButton = registry.byNode(query(".cancel-button", form.contentNode)[0]);
             cancelButton.on("click", function(){
             dialog.destroy();
              });
            }
        });
    });
