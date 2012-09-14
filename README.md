=============
jQueryWindows
=============

What is it?
=============
This is window class like java for jQuery UI.

	//test
	var frame = new Frame() ;
	frame.setContent( '<div>Hello , World!</div>') ;
	frame.setWidth( 400 ) ;
	frame.setHeight( 400 ) ;
	frame.setVisible( true ) ;
	frame.addEventListener("click" , function(){
		frame.setContent( frame.getContent() + "<div>Clicked!</div>") ;
	}) ;

	