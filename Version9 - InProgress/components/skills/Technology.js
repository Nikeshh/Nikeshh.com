const Technology = ({ data={ "name": "", "description": "", "image": "", "learn-more": "" } }) => {
    return (
        <div class="col-md-3 mb-3">
            <div class="card">
                <img class="img-fluid" alt="100%x280" src={ data["image"] } />
                <div class="card-body">
                    <h4 class="card-title">{ data["name"] }</h4>
                    <p class="card-text">
                        { data["description"] }
                    </p>
                    <a href={"projects.html?learn-more=" + data["learn-more"]}>LEARN MORE</a>
                </div>
            </div>
        </div>
    );
}

export default Technology;