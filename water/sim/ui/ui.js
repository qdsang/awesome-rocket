// The startup values of the parameters when launching the simulator
var defaultParameters = { 
					gPressure: 		7.0,			// in bar , absolute? - should be above ambient
					aTemperature: 	298.15,			// Kelvin ???  - 25C
					ltDia: 			0.0, 			// meters ??? - 0.021
					diaNoz: 		0.022,			// meters
					diaBot: 		0.105,			// meters
					CDrag: 			0.5,			// regular drag coefficient units ???
					ltLength: 		0.0, 			// meters ??? - 0.25
					massBot: 		0.1,   			// kilograms ???
					volWat: 		0.0005, 		// liters / 1000
					volBot: 		0.0021, 		// liters / 1000
					lVol: 			0.0005,   		// liters / 1000
					effWat: 		0.97,			// 0-1
					effGas: 		0.97,			// 0-1
					humidity: 		1.0,			// percentage 1 = 100%
					noz0:			0.28,			// nozzle adjustment 1
					noz1:			0.32,			// nozzle adjustment 2
					noz2:			0.88,			// nozzle adjustment 3
					pressAtm:		101325.0,		// atmospheric pressure
					gravity:		9.807,			// gravity m/s
					gasGamma: 		1.4,				// air
					Rgas: 			8.31451 / 0.028964,	// air
					liquidDensity:  997.0			// kg/m^3 water at 25C
				};

var defaultSandyParameters = { 
					gPressure: 		70.0,			// in bar , absolute? - should be above ambient
					aTemperature: 	298.15,			// Kelvin ???  - 25C
					ltDia: 			0.0, 			// meters ??? - 0.021
					diaNoz: 		0.015,			// meters
					diaBot: 		0.0624,			// meters
					CDrag: 			0.69,			// regular drag coefficient units ???
					ltLength: 		0.0, 			// meters ??? - 0.25
					massBot: 		1.250,   			// kilograms ???
					volWat: 		0.0019, 		// liters / 1000
					volBot: 		0.00722, 		// liters / 1000
					lVol: 			0.0000,   		// liters / 1000
					effWat: 		0.97,			// 0-1
					effGas: 		0.97,			// 0-1
					humidity: 		1.0,			// percentage 1 = 100%
					noz0:			0.54,			// nozzle adjustment 1
					noz1:			0.38,			// nozzle adjustment 2
					noz2:			0.70,			// nozzle adjustment 3
					pressAtm:		101325.0,		// atmospheric pressure
					gravity:		9.807,			// gravity m/s
					gasGamma: 		1.4,				// air
					Rgas: 			8.31451 / 0.028964,	// air
					liquidDensity:  997.0			// kg/m^3 water at 25C
				};
				
var defaultCharlieParameters = { 
					gPressure: 		68.95,			// in bar , absolute? - should be above ambient
					aTemperature: 	298.15,			// Kelvin ???  - 25C
					ltDia: 			0.0, 			// meters ??? - 0.021
					diaNoz: 		0.015,			// meters
					diaBot: 		0.0634,			// meters
					CDrag: 			0.69,			// regular drag coefficient units ???
					ltLength: 		0.0, 			// meters ??? - 0.25
					massBot: 		1.570,  	    // kilograms ???
					volWat: 		0.002, 			// liters / 1000
					volBot: 		0.00732, 		// liters / 1000
					lVol: 			0.0000,   		// liters / 1000
					effWat: 		0.97,			// 0-1
					effGas: 		0.97,			// 0-1
					humidity: 		1.0,			// percentage 1 = 100%
					noz0:			0.54,			// nozzle adjustment 1
					noz1:			0.38,			// nozzle adjustment 2
					noz2:			0.70,			// nozzle adjustment 3
					pressAtm:		101325.0,		// atmospheric pressure
					gravity:		9.807,			// gravity m/s
					gasGamma: 		1.4,				// air
					Rgas: 			8.31451 / 0.028964,	// air
					liquidDensity:  997.0			// kg/m^3 water at 25C
				};
				

