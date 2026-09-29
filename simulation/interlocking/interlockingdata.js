"use strict"
//CICLOS DE MANIOBRAS
var interlockingData = {
    cycles: [
        {
            name: "VAL_1",
            routes: {
                "entry": {
                    start: "VAL03",
                    end: "VAL08"
                },
                "exit": {
                    start: "VAL10",
                    end: "VAL14"
                }
            }
        },
        {
            name: "VAL_2",
            routes: {
                "entry": {
                    start: "VAL07",
                    end: "VAL12"
                },
                "exit": {
                    start: "VAL14",
                    end: "BAN02"
                }
            }
        },
        {
            name: "VEN_1",
            routes: {
                "entry": {
                    start: "VEN06",
                    end: "SP4"
                },
                "exit": {
                    start: "VEN08",
                    end: "VEN05"
                }
            }
        },
        {
            name: "VEN_2",
            routes: {
                "entry": {
                    start: "VEN02",
                    end: "VEN07"
                },
                "exit": {
                    start: "VEN05",
                    end: "VEN01"
                }
            }
        }
    ],
    shuntingRoutes: []
}