enyo.kind({
	name: "Switch",
	kind: enyo.Control,
	
	published: {
        texto: "ALO" ,       		
		luzId: 0
    },
	
	components: [
		{kind: "onyx.ToggleButton", onContent: "ON", offContent: "OFF", onChange: "buttonToggle", texto:this.texto, luzId:0}
	],
	
	create: function() {
        this.inherited(arguments);     
		this.textoChanged()	
    },
	
	textoChanged: function() {
        this.setTexto(this.texto);				
		this.setLuzId(this.luzId);				
    },	
	
	buttonToggle: function(inSender, inEvent) {	
		var x = new enyo.Ajax({url: "http://localhost/toogle.php"});
		x.go({id: this.luzId});
		x.response(this, function(inSender, inResponse) {       
			var woeid = inResponse.data.id;
			this.log(woeid);			
		});
		
		this.log("Toggled to value " + inEvent.value + " " + this.texto);
	}
	
});