var defaultShadowParameters = { 
					gPressure: 		51.1,			// in bar , absolute? - should be above ambient
					aTemperature: 	298.15,			// Kelvin ???  - 25C
					ltDia: 			0.0155, 		// meters ??? - 0.021
					diaNoz: 		0.0155,			// meters
					diaBot: 		0.063,			// meters
					CDrag: 			0.68,			// regular drag coefficient units ???
					ltLength: 		1.45, 			// meters ??? - 0.25
					massBot: 		1.680,   			// kilograms ???
					volWat: 		0.0018, 		// liters / 1000
					volBot: 		0.00706, 		// liters / 1000
					lVol: 			0.0000,   		// liters / 1000
					effWat: 		0.97,			// 0-1
					effGas: 		0.97,			// 0-1
					humidity: 		1.0,			// percentage 1 = 100%
					noz0:			0.54,			// nozzle adjustment 1
					noz1:			0.38,			// nozzle adjustment 2
					noz2:			0.70,			// nozzle adjustment 3
					pressAtm:		101325.0,		// atmospheric pressure
					gravity:		9.807,			// gravity m/s
					gasGamma: 		1.4,				// air
					Rgas: 			8.31451 / 0.028964,	// air
					liquidDensity:  997.0			// kg/m^3 water at 25C
				};

// The startup values of the parameters when launching the simulator
var default2lParameters = { 
	gPressure: 		7.0,			// in bar , absolute? - should be above ambient
	aTemperature: 	298.15,			// Kelvin ???  - 25C
	ltDia: 			0.0, 			// meters ??? - 0.021
	diaNoz: 		0.022,			// meters
	diaBot: 		0.105,			// meters
	CDrag: 			0.5,			// regular drag coefficient units ???
	ltLength: 		0.0, 			// meters ??? - 0.25
	massBot: 		0.020,   			// kilograms ???
	volWat: 		0.00065, 		// liters / 1000
	volBot: 		0.0020, 		// liters / 1000
	lVol: 			0.0005,   		// liters / 1000
	effWat: 		0.97,			// 0-1
	effGas: 		0.97,			// 0-1
	humidity: 		1.0,			// percentage 1 = 100%
	noz0:			0.28,			// nozzle adjustment 1
	noz1:			0.32,			// nozzle adjustment 2
	noz2:			0.88,			// nozzle adjustment 3
	pressAtm:		101325.0,		// atmospheric pressure
	gravity:		9.807,			// gravity m/s
	gasGamma: 		1.4,				// air
	Rgas: 			8.31451 / 0.028964,	// air
	liquidDensity:  997.0			// kg/m^3 water at 25C
};

// we create a copy of the default and that is what we use to change values until we are ready to calculate
// all UI objects reflect the values in currentParameters
// the currentParameters will be used as input to the simulator
var currentParameters = $.extend(true,{},defaultParameters);

var errorDiameter = "";		// The error message displayed when the nozzle and bottle diameters are wrong
var errorVolume   = "";		// The error message displayed when the water and rocket volumes are wrong

var pressure = 7; // 3.0 - for bug reproduction

var engine = new Engine();

var resultsClear = true;

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

// Checks to see if it is a number and within range. If not a number returns null
// if value is out of range the value is forced to be within the range
// Will colour the text control red if number is not a number
function validate(id,lower,upper) {
	var value = $(id).val();
	if(!isNumeric(value)) {
		console.log("Not a number .. try again");
		$(id).css("background-color", "#FFBBBB");
		return null;
	}
	$(id).css("background-color", "#FFFFFF");
	//Validate input range
	value = value < lower ? lower : value;
	value = value > upper ? upper : value;
	
	$(id).val(value); // set the text box to the corrected value
	return value;
}

// Checks to see if the bottle volume is higher than the water amount.
// if it is not, then the volume parameters are coloured red.
function validateVolume() {
	var col = "#000000";
	var result;
	if(currentParameters.volBot <= currentParameters.volWat) {
		col = "#FF0000";
		errorVolume = "The volume of water is larger than the volume of the rocket. Please adjust one or the other.";
		result = false;
	} else {
		col = "#555555"
		errorVolume = "";
		result = true;
	}
	handleErrors();
	$('#volume').css("color",  col );
	$('#waterAmount').css("color",  col );
	return result;
}


// Checks to see if the bottle volume is higher than the water amount.
// if it is not, then the volume parameters are coloured red.
function validateDiameter() {
	var col = "#000000";
	var result;
	if(currentParameters.diaBot <= currentParameters.diaNoz) {
		col = "#FF0000";
		errorDiameter = "The nozzle diameter is bigger than the bottle diameter! Please adjust one or the other.";
		result = false;
	} else {
		col = "#555555"
		errorDiameter = "";
		result = true;
	}
	handleErrors();
	$('#rocketDiameter').css("color",  col );
	$('#nozzleDiameter').css("color",  col );
	return result;
}

// Displays error messages, and disables simulator start button when there is an error
function handleErrors() {
	var txt = errorDiameter + "<br>" + errorVolume;
	$('#errorMsg').html(txt);
	if (errorDiameter === "" && errorVolume === "") {
		$('#runSimBtn').prop('disabled', false);
	} else {
		$('#runSimBtn').prop('disabled', true);
	}
	runSimulation();
}

