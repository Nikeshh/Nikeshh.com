const SkillCard = ({ data, name }) => {
    return (
        <div class="row g-0 rounded overflow-hidden flex-md-row h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">{ name }</strong>
                <h3 class="mb-0 blog-card-text">{ data["name"] }</h3>
                <div class="mb-1 text-muted">{ data["learn-more"] }</div>
                <p class="card-text mb-auto blog-card-text">{ data["description"].length > 150 ? data["description"].substring(0, 150) + "..." : data["description"] }</p>
                <a href={"skill-single.html?learn-more=" + data["learn-more"]} class="stretched-link blog-card-text">Learn More</a>
            </div>
            <div class="col-auto d-none d-lg-block">
                <img alt={ data["name"] } src={ data["image"] } class="img-fluid" />
            </div>
        </div>
    );
}

export default SkillCard;