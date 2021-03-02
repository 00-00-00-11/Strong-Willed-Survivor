import React from "react";
import img1 from "../images/main/IMG_8599.jpg";
import "../App.css";
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
					first Celebration of LIFE was hosted in September 2015. Which lead to
					the creation of Strong Willed Survivor, an organization founded by
					both mother and son with the mission of providing awareness; while
					uplifting and encouraging all through times of adversity. They believe
					that no matter what obstacles a person may face if you keep pushing
					and stayed encouraged; through FAITH, HOPE, LOVE and SUPPORT you can
					find light at the end of the tunnel (even if it’s only a glimpse).
				</p2>
			</div>
		</div>
	);
}