// ------------- Rocket Sliders and controls ------------------------

$('#rocketDiameterSlider').slider({scale: 'logarithmic'}).on("change", function(slideEvt) {
	$("#rocketDiameter").val((slideEvt.value.newValue)*1000);
	currentParameters.diaBot = slideEvt.value.newValue;
	if(validateDiameter()) {
		engine.noz.setVolDiam(currentParameters.volBot,currentParameters.volWat,currentParameters.diaBot,currentParameters.diaNoz);
	}
	clearResults();
}); 


$('#rocketDiameter').on("change", function(e) {
	var value = validate('#rocketDiameter',20,280);
	if(value !== null) {
		currentParameters.diaBot = value/1000;	// do conversion to required units (m)
		$('#rocketDiameterSlider').slider('setValue',currentParameters.diaBot);
		if(validateDiameter()) {
			engine.noz.setVolDiam(currentParameters.volBot,currentParameters.volWat,currentParameters.diaBot,currentParameters.diaNoz);
		}
		clearResults();
	}
}); 

$('#nozzleDiameterSlider').slider({scale: 'logarithmic'}).on("change", function(slideEvt) {
	$("#nozzleDiameter").val(((slideEvt.value.newValue)*1000).toFixed(1));
	currentParameters.diaNoz = slideEvt.value.newValue;
	if(validateDiameter()) {
		engine.noz.setVolDiam(currentParameters.volBot,currentParameters.volWat,currentParameters.diaBot,currentParameters.diaNoz);
	}
	clearResults();
});

$('#nozzleDiameter').on("change", function(e) {
	var value = validate('#nozzleDiameter',2,120);
	if(value !== null) {
		currentParameters.diaNoz = value/1000;	// do conversion to required units (m)
		$('#nozzleDiameterSlider').slider('setValue',currentParameters.diaNoz);
		if(validateDiameter()) {
			engine.noz.setVolDiam(currentParameters.volBot,currentParameters.volWat,currentParameters.diaBot,currentParameters.diaNoz);
		}
		clearResults();
	}
}); 



$('#volumeSlider').slider({scale: 'logarithmic'}).on("change", function(slideEvt) {
	currentParameters.volBot = slideEvt.value.newValue/1000.0;
	$("#volume").val((slideEvt.value.newValue).toFixed(2));
	if(validateVolume()) {
		engine.noz.setVolDiam(currentParameters.volBot,currentParameters.volWat,currentParameters.diaBot,currentParameters.diaNoz);
	}
	clearResults();
});

$('#volume').on("change", function(e) {
	var value = validate('#volume',0.1,30);
	if(value !== null) {
		currentParameters.volBot = value/1000;	// do conversion to required units (L)
		$('#volumeSlider').slider('setValue',currentParameters.volBot*1000);
		if(validateVolume()) {
			engine.noz.setVolDiam(currentParameters.volBot,currentParameters.volWat,currentParameters.diaBot,currentParameters.diaNoz);
		}
		clearResults();
	}
}); 

function setWaterValue(value) {
	$("#waterAmount").val((value).toFixed(2));
	currentParameters.volWat = value/1000.0;
	if(validateVolume()) {
		engine.noz.setVolDiam(currentParameters.volBot,currentParameters.volWat,currentParameters.diaBot,currentParameters.diaNoz);
		runSimulation();
	}
	//	clearResults();
}
$('#waterSlider').slider({scale: 'logarithmic'}).on("change", function(slideEvt) {
	setWaterValue(slideEvt.value.newValue);
});

$('#waterSliderBtn').on('click', function (e) {
	let v = currentParameters.volBot*1000*0.33;
	$('#waterSlider').slider('setValue', v);
	setWaterValue(v);
});

$('#waterAmount').on("change", function(e) {
	var value = validate('#waterAmount',0.1,30);
	if(value !== null) {
		currentParameters.volWat = value/1000;	// do conversion to required units (L)
		$('#waterSlider').slider('setValue',currentParameters.volWat*1000);
		if(validateVolume()) {
			engine.noz.setVolDiam(currentParameters.volBot,currentParameters.volWat,currentParameters.diaBot,currentParameters.diaNoz);
		}
		clearResults();
	}
}); 



$('#massSlider').slider({scale: 'logarithmic'}).on("change", function(slideEvt) {
	$("#mass").val((slideEvt.value.newValue));
	currentParameters.massBot = slideEvt.value.newValue/1000;
	clearResults();
});


$('#mass').on("change", function(e) {
	var value = validate('#mass',30,5800);
	if(value !== null) {
		currentParameters.massBot = value/1000;	// do conversion to required units (m)
		$('#massSlider').slider('setValue',currentParameters.massBot*1000);
		clearResults();
	}
}); 



