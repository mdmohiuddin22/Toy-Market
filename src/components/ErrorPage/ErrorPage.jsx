import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
      <div className=" text-center">
      <img className="object-fill  m-8 rounded-lg " src=" https://mir-s3-cdn-cf.behance.net/project_modules/1400/ba9df9171068429.646882e99f652.jpg" alt="" />
         
         <Link to="/"><button className="btn btn-active btn-primary  ">Get Back Home</button></Link>
      </div>
        </div>
    );
};

export default ErrorPage;