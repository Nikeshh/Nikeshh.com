import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingScreen from './components/LoadingScreen';
import HomeScreen from './components/HomeScreen';
import NotFoundScreen from './components/NotFoundScreen';
import PrivateRouter from "./util/private_router.js";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoadingScreen} exact />
        <Route path="/home" component={HomeScreen} exact />
        <Route path="/about" component={AboutScreen} exact />
        <Route path="/skillsingle" component={SkillSingle} exact />
        <Route path="/certifications" component={Certifications} exact />
        <Route path="/projects" component={SkillSingle} exact />
        <Route path="/blog" component={SkillSingle} exact />
        <Route path="/learning" component={Learning} exact />
        <Route path="/newsletter" component={NewsLetter} exact />
        <Route path="/patreon" component={Patreon} exact />
        <Route path="/books" component={Books} exact />
        <Route path="/forum" component={Forum} exact />
        <Route path="/roadmap" component={Roadmap} exact />
        <PrivateRouter path="/community" component={OrderScreen} />
        <PrivateRouter path="/courses" component={OrderScreen} />
        <Route path="/knowledgebase" component={Roadmap} exact />
        <Route path="/subscription" component={Roadmap} exact />
        <Route path="/affiliate" component={Roadmap} exact />
        <Route path="/shop" component={Roadmap} exact />
        <Route path="/login" component={Roadmap} exact />
        <Route path="/register" component={Roadmap} exact />
        <Route path="*" component={NotFoundScreen} />
      </Switch>
    </Router>
  );
};

export default App;