import React ,{useState} from "react";//1.importar el hook useState de react

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
 
const Home = () => {

	//2.declaracion de estados
	const [tarea1, setTarea1]=useState("");
	const [add, setAdd]=useState([]);
	const[visible,setVisible] = useState("none");
	const[hoverIndex,setHoverIndex] =useState(null);

	
//funciones del paso 3
	function handleTarea1(event){
			setTarea1(event.target.value);

		}
	

	
	function handleAdd(event){
		if(event.key === "Enter"){
			const nuevosDatos = [...add, tarea1];
			setAdd(nuevosDatos);
			console.log(add);
			event.target.value = "";
		}
	}
	function deleteList (item) {
			setAdd((prevState) =>
			  prevState.filter((e,index) => index !== item)
			  
			)
		  }
	function mouseOn(index){
		setVisible("flex");
		setHoverIndex(index);
		

	}
	function mouseOff(){
		setVisible("none");
	}
	
	return (
	<div style={{backgroundColor:"blue"}}>
		<div className="w-50 mx-auto"style={{backgroundColor:"yellowgreen"}}>
			<h1>Todos</h1>
   	 	
      
     	 <input type="text" className="form-control" aria-label="Large" placeholder="introduce una tarea" onChange={handleTarea1} onKeyUp={handleAdd}/>
	  		<ul style={{ listStyleType:"none", display:"flex", flexDirection:"column",gap:"10px"}}>
				{add.map((item, index) => (
         			 <li key={index} style={{ fontWeight:"700",display:"flex", justifyContent:"space-between" ,alignItems:"center"}}onMouseEnter={()=> mouseOn(index)} onMouseLeave={mouseOff}>
            		{item}
					<span style={{ display: hoverIndex === index ? visible :"none"}}  onClick={() => deleteList(index)}>X</span>
          			</li>
       				 ))}
			</ul>
			<span style={{backgroundColor:"yellow"}}> {add.length} items left</span>
		</div>
	</div>
   
    
    
    



		
	)
				};				

export default Home;
