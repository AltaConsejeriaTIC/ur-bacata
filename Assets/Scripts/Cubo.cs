using UnityEngine;
using System.Collections;

public class Cubo : MonoBehaviour {

	// Use this for initialization
	public TextMesh Text;

	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	/* para una colision
	void OnCollisionEnter2D(Collision2D collision){
		if (collision.gameObject.tag == "Cilindro") {
						print ("Hay mierdaaa");
						Text.text = "No me toques!!!";
			Destroy(gameObject);
				}
	}
	*/
	// para una colision tipo triger
	void OnTriggerEnter2D(Collider2D otro){
		if(otro.tag == "Cilindro"){
			print("Me chocaste!!!");
			Destroy(gameObject);
			Text.text = "Me tocastes!!";
		}
	}

}
