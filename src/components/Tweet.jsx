import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";
import User from "./User";

function Tweet({ tweet }) {

  return (
    <div className="tweet">
      
      <ProfileImage srcImage={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User name={tweet.user.name} handle={tweet.user.handle} />
                                  {/* <span className="user">
                                    <span className="name">{tweet.user.name}</span>
                                    <span className="handle">{tweet.user.handle}</span>
                                  </span> */}

          <Timestamp timeStamp={tweet.timestamp}/>
                                  {/* <span className="timestamp">{tweet.timestamp}</span> */}
        </div>

        <Message messagePass={tweet.message}/>      
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
