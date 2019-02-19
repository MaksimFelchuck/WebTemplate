function valid (form){
	
	
	var name = form.name.value;
	var password = form.password.value;
	var repassword = form.repassword.value;
	var email = form.mail.value;
	var state = form.state.value;
	var error = (name != '' & email != '' & state != '') ? 'ok' : 'Ошибка';


	if (error == 'ok' & password == repassword){
		alert('Успешно!');
	}else{
		alert('Ошибка!')
	}

}
