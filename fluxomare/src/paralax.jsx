import './index.css'
import './App.css';
import * as images from "./assets/img";

function Paralax() {
    return (
        <section className="paralax">
            
            <div className="paralax-bg">
                <video
                    className="paralax-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={images.videoPro} type="video/mp4" />
                </video>
            </div>


            <div className="paralax-content">
                <h2>Fluxo Maré</h2>
                <p>
                    tudo que flui encontra o oceano</p>
            </div>
        </section>
    );
}

export default Paralax;