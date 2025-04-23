import "./LandingPage.css"
import img from '../assets/salon-riham.jpg'

function LandingPage() {
    return (
        <section id="home" className="landing-page">
            <div className="hero">
                <div className="hero-content">
                    <h1>Révélez votre beauté, simplement.</h1>
                    <p>
                        Des soins personnalisés pour vous sentir belle, chaque jour.
                    </p>
                    <div className="cta-buttons">
                        <a href="#products" className="btn primary">
                            Explore Our Products
                        </a>
                        <a href="#contact" className="btn secondary">
                            Contact Us
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={img} alt="Craftsman at work" />
                </div>
            </div>

            <div id="about" className="about-section">
                <h2>💇‍♀️ Notre histoire</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                        Depuis toujours, notre passion est de sublimer la beauté de chaque femme avec soin et authenticité. Chaque geste, chaque soin reflète notre savoir-faire, notre patience et notre amour du métier.
                        </p>
                        <p>
                        Aujourd’hui, grâce aux outils modernes, nous vous offrons une expérience unique — sans jamais renoncer à la qualité, ni à la chaleur humaine qui font notre identité.
                        </p>
                    </div>
                    <div className="values">
                        <div className="value-item">
                            <h3>Qualité</h3>
                            <p>Produits haut de gamme et soins réalisés avec précision</p>
                        </div>
                        <div className="value-item">
                            <h3>Authenticité</h3>
                            <p>Une approche sincère, respectueuse de chaque beauté naturelle</p>
                        </div>
                        <div className="value-item">
                            <h3>Bien-être</h3>
                            <p>Un moment de détente et de douceur, pensé pour vous</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default LandingPage
