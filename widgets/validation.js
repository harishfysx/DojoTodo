define(["dojo/ready", "dojo/parser", "dojo/on", "dijit/registry", "dojo/text!./templates/newTodoElem.html", "dojo/dom-construct", "dojo/domReady!"],
  function(ready, parser, on, registry, newEle, domConstruct) {
    ready(function() {
      var box0 = registry.byId("myInput");
      var button = registry.byId("myAdd");
      on(button, "click", function() {
        console.log("value", box0.get("value"));
        domConstruct.place("<li>" + box0.get("value") + "<span class='close'>×</span></li>", "myUL", "last");
      });
    });
  });
