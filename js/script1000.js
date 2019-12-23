var hello = "i "

hello = hello + "miss you"




$("p").hover(function(){
	$(this)
	.append(hello)
	.addClass("write")
})