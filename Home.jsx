import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';

 {/*<div className = "absolute top-28 left-0 right-0 z-10 flex item-center justify-center">
        POPUP
    </div>*/} 

const Home = () => {

  const adjustIslandForScreenSize = () => {
    let screenScale = null; 
    let screenPosition = [0,-1.9,-6];
    let islandRotation = [0, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9,0.9,0.9];
     
    }else{
      screenScale = [1,1,1];

    }
    return [screenScale, screenPosition, islandRotation];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  return (
   <section className = "w-full h-screen" relative>  
    <Canvas className = "w-full h-screen bg-transparent" camera ={{near :0.1, far:1000, }}>
         <Suspense fallback = {<Loader />}>  
             <directionalLight />
             <ambientLight />
             <pointLight />
            <hemisphereLight />
            
            <Island 
            position = {islandPosition}
            scale = {islandScale}
            rotation = {islandRotation}
            /> 

        </Suspense>

        </Canvas>
   </section>
  )
}

export default Home
