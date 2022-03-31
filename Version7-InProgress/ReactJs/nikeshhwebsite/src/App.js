import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingScreen from './components/LoadingScreen';
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import SkillSingleScreen from './components/SkillSingleScreen';
import CertificationsScreen from './components/CertificationsScreen';
import ProjectsScreen from './components/ProjectsScreen';
import BlogScreen from './components/BlogScreen';
import LearningScreen from './components/LearningScreen';
import NewsletterScreen from './components/NewsletterScreen';
import PatreonScreen from './components/PatreonScreen';
import BooksScreen from './components/BooksScreen';
import ForumScreen from './components/ForumScreen';
import RoadmapScreen from './components/RoadmapScreen';
import CommunityScreen from './components/CommunityScreen';
import CoursesScreen from './components/CoursesScreen';
import KnowledgeBaseScreen from './components/KnowledgeBaseScreen';
import SubscriptionScreen from './components/SubscriptionScreen';
import AffiliateScreen from './components/AffiliateScreen';
import MerchandiseScreen from './components/MerchandiseScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import NotFoundScreen from './components/NotFoundScreen';
import PrivateRouter from "./util/private_router.js";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoadingScreen} exact />
        <Route path="/home" component={HomeScreen} exact />
        <Route path="/about" component={AboutScreen} exact />
        <Route path="/skillsingle" component={SkillSingleScreen} exact />
        <Route path="/certifications" component={CertificationsScreen} exact />
        <Route path="/projects" component={ProjectsScreen} exact />
        <Route path="/blog" component={BlogScreen} exact />
        <Route path="/learning" component={LearningScreen} exact />
        <Route path="/newsletter" component={NewsletterScreen} exact />
        <Route path="/patreon" component={PatreonScreen} exact />
        <Route path="/books" component={BooksScreen} exact />
        <Route path="/forum" component={ForumScreen} exact />
        <Route path="/roadmap" component={RoadmapScreen} exact />
        <PrivateRouter path="/community" component={CommunityScreen} />
        <PrivateRouter path="/courses" component={CoursesScreen} />
        <Route path="/knowledgebase" component={KnowledgeBaseScreen} exact />
        <Route path="/subscription" component={SubscriptionScreen} exact />
        <Route path="/affiliate" component={AffiliateScreen} exact />
        <Route path="/merchandise" component={MerchandiseScreen} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/register" component={RegisterScreen} exact />
        <Route path="*" component={NotFoundScreen} />
      </Switch>
    </Router>
  );
};

export default App;