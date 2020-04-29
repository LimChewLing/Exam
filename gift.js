alert("Wish you a Merry Chritsmas and a Happy New Year!")

function heyjude()
	{
		if (document.form.name.value.length < 1)
		{
			alert("Santa Clause don't know your name");
			return false;
		}
		if (document.form.say.value.length < 10)
		{
			alert("Don't you want to talk to Santa Clause?");
			return false;
		}
		if (document.form.address.value.length <15) 
		{
			alert("Santa Clause will get lost");
			return false;
		}	
		return true;
	}