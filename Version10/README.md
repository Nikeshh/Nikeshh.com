Adding react directly to the website:
https://reactjs.org/docs/add-react-to-a-website.html

Command to convert jsx to js which is faster in production:
npx babel --watch components --out-dir ./src --presets react-app/prod
The above command converts the jsx in the components directly into js in production

data-bs-interval="false" stops the carousel to scroll in bootstrap. If scroll is need, remove data-bs-interval="false" and add data-bs-ride="carousel"

Add in index.html for maintenance or development mode:
<div class="row">
    <p class="d-flex justify-content-center fw-bold fst-italic">This website is under development. Some of the sections will have placeholders.</p>
    <p class="d-flex justify-content-center fw-bold fst-italic">If you are trying to contact me, reach out directly at nikeshhbaskaran01@gmail.com or +1 (416)-834-5350</p>
</div>