$('#dragSlider').slider({scale: 'logarithmic'}).on("change", function(slideEvt) {
	$("#drag").val((slideEvt.value.newValue).toFixed(2));
	currentParameters.CDrag = slideEvt.value.newValue;
	clearResults();
});

$('#drag').on("change", function(e) {
	var value = validate('#drag',0.01,3.3);
	if(value !== null) {
		currentParameters.CDrag = Number(value);	
		$('#dragSlider').slider('setValue',currentParameters.CDrag);
		clearResults();
	}
}); 


$('#noz0Slider').slider().on("change", function(slideEvt) {
	$('#noz0').val((slideEvt.value.newValue));
	currentParameters.noz0 = (slideEvt.value.newValue/50);
	engine.noz.setShape(currentParameters.noz0,currentParameters.noz1,currentParameters.noz2);
	clearResults();
});

$('#noz0').on("change", function(e) {
	var value = validate('#noz0',0,50);
	if(value !== null) {
		currentParameters.noz0 = Number(value/50);	
		$('#noz0Slider').slider('setValue',currentParameters.noz0*50);
		engine.noz.setShape(currentParameters.noz0,currentParameters.noz1,currentParameters.noz2);
		clearResults();
	}
}); 


$('#noz1Slider').slider().on("change", function(slideEvt) {
	$('#noz1').val((slideEvt.value.newValue));
	currentParameters.noz1 = (slideEvt.value.newValue/50);
	engine.noz.setShape(currentParameters.noz0,currentParameters.noz1,currentParameters.noz2);
	clearResults();
});

$('#noz1').on("change", function(e) {
	var value = validate('#noz1',0,50);
	if(value !== null) {
		currentParameters.noz1 = Number(value/50);	
		$('#noz1Slider').slider('setValue',currentParameters.noz1*50);
		engine.noz.setShape(currentParameters.noz0,currentParameters.noz1,currentParameters.noz2);
		clearResults();
	}
}); 

$('#noz2Slider').slider().on("change", function(slideEvt) {
	$('#noz2').val((slideEvt.value.newValue));
	currentParameters.noz2 = (slideEvt.value.newValue/50);
	engine.noz.setShape(currentParameters.noz0,currentParameters.noz1,currentParameters.noz2);
	clearResults();
});

$('#noz2').on("change", function(e) {
	var value = validate('#noz2',0,50);
	if(value !== null) {
		currentParameters.noz2 = Number(value/50);	
		$('#noz2Slider').slider('setValue',currentParameters.noz2*50);
		engine.noz.setShape(currentParameters.noz0,currentParameters.noz1,currentParameters.noz2);
		clearResults();
	}
}); 

$('#watThrustEffSlider').slider().on("change", function(slideEvt) {
	$("#watThrustEff").val((slideEvt.value.newValue).toFixed(2));
	currentParameters.effWat = slideEvt.value.newValue;
	clearResults();
});

$('#watThrustEff').on("change", function(e) {
	var value = validate('#watThrustEff',0.5,1.0);
	if(value !== null) {
		currentParameters.effWat = Number(value);	
		$('#watThrustEffSlider').slider('setValue',currentParameters.effWat);
		clearResults();
	}
}); 


$('#gasThrustEffSlider').slider().on("change", function(slideEvt) {
	$("#gasThrustEff").val((slideEvt.value.newValue).toFixed(2));
	currentParameters.effGas = slideEvt.value.newValue;
	clearResults();
});

$('#gasThrustEff').on("change", function(e) {
	var value = validate('#gasThrustEff',0.5,1.0);
	if(value !== null) {
		currentParameters.effGas = Number(value);	
		$('#gasThrustEffSlider').slider('setValue',currentParameters.effGas);
		clearResults();
	}
}); 

// ------------- Launcher Sliders ------------------------
$('#pressureSlider').slider().on("change", function(slideEvt) {
	$("#pressure").val((slideEvt.value.newValue).toFixed(2));
	var psi = slideEvt.value.newValue * 14.503773800722;
	$("#pressurePSI").val(Math.floor(psi) + " psi");
	
	currentParameters.gPressure = slideEvt.value.newValue;
	clearResults();
	
	runSimulation();
});

$('#pressure').on("change", function(e) {
	var value = validate('#pressure',1.0,200.0);
	if(value !== null) {
		currentParameters.gPressure = Number(value);	
		$('#pressureSlider').slider('setValue',currentParameters.gPressure);
		var psi = currentParameters.gPressure * 14.503773800722;
		$("#pressurePSI").val(Math.floor(psi) + " psi");
		
		clearResults();
	}
}); 


