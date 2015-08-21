	#pragma strict

var Text : TextMesh;
var TxtPerdio : TextMesh;


protected var Posicion : Transform;

static var PuntosMal:int=0;

function Start () {
//	audio.Play();
}

function Update () {
	 
	Posicion = transform;
}
//OnMouseDown()
function OnTriggerEnter2D(otro: Collider2D){
	
	if(otro.tag == "Cilindro"){
		print("Me chocaste!!!");
		Destroy(gameObject);
		PuntosMal += 1;
		Text.text = "Mal: "+PuntosMal;
	}
	if(PuntosMal>4){
		TxtPerdio.text = "Perdio";
		cargar();
		//Invoke("cargar",1);
		//audio.Play();
	}
}

function cargar(){
	Application.LoadLevel("Fin");
}