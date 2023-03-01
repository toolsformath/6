
if (typeof gdjs.evtsExt__ArrayTools__HasNumber !== "undefined") {
  gdjs.evtsExt__ArrayTools__HasNumber.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__HasNumber = {};

gdjs.evtsExt__ArrayTools__HasNumber.conditionTrue_0 = {val:false};
gdjs.evtsExt__ArrayTools__HasNumber.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__ArrayTools__HasNumber.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__ArrayTools__HasNumber.conditionTrue_1 = {val:false};
gdjs.evtsExt__ArrayTools__HasNumber.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__ArrayTools__HasNumber.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__ArrayTools__HasNumber.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__HasNumber.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ArrayTools__HasNumber.conditionTrue_1 = gdjs.evtsExt__ArrayTools__HasNumber.condition0IsTrue_0;
gdjs.evtsExt__ArrayTools__HasNumber.conditionTrue_1.val = (gdjs.evtsExt__ArrayTools__IndexOf.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("arr") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("val")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != -(1));
}
}if (gdjs.evtsExt__ArrayTools__HasNumber.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ArrayTools__HasNumber.func = function(runtimeScene, arr, val, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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
if (argName === "arr") return arr;
if (argName === "val") return val;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ArrayTools__HasNumber.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ArrayTools__HasNumber.registeredGdjsCallbacks = [];