$('#ltDiameterSlider').slider().on("change", function(slideEvt) {
	$("#ltDiameter").val((slideEvt.value.newValue).toFixed(0));
	currentParameters.ltDia = slideEvt.value.newValue/1000;
	clearResults();
});

$('#ltDiameter').on("change", function(e) {
	var value = validate('#ltDiameter',0,120);
	if(value !== null) {
		currentParameters.ltDia = value/1000;	// do conversion to required units (L)
		$('#ltDiameterSlider').slider('setValue',currentParameters.ltDia*1000);
		clearResults();
	}
}); 


$('#ltLengthSlider').slider().on("change", function(slideEvt) {
	$("#ltLength").val((slideEvt.value.newValue).toFixed(0));
	currentParameters.ltLength = slideEvt.value.newValue/1000;
	clearResults();
});

$('#ltLength').on("change", function(e) {
	var value = validate('#ltLength',0,2500);
	if(value !== null) {
		currentParameters.ltLength = value/1000;	// do conversion to required units (L)
		$('#ltLengthSlider').slider('setValue',currentParameters.ltLength*1000);
		clearResults();
	}
}); 

$('#launcherVolumeSlider').slider().on("change", function(slideEvt) {
	$("#launcherVolume").val((slideEvt.value.newValue).toFixed(2));
	currentParameters.lVol = slideEvt.value.newValue/1000;
	clearResults();
});

$('#launcherVolume').on("change", function(e) {
	var value = validate('#launcherVolume',0,30);
	if(value !== null) {
		currentParameters.lVol = value/1000;	// do conversion to required units (L)
		$('#launcherVolumeSlider').slider('setValue',currentParameters.lVol*1000);
		clearResults();
	}
}); 
// ------------- Environment Sliders ------------------------

$('#ambientTempSlider').slider().on("change", function(slideEvt) {
	$("#ambientTemp").val((slideEvt.value.newValue));
	currentParameters.aTemperature = slideEvt.value.newValue + 273.15;
	clearResults();
});

$('#ambientTemp').on("change", function(e) {
	var value = validate('#ambientTemp',-5,55);
	if(value !== null) {
		currentParameters.aTemperature = value - 273.15;	
		$('#ambientTempSlider').slider('setValue',currentParameters.aTemperature + 273.15);
		clearResults();
	}
}); 

$('#ambientPressureSlider').slider().on("change", function(slideEvt) {
	$("#ambientPressure").val((slideEvt.value.newValue));
	currentParameters.pressAtm = slideEvt.value.newValue;
	clearResults();
});

$('#ambientPressure').on("change", function(e) {
	var value = validate('#ambientPressure',33700,107900);
	if(value !== null) {
		currentParameters.pressAtm = Number(value);	
		$('#ambientPressureSlider').slider('setValue',currentParameters.pressAtm);
		clearResults();
	}
}); 


$('#relHumiditySlider').slider().on("change", function(slideEvt) {
	$("#relHumidity").val((slideEvt.value.newValue));
	currentParameters.humidity = slideEvt.value.newValue/100;
	clearResults();
});

$('#relHumidity').on("change", function(e) {
	var value = validate('#relHumidity',0,200);
	if(value !== null) {
		currentParameters.humidity = value/100;	
		$('#relHumiditySlider').slider('setValue',currentParameters.humidity*100);
		clearResults();
	}
}); 

$('#gravitySlider').slider().on("change", function(slideEvt) {
	$("#gravity").val((slideEvt.value.newValue));
	currentParameters.gravity = Number(slideEvt.value.newValue);
	clearResults();
});

$('#gravity').on("change", function(e) {
	var value = validate('#gravity',9.700,9.900);
	if(value !== null) {
		currentParameters.gravity = Number(value);	
		$('#gravitySlider').slider('setValue',currentParameters.gravity);
		clearResults();
	}
}); 

$('#liquidDensitySlider').slider({scale: 'logarithmic'}).on("change", function(slideEvt) {
	$("#liquidDensity").val((slideEvt.value.newValue));
	currentParameters.liquidDensity = Number(slideEvt.value.newValue*1000);
	clearResults();
});

$('#liquidDensity').on("change", function(e) {
	var value = validate('#liquidDensity',0.5,14);
	if(value !== null) {
		currentParameters.liquidDensity = Number(value*1000);	
		$('#liquidDensitySlider').slider('setValue',currentParameters.liquidDensity/1000);
		clearResults();
	}
}); 

