//This is window class like Java for jQuery UI
var Frame = function(str){
	this.mainElement = $("<div id=\"temp_" + new Date().getTime() + "\"><div class=\"wrapper\"></div></div>") ;
	this.mainElement.dialog({
		title : str ,
		autoOpen : false ,
		draggable : true ,
		resizable : true ,
		modal : false
	}) ;
	this.remove = function(){
		this.mainElement.dialog("destroy") ;
	}
	this.setWidth = function(width){
		this.mainElement.dialog("option" , "width" , width) ;
	}
	this.setContent = function(s){
		this.mainElement.children(".wrapper").html(s)
	}
	this.setVisible = function(isvisible){
		if(isvisible) this.mainElement.dialog("open")
		else this.mainElement.dialog("close") ;
	}
	this.setHeight = function(height){
		this.mainElement.dialog("option" , "height" , height) ;
	}
	this.setButton = function(obj){
		this.mainElement.dialog("option" , "buttons" , obj) ;
	}
	this.setModal = function(ismodal){
		if(ismodal) this.mainElement.dialog("option" , "modal" , ismodal)
		else this.mainElement.dialog("option" , "modal" , ismodal) ;
	}
	this.setTitle = function(str){
		this.mainElement.dialog("option" , "title" , str) ;
	}
	this.setResizable = function(isresizable){
		this.mainElement.dialog("option" , isresizable) ;
	}
	this.setLocation = function(x , y){
		this.mainElement.dialog("position" , [x , y]) ;
	}
	this.setPosition = function(x , y){
		this.mainElement.dialog("position" , [x , y]) ;
	}
	this.addEventListener = function(str , func){
		this.mainElement.bind(str , func) ;
	}
	this.getTitle = function(str){
		return this.mainElement.dialog("option" , "title") ;
	}
	this.getWidth = function(){
		return this.mainElement.dialog("option" , "width") ;
	}
	this.getHeight = function(){
		return this.mainElement.dialog("option" , "height") ;
	}	
	this.isModal = function(){
		return this.mainElement.dialog("option" , "modal") ;
	}
	this.isResizable = function(){
		return this.mainElement.dialog("option" , "resizable") ;
	}
	this.getWindowElement = function(){
		return this.mainElement ;
	}
}