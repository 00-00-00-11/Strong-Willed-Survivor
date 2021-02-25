import React from "react";
import "../styles/index.css";
// import { Link } from "react-router-dom";

function LandingPage() {
	return (
		<div className="App">
			<div className="border-2 border-black bg-pink-500">
				<h1 className="text-lg font-semibold">Strong Willed Survivor!</h1>
			</div>
			<div>
				{/* Main Content */}
				<div className="text-center sm:text-lef p-2 bg-gray-200">
					<h2 className="m-4 text-2xl text-gray-800 border-b-2 ">
						HISTORY OF STRONG WILLED SURVIVOR{" "}
					</h2>
					{/* Cards */}
					<div className="">
						<div className="m-4 bg-white rounded overflow-hidden shadow-md">
							<img
								className="ml-56 flex-shrink md:flex-shrink-0"
								src="https://media.giphy.com/media/IvYSp5i8vN9Mucg7xV/giphy.gif"
								alt="Dancy!"
							/>
							<span className="block">
								It began with an IDEA...COMPASSION...and LOVE by then
								twelve-year old Michael Giles, who in 2014 searched for
								resources in the Hampton Roads area of Virginia, to aid him in
								sorting out his feelings concerning his mother’s cancer
								diagnosis. He was unsuccessful in finding the resources he
								desperately needed and felt this was unacceptable. So, he
								created the first SWS Kids FUN DAY, as a way to provide an
								outlet for not only himself, but other kids and teens
								experiencing similar issues.
							</span>
						</div>
						<p className="m-4">
							After combining Kids FUN Day with some EDUCATION and AWARENESS,
							the first celebration of LIFE was hosted in September 2015. Which
							lead to the creation of Strong Willed Survivor, an organization
							founded by both mother and son with the mission of providing
							awareness; while uplifting and encouraging all through times of
							adversity. They believe that no matter what obstacles a person may
							face if you keep pushing and stayed encouraged; through FAITH,
							HOPE, LOVE and SUPPORT you can find light at the end of the tunnel
							(even if it’s only a glimpse).
						</p>
						<p className="m-4">
							Through the “Family-Focused” workshops, activities, and programs,
							Strong Willed Survivor has been able to reach beyond the Hampton
							Roads area of Virginia and aid children, teens, survivors,
							caregivers of all ages and Angel Families.
						</p>
					</div>

					<p className="m-4 mt-12 pt-2 ">
						To request an application for the Strong Willed Survivor Award, the
						Daisy LaVette-Glover Caregiver’s Award or the Holiday Bundle of
						Blessing Program email: strongwilledsurvivor@gmail.com
					</p>
					<p className="m-4 pt-2">
						Applications for the Strong Willed Survivor and Daisy LaVette Glover
						Caregiver’s Award are accepted Mid- March through August and Holiday
						Bundle of Blessing July - October
					</p>
					<p className="m-4 pt-2">
						Strong Willed Survivor/Beyond The Scars 732 Eden Way N #243, Suite
						E, Chesapeake, Virginia 23320 Website: strongwilledsurvivor.com
						Email: Kina.A@strongwilledsurvivor.com (757) 410-2659{" "}
					</p>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
