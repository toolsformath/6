gdjs.StartCode = {};
gdjs.StartCode.GDhideppObjects1= [];
gdjs.StartCode.GDhideppObjects2= [];
gdjs.StartCode.GDloadingObjects1= [];
gdjs.StartCode.GDloadingObjects2= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};


gdjs.StartCode.asyncCallback13494692 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1", false);
}}
gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.StartCode.asyncCallback13494692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartCode.eventsList1 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.StartCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDhideppObjects1.length = 0;
gdjs.StartCode.GDhideppObjects2.length = 0;
gdjs.StartCode.GDloadingObjects1.length = 0;
gdjs.StartCode.GDloadingObjects2.length = 0;

gdjs.StartCode.eventsList1(runtimeScene);

return;

}

gdjs['StartCode'] = gdjs.StartCode;
