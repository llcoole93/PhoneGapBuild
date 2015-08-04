var strName
window.onload = function()
{
	window.alert("Welcome to my web page \r Have a good time" );
	strName = window.prompt("What your name", "Kilroy");
	console.log(strName);
	$('#greeting>p').text('Hey,' + ' ' + strName);
	$('#body-btn').click(function(){
		var pageThoughts = window.confirm("Do you think my page is tight yo?"); 
		if (pageThoughts == true) { 
			$('.pageThoughts').text("Thank you for thinking my page is cool!");
		}
		else if(pageThoughts == false){
			$('.pageThoughts').text("Thank you for thinking my page is lame, D-bag!");
		}


});
}


