import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CareerGuidence from "./components/CareerGuidence/CareerGuidence";
import { Switch, Route } from "react-router-dom";
import JoinPage from "./components/SignPage/JoinPage";
import NoticePage from "./components/NoticePage/NoticePage";
import CollegePage from "./components/CollegePage/CollegePage";
import EntrancePreparation from "./components/BridgeCoursePage/EntrancePreparation";
import TeachersTeamPage from "./components/BridgeCoursePage/TeachersTeamPage";
import KeyDatesPage from "./components/BridgeCoursePage/KeyDatesPage";
import ResourcesPage from "./components/BridgeCoursePage/ResourcesPage";
import Forms from "./components/BridgeCoursePage/Forms";
import AddTeacher from "./components/Database/AddTeacher";
import TeachersTeam from "./components/BridgeCoursePage/TeachersTeam";
import AddCollege from "./components/Database/AddCollege";
import SignUpPage from "./components/SignPage/SignUpPage";
import WistListPage from "./components/WishList/WistListPage";
import ScienceForm from "./components/Forms/ScienceForm";
import ManagementForm from "./components/Forms/ManagementForm";
import HumanitiesForm from "./components/Forms/HumanitienFrom";
import Questions from "./components/QuestionBank/Questions";
import NotFound from "./components/404/NotFound";
import FileInput from "./components/FileInput/FileInput";

const notfound = () => {
  return <NotFound />;
};
function App() {
  const [slug, setSlug] = useState("college1");
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/carrerguidence" exact component={CareerGuidence} />
        <Route
          path="/entrancepreparation"
          exact
          component={EntrancePreparation}
        />
        <Route path="/join" exact component={JoinPage} />
        <Route path="/science" exact component={ScienceForm} />
        <Route path="/management" exact component={ManagementForm} />
        <Route path="/humanities" exact component={HumanitiesForm} />
        <Route path="/wishlist" exact component={WistListPage} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/addteachers" exact component={AddTeacher} />
        <Route path="/addcollege" exact component={AddCollege} />
        <Route path="/teachers" exact component={TeachersTeam} />
        <Route path="/resources" exact component={ResourcesPage} />
        <Route path="/key-dates" exact component={KeyDatesPage} />
        <Route path="/forms" exact component={Forms} />
        <Route path="/fi" exact component={FileInput} />
        <Route path="/attemptexams" exact component={Questions} />
        <Route path="/notices" exact component={NoticePage} />
        <Route path={`/college/:${slug}`} exact component={CollegePage} />
        <Route component={notfound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
