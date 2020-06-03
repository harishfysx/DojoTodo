define(["dijit/layout/BorderContainer", "dijit/layout/TabContainer", "dijit/layout/ContentPane", "dojo/text!./../templates/todo.html", "dojo/domReady!"],
function(BorderContainer, TabContainer,ContentPane,template){
// create the BorderContainer and attach it to our appLayout div
 var loadPage = function(){
   var appLayout = new BorderContainer({
   design: "headline"
   }, "appLayout");


   // create the TabContainer
   var contentTabs = new TabContainer({
   region: "center",
   id: "contentTabs",
   tabPosition: "bottom",
   "class": "centerPanel"
   });

   // add the TabContainer as a child of the BorderContainer
   appLayout.addChild( contentTabs );

   // create and add the BorderContainer edge regions
   appLayout.addChild(
     new ContentPane({
       region: "top",
       "class": "edgePanel",
       content: "Header content (top)"
     })
   );
   appLayout.addChild(
     new ContentPane({
       region: "left",
       id: "leftCol", "class": "edgePanel",
       content: "Sidebar content (left)",
       splitter: true
     })
   );

   // Add initial content to the TabContainer
   contentTabs.addChild(
     new ContentPane({
       title: "Group 1",
       content: template
     })
   );

   // start up and do layout
   appLayout.startup();
 };
  return loadPage;
});
