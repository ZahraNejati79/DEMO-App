import { Route } from "react-router";
import Download from "../components/Download";
import SideBar from "../components/SideBar";
import Upload from "../components/Upload";

const Profile = () => {
  return (
    <>
      <p> پروفایل</p>
      <SideBar />
      <Route path="/profile/download" component={Download} />
      <Route path="/profile/upload" component={Upload} />
    </>
  );
};

export default Profile;
