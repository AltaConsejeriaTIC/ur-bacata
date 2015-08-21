	#pragma strict

var Text : TextMesh;
var Puntos:int;

function Start () {
	Puntos = CrearEstructuras.Puntos;
}

function Update () {

}

function OnTriggerEnter2D(otro: Collider2D){
	print("Valor de puntos: "+Puntos);
	if(otro.tag == "Cilindro"){
		print("Me chocaste!!!");
		Destroy(gameObject);
		Puntos = Puntos - 1;
		Text.text = "Puntos: "+Puntos;
	}
	return true;
}