import "./App.css";
import "./style/style.css"
import imageInSrc from "./images/imageInSrc.jpg"
import reactjsVideo from "./video/reactjsVideo.mp4"

function App() {
  return (
    <>
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
        <h1 class="title red">Khalil harizi</h1>

        <br/>

        <img src={imageInSrc} alt="imageinsrc"/>

        <br/>

        <img src="/images/imageInPublic.jpg" alt="imageinpublic" />
      </div>

      <video width="320" height="240" controls>
        <source src={reactjsVideo} type="video/mp4" />
      </video>
    </>
  );
}

export default App;