var gasSourceChanged = function(obj) {
	switch(obj.value) {
		case "Air":
			currentParameters.gasGamma 	= 1.4;
			currentParameters.Rgas 		= 8.31451/0.028964;
			break;
			
		case "CO2":
			currentParameters.gasGamma 	= 1.31;
			currentParameters.Rgas 		= 8.31451/0.0441;
			break;
			
		case "Helium":
			currentParameters.gasGamma 	= 1.67;
			currentParameters.Rgas 		= 8.31451/0.004;
			break;
			
		case "Nitrogen":
			currentParameters.gasGamma 	= 1.4013;
			currentParameters.Rgas 		= 8.31451/0.0280134;
			break;
	}
	clearResults();
}

// -------------- Swiching Standard/Advanced ----------------
$('#StandardBtn').on('click', function (e) {
  $('#advancedRocket').hide();
  $('#advancedLauncher').hide();
  $('#advancedEnvironment').hide();
  $('#rawDataPanel').hide();	
});

$('#AdvancedBtn').on('click', function (e) {
  $('#advancedRocket').show();
  $('#advancedLauncher').show();
  $('#advancedEnvironment').show();
  $('#rawDataPanel').show();	
});

//---------------------------------------------------------
			
$('#runSimBtn').on("click", function() {
	runSimulation();
});


$('#resetBtn').on("click", function() {
	currentParameters = $.extend(true,{},defaultParameters);
	setUIParameters(currentParameters);
	engine.noz.setVolDiam(currentParameters.volBot,currentParameters.volWat,currentParameters.diaBot,currentParameters.diaNoz);
	engine.noz.setShape(currentParameters.noz0,currentParameters.noz1,currentParameters.noz2);

	resultsClear = false;
	clearResults();
});
	

$('#charlieBtn').on("click", function() {
	currentParameters = $.extend(true,{},defaultCharlieParameters);
	setUIParameters(currentParameters);
	engine.noz.setVolDiam(currentParameters.volBot,currentParameters.volWat,currentParameters.diaBot,currentParameters.diaNoz);
	engine.noz.setShape(currentParameters.noz0,currentParameters.noz1,currentParameters.noz2);

	resultsClear = false;
	clearResults();
});

/*	
$('#sandyBtn').on("click", function() {
	currentParameters = $.extend(true,{},defaultSandyParameters);
	setUIParameters(currentParameters);
	engine.noz.setVolDiam(currentParameters.volBot,currentParameters.volWat,currentParameters.diaBot,currentParameters.diaNoz);
	engine.noz.setShape(currentParameters.noz0,currentParameters.noz1,currentParameters.noz2);

	resultsClear = false;
	clearResults();
});
*/
	
$('#shadowBtn').on("click", function() {
	currentParameters = $.extend(true,{},defaultShadowParameters);
	setUIParameters(currentParameters);
	engine.noz.setVolDiam(currentParameters.volBot,currentParameters.volWat,currentParameters.diaBot,currentParameters.diaNoz);
	engine.noz.setShape(currentParameters.noz0,currentParameters.noz1,currentParameters.noz2);

	resultsClear = false;
	clearResults();
});

$('#kl2lBtn').on("click", function() {
	currentParameters = $.extend(true,{},default2lParameters);
	setUIParameters(currentParameters);
	engine.noz.setVolDiam(currentParameters.volBot,currentParameters.volWat,currentParameters.diaBot,currentParameters.diaNoz);
	engine.noz.setShape(currentParameters.noz0,currentParameters.noz1,currentParameters.noz2);

	resultsClear = false;
	clearResults();
});
	
	
	
	

