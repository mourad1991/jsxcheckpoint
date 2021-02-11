import src from './src.svg';
import './App.css';

function App() {
  return (
    <div className="App">

<div style={{ border:"solid 1px black",maxWidth:"100vw" }}>

 <h1 className='title red'>mourad</h1>

 <br />
{/* image sous le source ² */}
<h2>image sous le folder source</h2>
 <img src={src} alt="imageInSrc" />

 <br />
<h2>image sous le folder public</h2>

<img src={"/image_public.png"} alt="imageInPublic" />

</div>

<video width={"320"} height={"240"} controls>

 <source src={"myVideo.mp4"} type={"video/mp4"} />

</video>
    </div>
  );
}

export default App;
