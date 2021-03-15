import React, { PureComponent } from "react";
import paypalIMG from "../images/main/paypal-css-pic.png";

export class dontate extends PureComponent {
	render() {
		return (
			<div>
				<div className="donations-page-css ">
					<h1>Help Support Us!</h1>
					<div className="donations-page-css"></div>

					<img
						className="donation-page-img-css"
						src={paypalIMG}
						alt="Paypal buttom image"
					></img>
					{/* Paypal button */}
					<div>
						<form
							className="paypal-button"
							action="https://www.paypal.com/donate"
							method="post"
							target="_top"
						>
							<input
								type="hidden"
								name="hosted_button_id"
								value="LHLTBSJYS7W8C"
							/>
							<input
								type="image"
								src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
								border="0"
								name="submit"
								title="PayPal - The safer, easier way to pay online!"
								alt="Donate with PayPal button"
							/>
							<img
								alt=""
								border="0"
								src="https://www.paypal.com/en_US/i/scr/pixel.gif"
								width="1"
								height="1"
							/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default dontate;
