import { Component } from "react";
import SideNavbar from "../SideNavbar";
import TopNavbar from "../TopNavbar";

import { HiPlusCircle } from "react-icons/hi2";
import Card from "../Card";
import "./index.css";
import "../NoticePage/index.css";

// Dummy data for posts
const posts = [
  {
    id: 1,
    title: "Community Gathering",
    description:
      "Join us for a community gathering at the central park. There will be games, food, and fun activities for all ages!",
    date: "05/10/23",
    time: "10:00 am",
    image:
      "https://res.cloudinary.com/digbzwlfx/image/upload/v1724995144/Rectangle_44_armnls.png",
  },
  {
    id: 2,
    title: "Fitness Workshop",
    description:
      "We are organizing a fitness workshop with professional trainers. Come and learn about healthy living and exercise routines.",
    date: "12/11/23",
    time: "09:00 am",
    image:
      "https://res.cloudinary.com/digbzwlfx/image/upload/v1724995136/Rectangle_44_1_om1bki.png",
  },
  {
    id: 3,
    title: "Book Club Meeting",
    description:
      "The book club will meet to discuss this month's book. Feel free to join and share your thoughts.",
    date: "21/11/23",
    time: "05:30 pm",
    image:
      "https://res.cloudinary.com/digbzwlfx/image/upload/v1724995129/Rectangle_44_2_v3crvp.png",
  },
];

class PostsMainPage extends Component {
  render() {
    return (
      <div className="apartment-container">
        <SideNavbar />
        <div className="apartment-right-sec">
          <TopNavbar heading="Posts" />
          <div className="apartment-right-main-sec">
            <div className="notice-board">
              <button className="add-notice-btn">
                <span>
                  <HiPlusCircle />
                </span>{" "}
                Create Post
              </button>
              <h2 className="notice-title big">Posts</h2>
              <div className="posts-list">
                {posts.map((post) => (
                  <Card key={post.id} notice={post} type="posts" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostsMainPage;
