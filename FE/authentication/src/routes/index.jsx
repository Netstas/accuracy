import Login from "../page/custom/Auth/Login";
import Register from "../page/custom/Auth/Register";
import UploadImage from "../page/custom/Auth/UploadImage";
import Relationship from "../page/custom/Auth/Relationship";
import CheckImage from "../page/custom/Auth/CheckImage";
import CheckRelationship from "../page/custom/Auth/CheckRelationship";
const publicRoute = [
  {
    path: "/",
    component: Login,
  },

  {
    path: "/register",
    component: Register,
  },
  {
    path: "/uploadimage",
    component: UploadImage,
  },
  {
    path: "/relationship",
    component: Relationship,
  },
  {
    path: "/checkImage",
    component: CheckImage,
  },
  {
    path: "/checkrelationship",
    component: CheckRelationship,
  },
];

export { publicRoute };
