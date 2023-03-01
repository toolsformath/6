
if (typeof gdjs.evtsExt__ExtendedVariables__C_object_variable_exist !== "undefined") {
  gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedVariables__C_object_variable_exist = {};
gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.GDObjectToCheckObjects1= [];
gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.GDObjectToCheckObjects2= [];

gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.conditionTrue_0 = {val:false};
gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.mapOfGDgdjs_46evtsExt_95_95ExtendedVariables_95_95C_95object_95variable_95exist_46GDObjectToCheckObjects1Objects = Hashtable.newFrom({"ObjectToCheck": gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.GDObjectToCheckObjects1});
gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("ObjectToCheck"), gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.GDObjectToCheckObjects1);

gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.condition0IsTrue_0.val = gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.func(runtimeScene, gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.mapOfGDgdjs_46evtsExt_95_95ExtendedVariables_95_95C_95object_95variable_95exist_46GDObjectToCheckObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ObjectVariableName") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.func = function(runtimeScene, ObjectToCheck, ObjectVariableName, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"ObjectToCheck": ObjectToCheck
},
  _objectArraysMap: {
"ObjectToCheck": gdjs.objectsListsToArray(ObjectToCheck)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "ObjectVariableName") return ObjectVariableName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.GDObjectToCheckObjects1.length = 0;
gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.GDObjectToCheckObjects2.length = 0;

gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.registeredGdjsCallbacks = [];