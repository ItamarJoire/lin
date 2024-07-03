import { Button } from "./components/button";

export function App(){
	return(
		<div>
			<Button name='Primário'/>
			<Button has={false} name='Secundário'/>
		</div>
	)
}

