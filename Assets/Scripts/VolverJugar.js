#pragma strict
private var Boton : BoxCollider2D;

function Start () {
	
}

function Update () {

}

function Presione(){
	
	/*
	for(toque:Touch in Input.touches) {
			if (toque.phase != TouchPhase.Ended && toque.phase != TouchPhase.Canceled)
				numPresiones++;
	}*/
	if (Input.GetMouseButtonDown (0)) {
		print("siii");
			var posicionTap : Vector3 = Camera.main.ScreenToWorldPoint(Input.mousePosition);
			var posicionTap2D : Vector2 = new Vector2(posicionTap.x, posicionTap.y);
			var presiono: boolean = Boton.OverlapPoint(posicionTap2D);
			if (presiono) {
				transform.localScale=new Vector3(0.7f,0.7f,transform.localScale.z);
				print("siii");
			}
	}

}

function OnMouseDown(){
	Invoke("cargar",1);
}

function cargar(){
	Application.LoadLevel("texto");
}