import React from "react";
import img1 from "../images/main/IMG_8599.jpg";
// import video from "../videos/video-1.mp4";
import "../App.css";
import ReactPlayer from "react-player"; // Render a YouTube video player

export default function Products() {
	return (
		<div>
			<div>
				<h1 className="products">About Us</h1>
			</div>
			<div className="about-page-css ">
				<h2>HISTORY OF STRONG WILLED SURVIVOR </h2>
				<img className="about_p_images" src={img1} alt="logo"></img>
				<p>
					It began with an IDEA...COMPASSION...and LOVE by then twelve-year old
					Michael Giles,who in 2014 searched for resources in the Hampton Roads
					area of Virginia, to aid him in sorting out his feelings concerning
					his mother’s cancer diagnosis. He was unsuccessful in finding the
					resources he desperately needed and felt this was unacceptable. So, he
					created the first SWS Kids FUN DAY, as a way to provide an outlet for
					not only himself, but other kids and teens experiencing similar
					issues.
				</p>
				<p2>
					After combining Kids FUN Day with some EDUCATION and AWARENESS, the
					first situation how one desperately yearns for some sense of normalcy.
					Through our partnerships with license chefs, caterers, and
					restaurants, SURVIVOR and Angel Families in Hampton Roads, Virginia
					and beyond (Gordonsville, Virginia, Elizabethtown, Kentucky,
					California, South Carolina and Pennsylvania) have received fully
					cooked holiday meals (with a menu of their choosing) delivered to
					their homes (or made available for pickup) FREE of charge to enjoy
					with their immediate family during the holidays.
				</p2>
				<ReactPlayer
					url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
					controls="true"
					width="540px"
					height="325px"
				/>
				<p className="bounce">
					Celebration of LIFE was hosted in September 2015. Which lead to the
					creation of Strong Willed Survivor, an organization founded by both
					mother and son with the mission of providing awareness; while
					uplifting and encouraging all through times of adversity. They believe
					that no matter what obstacles a person may face if you keep pushing
					and stayed encouraged; through FAITH, HOPE, LOVE and SUPPORT you can
					find light at the end of the tunnel (even if it’s only a glimpse).
					<br></br>
					<br></br>
					Through the “Family-Focused” workshops, activities, and programs,
					Strong Willed Survivor has been able to reach beyond the Hampton Roads
					area of Virginia and aid children, teens, survivors, caregivers of all
					ages and Angel Families.
				</p>
			</div>
		</div>
	);
}
