// import { useState } from "react";
// import image from './logo.png'
// import  {viewAllScheduledActivity,elem}  from '../components/ViewScheduledActivity';
// import addScheduledActivity from '../components/AddScheduledActivity';
// import { viewScheduledActivityService, addScheduledActivityService } from "../services/ScheduledActivityService";
// // import {viewScheduledActivity } from '../redux/ScheduledActivitySlice';
//  import { useDispatch, useSelector } from "react-redux";

// const ScheduledActivity = () => {
//     const obj = {name: "John"};
//     const myJSON = JSON.stringify(obj);
//     const [state, setState] = useState({ Content: elem, Items: myJSON })
//     const Content = state.Content;
//     const Items = state.Items;

//     function addprops() {
//         setState(Content => {
//             return { Content: addScheduledActivity }
//         });
//     }

//     function viewprops() {
//         setState(Content => {
//             return { Content: viewAllScheduledActivity }
//         });
//     }

//     // function get_Data() {
//     //     const d = viewScheduledActivityService();
//     //     const d1 = Promise.resolve(d);
//     //     d1.then(value => {
//     //         let val = JSON.stringify(value.data);
//     //         console.log(val);
//     //         setState(Items => {
//     //             return { Items: val }
//     //         });
//     //     }).catch(e => {
//     //         console.log(e);
//     //     });
//     // }

//     return (
//         <div>

//             <div className="header-dark">
//                 <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
//                     <div className="container"><a className="navbar-brand" href="#"><img width="200px" height="100px" src={image} /></a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
//                         <div className="collapse navbar-collapse"
//                             id="navcol-1">
//                         </div>
//                     </div>
//                 </nav>
//             </div>



//             <div className="container ">



//                 <p className="display-4 text-light text-center">ScheduledActivity</p>
//                 <div className="Container justify-content-center">
//                     <p className="text-center text-light">ScheduledActivity data</p>
//                     <input
//                         type="submit"
//                         className="btn btn-warning form-control mb-3 mt-3"
//                         value="Add ScheduledActivity "
//                         onClick={addprops}
//                     ></input>
//                     <Content />
//                     <input
//                         type="submit"
//                         className="btn btn-warning form-control mb-3 mt-3"
//                         value="View ScheduledActivity "
//                         onClick={ viewprops }

//                     />
//                 </div>

//             </div >
//         </div>
//     );
// }

// export default ScheduledActivity;