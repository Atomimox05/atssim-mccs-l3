"use strict"

let mapData = {
    trackCircuits: [
        //EL VALLE
        //VÍA 1
        {
            name: "VAL_01", //FOSA EL VALLE
            southbound: "endOfTrack",
            northbound: "VAL_03",
            signals: {
                northbound: "VAL01", //P
                southbound: "SP1"
            },
            length: 6
        },
        {
            name: "VAL_03",
            southbound: "dependsOnPoint",
            northbound: "VAL_05",
            dependsOnPoint: {
                point: "VAL_A1",
                normal: "VAL_01",
                reverse: "VAL_23"
            },
            length: 3
        },
        {
            name: "VAL_05",
            southbound: "VAL_03",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "VAL_A3",
                normal: "VAL_07",
                reverse: "VAL_CV"
            },
            length: 3
        },
        {
            name: "VAL_07",
            northbound: "VAL_09",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "VAL_A5",
                normal: "VAL_05",
                reverse: "VAL_CV"
            },
            length: 3
        },
        {
            name: "VAL_09", //ANDEN V1
            southbound: "VAL_07",
            northbound: "VAL_11",
            signals: {
                southbound: "VAL03", //Q
                northbound: "VAL05", //R
            },
            length: 6
        },
        {
            name: "VAL_11",
            northbound: "VAL_13",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "VAL_A7",
                normal: "VAL_09",
                reverse: "VAL_18"
            },
            length: 4
        },
        {
            name: "VAL_13",
            southbound: "VAL_11",
            northbound: "VAL_15",
            signals: {
                southbound: "VAL07", //T
            },
            length: 6
        },
        {
            name: "VAL_15",
            southbound: "VAL_13",
            northbound: "VAL_17",
            length: 6
        },
        {
            name: "VAL_17",
            southbound: "VAL_15",
            northbound: "BAN_01",
            length: 6
        },
        //VÍA 2
        {
            name: "VAL_02", //VIA DEL COÑO CHAMO Q COJONES HAY AQUI
            southbound: "endOfTrack",
            northbound: "VAL_04",
            signals: {
                northbound: "VAL02",//(¿¿¿¿??????)
                southbound: "SP2"
            },
            length: 1
        },
        {
            name: "VAL_04",
            southbound: "dependsOnPoint",
            northbound: "VAL_06",
            dependsOnPoint: {
                point: "VAL_A2",
                normal: "VAL_02",
                reverse: "endOfTrack"
            },
            length: 2
        },
        {
            name: "VAL_06",
            southbound: "endOfTrack",
            northbound: "VAL_08",
            signals: {
                southbound: "VAL04", //M
                northbound: "VAL06" //L
            },
            length: 6
        },
        {
            name: "VAL_08",
            southbound: "VAL_06",
            northbound: "VAL_10",
            length: 1
        },
        {
            name: "VAL_10",
            southbound: "VAL_08",
            northbound: "VAL_12",
            signals: {
                southbound: "VAL08",//K
                northbound: "VAL10" //J
            },
            length: 6
        },
        {
            name: "VAL_12",
            southbound: "VAL_10",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "VAL_A4",
                normal: "VAL_14",
                reverse: "VAL_CV"
            },
            length: 3
        },
        {
            name: "VAL_14",
            southbound: "dependsOnPoint",
            northbound: "VAL_16",
            dependsOnPoint: {
                point: "VAL_A6",
                normal: "VAL_12",
                reverse: "VAL_CV"
            },
            length: 3
        },
        {
            name: "VAL_16",
            southbound: "VAL_14",
            northbound: "VAL_18",
            signals: {
                southbound: "VAL12",//H
                northbound: "VAL14" //G
            },
            length: 6
        },
        {
            name: "VAL_18",
            southbound: "VAL_16",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "VAL_A8",
                normal: "VAL_20",
                reverse: "VAL_11"
            },
            length: 4
        },
        {
            name: "VAL_20",
            southbound: "VAL_18",
            northbound: "VAL_22",
            length: 10
        },
        {
            name: "VAL_22",
            southbound: "VAL_20",
            northbound: "BAN_02",
            signals: {
                southbound: "VAL16",//F
                northbound: "BAN02" //(I2)
            },
            length: 10
        },
        {
            name: "VAL_CV",
            crossTrackCircuit: true,
            southboundLineSouthboundDirection: "VAL_05",
            southboundLineNorthboundDirection: "VAL_07",
            northboundLineSouthboundDirection: "VAL_12",
            northboundLineNorthboundDirection: "VAL_14",
            length: 1
        },
        //LATERAL V1
        {
            name: "VAL_19",
            southbound: "endOfTrack",
            northbound: "VAL_21",
            length: 6
        },
        {
            name: "VAL_21",
            southbound: "endOfTrack",
            northbound: "VAL_23",
            signals: {
                southbound: "VAL09", //E
                northbound: "VAL11" //Y
            },
            length: 6
        },
        {
            name: "VAL_23",
            southbound: "VAL_21",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "VAL_A9",
                normal: "VAL_25",
                reverse: "VAL_03"
            },
            length: 3
        },
        { 
            name: "VAL_25",
            southbound: "VAL_23",
            northbound: "VAL_27",
            signals: {
                southbound: "VAL13",//(?)
            },
            length: 6
        },
        { 
            name: "VAL_27",
            southbound: "VAL_25",
            northbound: "VAL_29",
            signals: {
                southbound: "VAL15",//(B)
                northbound: "VAL17",//(F)
            },
            length: 6
        },
        { 
            name: "VAL_29",
            southbound: "VAL_27",
            northbound: "VAL_31",
            length: 1
        },
        { 
            name: "VAL_31",
            southbound: "VAL_29",
            northbound: "endOfTrack",
            signals: {
                southbound: "VAL19",//(X)
                northbound: "SP3",
            },
            length: 6
        },
        //LA BANDERA
        //VÍA 1
        {
            name: "BAN_01",
            southbound: "VAL_17",
            northbound: "BAN_03",
            length: 4
        },
        {
            name: "BAN_03",
            southbound: "BAN_01",
            northbound: "BAN_05",
            signals: {
                southbound: "BAN01", //S1
            },
            length: 6
        },
        {
            name: "BAN_05",
            southbound: "BAN_03",
            northbound: "SIM_01",
            length: 6
        },
        //VIA 2
        {
            name: "BAN_02",
            southbound: "VAL_22",
            northbound: "BAN_04",
            length: 4
        },
        {
            name: "BAN_04",
            southbound: "BAN_02",
            northbound: "BAN_06",
            signals: {
                northbound: "BAN04", //S2
            },
            length: 6
        },
        {
            name: "BAN_06",
            southbound: "BAN_04",
            northbound: "SIM_02",
            length: 6
        },
        //LOS SIMBOLOS
        //VIA 1
        {
            name: "SIM_01",
            southbound: "BAN_05",
            northbound: "SIM_03",
            length: 10
        },
        {
            name: "SIM_03",
            southbound: "SIM_01",
            northbound: "SIM_05",
            signals: {
                northbound: "SIM01", //S1
            },
            length: 6
        },
        {
            name: "SIM_05",
            southbound: "SIM_03",
            northbound: "UCV_01",
            length: 8
        },
        //VIA 2
        {
            name: "SIM_02",
            southbound: "BAN_06",
            northbound: "SIM_04",
            length: 10
        },
        {
            name: "SIM_04",
            southbound: "SIM_02",
            northbound: "SIM_06",
            signals: {
                southbound: "SIM02", //S2
            },
            length: 6
        },
        {
            name: "SIM_06",
            southbound: "SIM_04",
            northbound: "UCV_02",
            length: 8
        },
        //CIUDAD UNIVERSITARIA
        //VIA 1
        {
            name: "UCV_01",
            southbound: "SIM_05",
            northbound: "UCV_03",
            length: 8
        },
        {
            name: "UCV_03",
            southbound: "UCV_01",
            northbound: "UCV_05",
            signals: {
                southbound: "UCV01", //S1
                northbound: "UCV03" //M
            },
            length: 6
        },
        {
            name: "UCV_05",
            southbound: "UCV_03",
            northbound: "UCV_07",
            length: 6
        },
        {
            name: "UCV_07",
            southbound: "UCV_05",
            northbound: "VEN_01",
            signals: {
                southbound: "UCV05" //I1
            },
            length: 12
        },
        //VIA 2
        {
            name: "UCV_02",
            southbound: "SIM_06",
            northbound: "UCV_04",
            length: 8
        },
        {
            name: "UCV_04",
            southbound: "UCV_02",
            northbound: "UCV_06",
            signals: {
                northbound: "UCV02" //S2
            },
            length: 6
        },
        {
            name: "UCV_06",
            southbound: "UCV_04",
            northbound: "UCV_08",
            length: 6
        },
        {
            name: "UCV_08",
            southbound: "UCV_06",
            northbound: "VEN_02",
            length: 12
        },
        //PLAZA VENEZUELA
        //VIA 1
        {
            name: "VEN_01",
            southbound: "UCV_07",
            northbound: "VEN_03",
            signals: {
                southbound: "VEN01", //L
                northbound: "VEN03" //K
            },
            length: 6
        },
        {
            name: "VEN_03",
            southbound: "VEN_01",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "VEN_A1",
                normal: "VEN_05",
                reverse: "VEN_14"
            },
            length: 8
        },
        {
            name: "VEN_05",
            northbound: "VEN_07",
            southbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "VEN_A3",
                normal: "VEN_03",
                reverse: "VEN_06"
            },
            length: 2
        },
        {
            name: "VEN_07",
            southbound: "VEN_05",
            northbound: "VEN_09",
            signals: {
                southbound: "VEN05", //J
                northbound: "VEN07" //H
            },
            length: 6
        },
        {
            name: "VEN_09",
            southbound: "VEN_07",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "VEN_A5",
                normal: "VEN_11",
                reverse: "VEN_10"
            },
            length: 6
        },
        {
            name: "VEN_11",
            southbound: "VEN_09",
            northbound: "endOfTrack",
            signals: {
                southbound: "VEN09", //G
                northbound: "SP5"
            },
            length: 6
        },
        //VIA 2
        {
            name: "VEN_02",
            southbound: "UCV_08",
            northbound: "VEN_04",
            length: 6
        },
        {
            name: "VEN_04",
            southbound: "VEN_02",
            northbound: "VEN_06",
            signals: {
                northbound: "VEN02" //C
            },
            length: 8
        },
        {
            name: "VEN_06",
            southbound: "VEN_04",
            northbound: "dependsOnPoint",
            dependsOnPoint: {
                point: "VEN_A2",
                normal: "VEN_08",
                reverse: "VEN_05"
            },
            length: 2
        },
        {
            name: "VEN_08",
            southbound: "VEN_06",
            northbound: "VEN_10",
            signals: {
                southbound: "VEN04", //D
                northbound: "VEN06" //E
            },
            length: 6
        },
        {
            name: "VEN_10",
            southbound: "dependsOnPoint",
            northbound: "VEN_12",
            dependsOnPoint: {
                point: "VEN_A4",
                normal: "VEN_08",
                reverse: "VEN_09"
            },
            length: 6
        },
        {
            name: "VEN_12",
            southbound: "VEN_10",
            northbound: "endOfTrack",
            signals: {
                southbound: "VEN08", //F
                northbound: "SP4"
            },
            length: 6
        },
        //VIA DE TRANSFERENCIA (Z)
        {
            name: "VEN_13",
            southbound: "endOfTrack",
            northbound: "VEN_14",
            signals: {
                southbound: "SP7"
            },
            length: 1
        },
        {
            name: "VEN_14",
            southbound: "dependsOnPoint",
            northbound: "VEN_15",
            dependsOnPoint: {
                point: "VEN_A6",
                normal: "VEN_13",
                reverse: "VEN_03"
            },
            length: 2
        },
        {
            name: "VEN_15",
            southbound: "VEN_14",
            northbound: "VEN_16",
            signals: {
                southbound: "VEN10", //N
                northbound: "VEN11" //P
            },
            length: 6
        },
        {
            name: "VEN_16",
            southbound: "VEN_15",
            northbound: "VEN_17",
            length: 1
        },
        {
            name: "VEN_17",
            southbound: "VEN_16",
            northbound: "endOfTrack",
            signals: {
                southbound: "VEN12", //Q
                northbound: "SP6"
            },
            length: 7
        }
    ],
    points: [
        {
            name: "VAL_A1",
            trackCircuit: "VAL_03",
        },
        {
            name: "VAL_A3",
            trackCircuit: "VAL_05",
        },
        {
            name: "VAL_A5",
            trackCircuit: "VAL_07",
        },
        {
            name: "VAL_A7",
            trackCircuit: "VAL_11",
        },
        {
            name: "VAL_A2",
            trackCircuit: "VAL_04",
        },
        {
            name: "VAL_A4",
            trackCircuit: "VAL_12",
        },
        {
            name: "VAL_A6",
            trackCircuit: "VAL_14",
        },
        {
            name: "VAL_A8",
            trackCircuit: "VAL_18",
        },
        {
            name: "VAL_A9",
            trackCircuit: "VAL_23",
        },
        {
            name: "VEN_A1",
            trackCircuit: "VEN_03",
        },
        {
            name: "VEN_A3",
            trackCircuit: "VEN_05",
        },
        {
            name: "VEN_A5",
            trackCircuit: "VEN_09",
        },
        {
            name: "VEN_A2",
            trackCircuit: "VEN_06",
        },
        {
            name: "VEN_A4",
            trackCircuit: "VEN_10",
        },
        {
            name: "VEN_A6",
            trackCircuit: "VEN_14",
        },
    ],
    signals: [
        {
            name: "SP1",
            direction: "southbound"
        },
        {
            name: "VAL01", //P
            direction: "northbound"
        },
        {
            name: "VAL03", //Q
            direction: "southbound"
        },
        {
            name: "VAL05", //R
            direction: "northbound"
        },
        {
            name: "VAL07", //T
            direction: "southbound"
        },
        {
            name: "SP2",
            direction: "southbound"
        },
        {
            name: "VAL02", //(?)
            direction: "northbound"
        },
        {
            name: "VAL04", //M
            direction: "southbound"
        },
        {
            name: "VAL06", //L
            direction: "northbound"
        },
        {
            name: "VAL08", //K
            direction: "southbound"
        },
        {
            name: "VAL10", //J
            direction: "northbound"
        },
        {
            name: "VAL12", //H
            direction: "southbound"
        },
        {
            name: "VAL14", //G
            direction: "northbound"
        },
        {
            name: "VAL16", //F
            direction: "southbound"
        },
        {
            name: "VAL09", //E
            direction: "southbound"
        },
        {
            name: "VAL11", //(Y)
            direction: "northbound"
        },
        {
            name: "VAL13", //(?)
            direction: "southbound"
        },
        {
            name: "VAL15", //B
            direction: "southbound"
        },
        {
            name: "VAL17", //F
            direction: "northbound"
        },
        {
            name: "VAL19", //X
            direction: "southbound"
        },
        {
            name: "SP3",
            direction: "northbound"
        },
        {
            name: "BAN01", //S1
            direction: "southbound"
        },
        {
            name: "BAN02", //I2
            direction: "northbound"
        },
        {
            name: "BAN04", //S2
            direction: "northbound"
        },
        {
            name: "SIM01", //S1
            direction: "northbound"
        },
        {
            name: "SIM02", //S2
            direction: "southbound"
        },
        {
            name: "UCV01", //S1
            direction: "southbound"
        },
        {
            name: "UCV03", //M
            direction: "northbound"
        },
        {
            name: "UCV05", //I1
            direction: "southbound"
        },
        {
            name: "UCV02", //S2
            direction: "northbound"
        },
        {
            name: "VEN01", //L
            direction: "southbound"
        },
        {
            name: "VEN03", //K
            direction: "northbound"
        },
        {
            name: "VEN05", //J
            direction: "southbound"
        },
        {
            name: "VEN07", //H
            direction: "northbound"
        },
        {
            name: "VEN09", //G
            direction: "southbound"
        },
        {
            name: "SP5",
            direction: "northbound"
        },
        {
            name: "VEN02", //C
            direction: "northbound"
        },
        {
            name: "VEN04", //D
            direction: "southbound"
        },
        {
            name: "VEN06", //E
            direction: "northbound"
        },
        {
            name: "VEN08", //F
            direction: "southbound"
        },
        {
            name: "SP4",
            direction: "northbound"
        },
        {
            name: "SP7",
            direction: "southbound"
        },
        {
            name: "VEN10", //N
            direction: "southbound"
        },
        {
            name: "VEN11", //P
            direction: "northbound"
        },
        {
            name: "VEN12", //Q
            direction: "southbound"
        },
        {
            name: "SP6",
            direction: "northbound"
        },
    
    ],
    shuntingPanels: [],
    platforms: [
        {
            name: "VALLE_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "VAL_09",
                position: 6
            },
            southbound: {
                trackCircuit: "VAL_09",
                position: 1
            }
        },
        {
            name: "VALLE_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "VAL_16",
                position: 6
            },
            southbound: {
                trackCircuit: "VAL_16",
                position: 1
            },
            terminus: true
        },
        {
            name: "VALLE_V3",
            direction: "southbound",
            northbound: {
                trackCircuit: "VAL_27",
                position: 6
            },
            southbound: {
                trackCircuit: "VAL_27",
                position: 1
            }
        },
        {
            name: "BANDERA_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "BAN_03",
                position: 6
            },
            southbound: {
                trackCircuit: "BAN_03",
                position: 1
            }
        },
        {
            name: "BANDERA_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "BAN_04",
                position: 6
            },
            southbound: {
                trackCircuit: "BAN_04",
                position: 1
            }
        },
        {
            name: "SIMBOLOS_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "SIM_03",
                position: 6
            },
            southbound: {
                trackCircuit: "SIM_03",
                position: 1
            }
        },
        {
            name: "SIMBOLOS_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "SIM_04",
                position: 6
            },
            southbound: {
                trackCircuit: "SIM_04",
                position: 1
            }
        },
        {
            name: "CIUDADUNIVERSITARIA_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "UCV_03",
                position: 6
            },
            southbound: {
                trackCircuit: "UCV_03",
                position: 1
            }
        },
        {
            name: "CIUDADUNIVERSITARIA_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "UCV_04",
                position: 6
            },
            southbound: {
                trackCircuit: "UCV_04",
                position: 1
            }
        },
        {
            name: "PLAZAVENEZUELA_V1",
            direction: "southbound",
            northbound: {
                trackCircuit: "VEN_07",
                position: 6
            },
            southbound: {
                trackCircuit: "VEN_07",
                position: 1
            }
        },
        {
            name: "PLAZAVENEZUELA_V2",
            direction: "northbound",
            northbound: {
                trackCircuit: "VEN_08",
                position: 6
            },
            southbound: {
                trackCircuit: "VEN_08",
                position: 1
            }
        },
    ],
}