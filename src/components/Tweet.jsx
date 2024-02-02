import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";
import User from "./User";

// function Tweet(props) {

//   return (
//     <div className="tweet">
      
//       <ProfileImage srcImage={props.image} />

//       <div className="body">
//         <div className="top">
//           <User name={props.name} handle={props.handle} />
//                                   {/* <span className="user">
//                                     <span className="name">{tweet.user.name}</span>
//                                     <span className="handle">{tweet.user.handle}</span>
//                                   </span> */}

//           <Timestamp timeStamp={props.timestamp}/>
//                                   {/* <span className="timestamp">{tweet.timestamp}</span> */}
//         </div>

//         <Message messagePass={props.messageFromApp}/>      
//                                   {/* <p className="message">
//                                       {tweet.message}
//                                   </p> */}
        
//         <Actions />
//                                   {/* <div className="actions">
//                                     <i className="far fa-comment" data-testid="comment-icon"></i>
//                                     <i className="fas fa-retweet" data-testid="retweet-icon"></i>
//                                     <i className="far fa-heart" data-testid="heart-icon"></i>
//                                     <i className="fas fa-share" data-testid="share-icon"></i>
//                                   </div> */}
//       </div>

//       <i className="fas fa-ellipsis-h"></i>
//     </div>
//   );


// }
////////////////////// Wiout Props ///////////////////////////

function Tweet({ tweeten }) {

  return (
    <div className="tweet">
      
      <ProfileImage srcImage={tweeten.user.image} />

      <div className="body">
        <div className="top">
          <User name={tweeten.user.name} handle={tweeten.user.handle} />
                                  {/* <span className="user">
                                    <span className="name">{tweet.user.name}</span>
                                    <span className="handle">{tweet.user.handle}</span>
                                  </span> */}

          <Timestamp timeStamp={tweeten.timestamp}/>
                                  {/* <span className="timestamp">{tweet.timestamp}</span> */}
        </div>

        <Message messagePass={tweeten.message}/>      
                                  {/* <p className="message">
                                      {tweet.message}
                                  </p> */}
        
        <Actions />
                                  {/* <div className="actions">
                                    <i className="far fa-comment" data-testid="comment-icon"></i>
                                    <i className="fas fa-retweet" data-testid="retweet-icon"></i>
                                    <i className="far fa-heart" data-testid="heart-icon"></i>
                                    <i className="fas fa-share" data-testid="share-icon"></i>
                                  </div> */}
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );


}

export default Tweet;
