function handleSubmit(){
	let name = document.getElementById('txtName').value;
	let male =  document.getElementById('rbMale').checked;
	let female =  document.getElementById('rbFemale').checked;
    let region = document.getElementById('slcRegion').value;
	let password = document.getElementById('txtPassword').value;
    let agree = $('#cbTermsConditions').is(":checked");
	let hasError = false;

	//Name
	if (name === "" || name.length < 3) {
		$('#errName').show();
		hasError = true;
	}
	else
		$('#errName').hide();

	//Gender
	if(!male && !female){
		$('#errGender').show();
		hasError = true;
	}
	else
		$('#errGender').hide();

	//Region
    if(region === ""){
        $('#errRegion').show();
        hasError = true;
    }
	else
		$('#errRegion').hide();

	//Password
	if(password === "" || password.length < 8){
		$('#errPassword').show();
		hasError = true;
	}
	else
		$('#errPassword').hide();

	//Agreement
	if(!agree){
		$('#errTermsConditions').show();
		hasError = true;
	}
	else
		$('#errTermsConditions').hide();

	if(!hasError){
		alert("Registration Success");
		ResetField();
	}

	return !hasError;
}

function ResetField(){
	document.getElementById('txtName').value = "";
	document.getElementById('txtAddress').value = "";
	document.getElementById('rbMale').checked = false;
	document.getElementById('rbFemale').checked = false;
    document.getElementById('slcRegion').value = "idn";
	document.getElementById('txtPassword').value = "";
    document.getElementById('cbTermsConditions').value = "";
}