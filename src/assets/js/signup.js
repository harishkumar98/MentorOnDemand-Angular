			function checkpassword() {
			var pass1 = document.getElementById("password");
			var pass2 = document.getElementById("confirm_password");
			if(pass1.value==pass2.value){
			 alert("Password Match");
			}
			else { alert("Password do not match.");}
			} 