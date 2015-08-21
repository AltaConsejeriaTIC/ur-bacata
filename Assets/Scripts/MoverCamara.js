#pragma strict
/* SCRIPT PARA NAGEVAR EN EL ESCENARIO CON LA CAMARA POR MEDIO DE LAS
	FLECHAS DEL TECLADO
*/
var velocidad:float = 2.0;
var angulo : float = 20;

function Start () {

}

function Update () {
	// flecha arriba
	if(Input.GetKey(KeyCode.UpArrow)){
		transform.Translate(0,0,velocidad*Time.deltaTime);
	}
	//flecha abajo
	if(Input.GetKey(KeyCode.DownArrow)){
		transform.Translate(0,0,-velocidad*Time.deltaTime);
	}
	//flecha derecha
	if(Input.GetKey(KeyCode.RightArrow)){
		transform.Rotate(0,angulo*Time.deltaTime,0);
	}
	//flecha izquierda
	if(Input.GetKey(KeyCode.LeftArrow)){
		transform.Rotate(0,-angulo*Time.deltaTime,0);
	}
}