
import Navbar from "../components/Navbar";

function PantryPage() {
  return (
    <section className="screen" id="pantry">   
       <div>
        <Navbar />
        <h1>My Pantry</h1>
        <small>*blank* items available</small>
        {/* Add your pantry page content here */}
        </div>
    </section>
  );
}

export default PantryPage;