
//import Navbar from "../components/Navbar";
import './Dashboard.css';

function Dashboard() {
  return (
    <section className="screen" id="home">

        <div className="search-bar">
          <input type="text" placeholder="Search for a recipe..." />
        </div>

      <div className="filter-bar">
        <label className="toggle-chip"><span className="switch"></span>Only show what I can make</label>
        <select className="sort-select"><option>Best match first</option><option>Quickest first</option><option>Newest first</option></select>
      </div>

      <div className="results-header">
        <h2>Results</h2>
        <p>Showing 1-10 of 100 recipes</p>
      </div>

      <div className="recipe-grid">

        <div className="recipe-card">
          <img src="https://loremflickr.com/640/420/quinoa,bowl" alt=""/>
          <div className="card-body">
            <h3>Roasted Vegetable Quinoa Bowl</h3>
            <div className="card-meta">35 MIN &middot; 2 SERVINGS</div>
            <span className="chip-full">Fully stocked</span>
          </div>
        </div>
        
      </div>  
        
    </section>
  );
}

export default Dashboard;