// This function sets the UI parameters to specific values. 
// Used for setting defaults, or particular preset configurations.
var setUIParameters = function(params) {
	$("#rocketDiameter").val((params.diaBot)*1000);
	$('#rocketDiameterSlider').slider('setValue',params.diaBot);

	$("#nozzleDiameter").val(((params.diaNoz)*1000).toFixed(1));
	$('#nozzleDiameterSlider').slider('setValue',params.diaNoz);

	$("#volume").val(((params.volBot)*1000).toFixed(2));	
	$('#volumeSlider').slider('setValue',params.volBot*1000);

	$("#waterAmount").val(((params.volWat)*1000).toFixed(2));	
	$('#waterSlider').slider('setValue',params.volWat*1000);
	
	$("#mass").val((params.massBot)*1000);
	$('#massSlider').slider('setValue',params.massBot*1000);

	$("#drag").val((params.CDrag).toFixed(2));
	$('#dragSlider').slider('setValue',params.CDrag);
	
	$('#noz0').val((params.noz0*50).toFixed(0));
	$('#noz0Slider').slider('setValue',params.noz0*50);

	$('#noz1').val((params.noz1*50).toFixed(0));
	$('#noz1Slider').slider('setValue',params.noz1*50);

	$('#noz2').val((params.noz2*50).toFixed(0));
	$('#noz2Slider').slider('setValue',params.noz2*50);
	
	$("#watThrustEff").val((params.effWat).toFixed(2));
	$('#watThrustEffSlider').slider('setValue',params.effWat);
	
	$("#gasThrustEff").val((params.effGas).toFixed(2));
	$('#gasThrustEffSlider').slider('setValue',params.effGas);

	$("#pressure").val((params.gPressure).toFixed(2));
	$('#pressureSlider').slider('setValue',params.gPressure);
	
	var psi = params.gPressure * 14.503773800722;
	$("#pressurePSI").val(Math.floor(psi) + " psi");
	
	
	$("#ltDiameter").val((params.ltDia*1000).toFixed(0));
	$('#ltDiameterSlider').slider('setValue',params.ltDia*1000);
	
	$("#ltLength").val((params.ltLength*1000).toFixed(0));
	$('#ltLengthSlider').slider('setValue',params.ltLength*1000);
	
	$("#launcherVolume").val((params.lVol*1000).toFixed(2));	
	$('#launcherVolumeSlider').slider('setValue',params.lVol*1000);
	
	$("#ambientTemp").val((params.aTemperature - 273.15));
	$('#ambientTempSlider').slider('setValue',params.aTemperature - 273.15);
	
	$("#ambientPressure").val((params.pressAtm));
	$('#ambientPressureSlider').slider('setValue',params.pressAtm);
	
	$("#relHumidity").val((params.humidity*100));
	$('#relHumiditySlider').slider('setValue',params.humidity*100);

	$("#gravity").val((params.gravity));
	$('#gravitySlider').slider('setValue',params.gravity);

	$("#liquidDensity").val((params.liquidDensity/1000));
	$('#liquidDensitySlider').slider('setValue',params.liquidDensity/1000);
	
	//	$('#launcherVolumeSlider, .slider-selection').css('background', 'rgb(255,0,0)');
	$('#launcherVolumeSlider .slider-selection').css('background', 'rgb(255,255,0)');
	//	$('#launcherVolumeSlider, .slider-selection').attri({'background': 'rgb(255,0,0)'});
}


var clearResults = function() {
	if(!resultsClear) {
		$('#burnoutTime').text("-");
		$('#burnoutAltitude').text("-");
		$('#burnoutVelocity').text("-");
		$('#burnoutAcceleration').text("-");
		$('#apogeeTime').text("-");
		$('#apogeeAltitude').text("-");
		$('#crashdownTime').text("-");
		$('#crashdownVelocity').text("-");

		$('#totalImpulse').text("-");
		$('#burnTime').text("-");
		$('#peakThrust').text("-");
		$('#averageThrust').text("-");
		$('#motorEquivalent').text("-");

		$('#rawData').text("Raw data will appear here for the simulation. You must run the simulation at least once.");
		resultsClear = true;
	}
};


var showResultSummary = function(inputParameters, results) {
	// display input parameters - show/hide sections based on standard/advanced
	// display output summary  - show/hide sections based on standard/advanced
	// do unit conversion of output
	$('#burnoutTime').text(results.summaryData[0].toFixed(2) + " s");
	$('#burnoutAltitude').text(results.summaryData[1].toFixed(2) + " m");
	$('#burnoutVelocity').text(results.summaryData[2].toFixed(2) + " m/s");
	$('#burnoutAcceleration').text(results.summaryData[3].toFixed(2) + " G");

	$('#totalImpulse').text(results.summaryData[10].toFixed(2) + " Ns");
	$('#burnTime').text(results.summaryData[11].toFixed(2) + " s");
	$('#peakThrust').text(results.summaryData[12].toFixed(2) + " N");
	$('#averageThrust').text(results.summaryData[13] + " N");
	$('#motorEquivalent').text(results.summaryData[14] );

	$('#apogeeTime').text(results.summaryData[4].toFixed(2) + " s");
	var feet = Math.floor(results.summaryData[5] * 3.280839895);
	$('#apogeeAltitude').html(results.summaryData[5].toFixed(2) + " m   (" + feet + " feet)"  );

	$('#crashdownTime').text(results.summaryData[6].toFixed(2) + " s");
	$('#crashdownVelocity').text(results.summaryData[7].toFixed(2) + " m/s");
	resultsClear=false;
}

