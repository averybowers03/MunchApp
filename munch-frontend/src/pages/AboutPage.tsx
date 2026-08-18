
import "./AboutPage.css";
import { Link } from 'react-router-dom'; 

function AboutPage() {
    return (
    <section className='screen' id="about">
    
        <div className="section-hdr">
            <div className="header">
                <span>pantry-first cooking</span>
                <h1>Cook from what you've already got</h1>
                <p className="sub">Stock your pantry once. Larder checks it against every recipe you search for, 
                    so results show what you can actually make — not just what looks good.
                </p>
                <div className="auth">
                    <Link to="/dashboard" className="create-btn">Create account</Link>
                   <Link to="/dashboard" className="signin-btn">Sign in instead</Link> 
                </div>
            </div>
            <div className="labels">
                sum
            </div>
        </div>
        <div className="section">
            <div className="steps-header">
                <h2>How it works</h2>
                <span>3 steps, and you'll never how to worry about what to cook again.</span>
            </div>
            <div className="step-by-step">
                <div className="step">
                    <span>01</span>
                    <h3>Stock your Pantry</h3>
                    <p>Add what's in your kitchen — from olive oil to last night's leftover rice. Takes a few minutes, lasts until you say otherwise.</p>
                </div>
                <div className="step">
                    <span>02</span>
                    <h3>Search like normal</h3>
                    <p>Look up any dish, cuisine, or ingredient. Munch quietly checks every result against your shelves.</p>
                </div>
                <div className="step">
                    <span>03</span>
                    <h3>See what's actually possible</h3>
                    <p>Each recipe shows how many ingredients you already have, and exactly what's missing if it's not a full match.</p>
                </div>
            </div>
        </div>
        <div className="section">
            <div className="ex-header">
                <h2>See it in action!</h2>
                <span>A search for “breakfast burrito” — matched against a pantry of 18 staples.</span>
            </div>
            <div className="example-grid">
                <div className="example-card">
                    <img src='' alt=""/>
                    <div className="card-body">
                        <h3>title</h3>
                        <div className="card-meta"> MIN &middot; SERVES </div>
                    </div>
                </div>
                <div className="example-card">
                    <img src='' alt=""/>
                    <div className="card-body">
                        <h3>title</h3>
                        <div className="card-meta"> MIN &middot; SERVES </div>
                    </div>
                </div>
                <div className="example-card">
                    <img src='' alt=""/>
                    <div className="card-body">
                        <h3>title</h3>
                        <div className="card-meta"> MIN &middot; SERVES </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    );
}

export default AboutPage

