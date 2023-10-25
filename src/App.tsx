import React, {useEffect} from 'react';
import {usePlatform} from "./app/hooks";

function App() {
    const platform = usePlatform();

    useEffect(() => {
        console.log(platform)
    }, [platform])

  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
