"use strict"

var map = new Map(mapData)
var interlocking = new Interlocking(map)
var track = new Track(interlocking)
var windowManager = new UIWindowManager(document.body, window)
var ats = new ATS(map, interlocking, windowManager)

//VIA 1
interlocking.getSignalFromName("VEN05").requestFleeting()
interlocking.getSignalFromName("VEN01").requestFleeting()
interlocking.getSignalFromName("UCV05").requestFleeting()
interlocking.getSignalFromName("UCV01").requestFleeting()
interlocking.getSignalFromName("SIM01").requestFleeting()
interlocking.getSignalFromName("BAN01").requestFleeting()

//VIA 2
interlocking.getSignalFromName("BAN02").requestFleeting()
interlocking.getSignalFromName("BAN04").requestFleeting()
interlocking.getSignalFromName("SIM02").requestFleeting()
interlocking.getSignalFromName("UCV02").requestFleeting()
interlocking.getSignalFromName("VEN02").requestFleeting()

// Pre-reservar rutas críticas  
requestReserveForRouteMultipleTrackCircuits("VAL_15", "VAL_13", "southbound")
// requestReserveForRouteMultipleTrackCircuits("RUI_16", "Y_02", "northbound")  
// requestReserveForRouteMultipleTrackCircuits("AJU_15", "AJU_13", "southbound")  
// requestReserveForRouteMultipleTrackCircuits("MAM_03", "Y_09", "southbound")
// requestReserveForRouteMultipleTrackCircuits("ANT_19", "ANT_17", "southbound")

interlocking.getCycleFromName("VAL_2").enable();
interlocking.getCycleFromName("VEN_1").enable()

var trains = []
trains.push(new Train("01", 6, map, track, map.getTrackCircuitFromName("BAN_04"), "southbound", interlocking, ats))
trains.push(new Train("02", 6, map, track, map.getTrackCircuitFromName("VAL_13"), "southbound", interlocking, ats))
trains.push(new Train("03", 6, map, track, map.getTrackCircuitFromName("UCV_01"), "southbound", interlocking, ats))
trains.push(new Train("04", 6, map, track, map.getTrackCircuitFromName("VEN_10"), "northbound", interlocking, ats))
trains.push(new Train("05", 6, map, track, map.getTrackCircuitFromName("SIM_06"), "northbound", interlocking, ats))
trains.push(new Train("06", 6, map, track, map.getTrackCircuitFromName("VAL_01"), "southbound", interlocking, ats))

function requestReserveForRouteMultipleTrackCircuits(startTrackCircuitName, endTrackCircuitName, direction) {
    var startTrackCircuit = interlocking.getTrackCircuitFromName(startTrackCircuitName)
    var endTrackCircuit = interlocking.getTrackCircuitFromName(endTrackCircuitName)
    var route = interlocking.findRouteBetweenTrackCircuits(startTrackCircuit, endTrackCircuit, direction)
    route.path.forEach(trackCircuit => {
        interlocking.getTrackCircuitFromName(trackCircuit).reserveForRouteRequests++
    })
}