var writeRawData = function(results) {
	var str = "Time,Acceleration,Altitude,Velocity,Altitude,Thrust<br>";
	str += "s, m/s/s, m, m/s,feet,N<br>";
	for(var i=0, len=results.jt; i<len; i++){
		str += results.timeData[i].toFixed(6) + ", " + results.accelerationData[i].toFixed(6) + ", " 
			 + results.heightData[i].toFixed(6) + ", " + results.velocityData[i].toFixed(6) + ", " 
			 + (results.heightData[i]*3.28084).toFixed(0) + ", " + results.thrustData[i].toFixed(6)  + "<br>";
	}
	$('#rawData').html(str);
}

var runSimulation = function() {
   /*	
	pressure += 0.4;  // 0.4 - for bug reproduction
	
	pressure = Number($("#pressure").val());
	
	
	var input = { 
					gPressure: 		pressure,		// in bar , absolute? - should be above ambient
					aTemperature: 	298.15,			// Kelvin ???  - 25C
					ltDia: 			0.021, 			// meters ???
					diaNoz: 		0.022,			// meters
					diaBot: 		0.105,			// meters
					CDrag: 			0.5,			// regular drag coefficient units ???
					ltLength: 		0.25, 			// meters ???
					massBot: 		0.1,   			// kilograms ???
					volWat: 		0.0005, 		// liters / 1000
					volBot: 		0.0021, 		// liters / 1000
					lVol: 			0.0005,   		// liters / 1000
					effWat: 		1.0,			// 0-1 ???
					effGas: 		1.0,			// 0-1 ???
					humidity: 		1.0,			// percentage ???
					noz0:			0.28,			// nozzle adjustment 1
					noz1:			0.32,			// nozzle adjustment 2
					noz2:			0.88,			// nozzle adjustment 3
					pressAtm:		101325.0,		// atmospheric pressure
					gravity:		9.807,			// gravity m/s
					gasGamma: 		1.4,
					Rgas: 			8.31451 / 0.028964
				};
   */
	// =====================================================
   //	$('#launcherVolumeSlider1 .slider-selection').css('background', 'rgb(255,255,0)');
   //	var stepSize = $('#launcherVolumeSlider').slider("getAttribute","step");
   //	$('#launcherVolumeSlider').slider('setValue',0);
	
	var results = engine.run(currentParameters);
	
	// =====================================================
	showResultSummary(currentParameters,results);
	writeRawData(results);
/*
	TESTER = document.getElementById('tester');
	Plotly.plot( TESTER, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16] }], {
	margin: { t: 0 } } );
*/

	TESTER = document.getElementById('tester');
	Plotly.newPlot( TESTER, [{
	x: results.timeDataCoast,
	y: results.velocityData }], {
			margin: { t: 40 }, 
			title: "Velocity",
			xaxis: {
				title: 'Time (s)'
			},
			yaxis: {
				title: 'Speed (m/s)'
			}			
		} );

	TESTER2 = document.getElementById('tester2');
	Plotly.newPlot( TESTER2, [{
	x: results.timeDataCoast,
	y: results.heightData }], {
			margin: { t: 40 }, 
			title: "Altitude",
			xaxis: {
				title: 'Time (s)'
			},
			yaxis: {
				title: 'Altitude (m)'
			}			
		} );

	TESTER3 = document.getElementById('tester3');
	Plotly.newPlot( TESTER3, [{
	x: results.timeDataBoost,
	y: results.accelerationData }], {
			margin: { t: 40 }, 
			title: "Acceleration",
			xaxis: {
				title: 'Time (s)'
			},
			yaxis: {
				title: 'Acceleration (g)'
			}			
		} );

	TESTER4 = document.getElementById('tester4');
	Plotly.newPlot( TESTER4, 
		[
			{
				x: results.timeDataBoost,
				y: results.thrustData /*,
				line: {
					color: 'rgb(55, 128, 191)',
					width: 5
				}
				*/
			}, 
			{
				x: [0,  results.summaryData[11],  results.summaryData[11]],
				y: [results.summaryData[13],results.summaryData[13],0],

				mode: 'lines',
				name: 'Average',
				line: {
					color: 'rgb(210, 210, 210)',
					dash: 'dot',
					width: 1
				}		
			}
		], 
		{
			margin: { t: 40 }, 
			// font: {
			// 	size: 20,
			//   },	
			showlegend: false,		
			title: "Thrust",
			xaxis: {
				title: 'Time (s)'
			},
			yaxis: {
				title: 'Thrust (N)'
			}			
		} 
	);
};


/* TODO: uncomment
$('#advancedRocket').hide();
$('#advancedLauncher').hide();
$('#advancedEnvironment').hide();
$('#rawDataPanel').hide();	
*/
//$('#rawData').text("Raw data will appear here for the simulation. You must run the simulation at least once.");
clearResults();
setUIParameters(currentParameters);