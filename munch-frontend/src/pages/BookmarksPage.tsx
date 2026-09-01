
function BookmarksPage () {

    return (

        <section className="bookmarks-screen">

            <div className="bkmrk-header">
                <h1>Bookmarked</h1>
                <select className="bkmrk-sort">
                    <option>earliest</option>
                    <option>latest</option>
                </select> 
            </div>
            
            <small className="bkmrk-length">## recipes saved</small>
            <div className="bookmark-grid">
                <div className="bookmarked-recipe">
                    <div className="recipe-info">
                        <h3>Title</h3>
                        <span>recipe info</span>
                    </div>
                    <img src="https://spoonacular.com/recipeImages/716429-312x231.jpg" alt=""/>
                </div>

                <div className="bookmarked-recipe">
                    <div className="recipe-info">
                        <h3>Title</h3>
                        <span>recipe info</span>
                    </div>
                    <img src="https://spoonacular.com/recipeImages/716429-312x231.jpg" alt=""/>
                </div>

                <div className="bookmarked-recipe">
                    <div className="recipe-info">
                        <h3>Title</h3>
                        <span>recipe info</span>
                    </div>
                    <img src="https://spoonacular.com/recipeImages/716429-312x231.jpg" alt=""/>
                </div>
                <div className="bookmarked-recipe">
                    <div className="recipe-info">
                        <h3>Title</h3>
                        <span>recipe info</span>
                    </div>
                    <img src="https://spoonacular.com/recipeImages/716429-312x231.jpg" alt=""/>
                </div>
                <div className="bookmarked-recipe">
                    <div className="recipe-info">
                        <h3>Title</h3>
                        <span>recipe info</span>
                    </div>
                    <img src="https://spoonacular.com/recipeImages/716429-312x231.jpg" alt=""/>
                </div>
                <div className="bookmarked-recipe">
                    <div className="recipe-info">
                        <h3>Title</h3>
                        <span>recipe info</span>
                    </div>
                    <img src="https://spoonacular.com/recipeImages/716429-312x231.jpg" alt=""/>
                </div>
            </div>
            
        </section>
        
    );
}
 export default BookmarksPage;