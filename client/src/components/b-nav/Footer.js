import React from "react";
import "./Footer.css";
// import { Button } from "../NavBar/Button";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">
					Below our all our organizations.
				</p>
				<p className="footer-subscription-text">Feel free to contact us.</p>
				<div className="input-areas">
					{/* <form>
						<input
							className="footer-input"
							name="email"
							type="email"
							placeholder="Your Email"
						/>
					</form> */}
				</div>
			</section>
			<div class="footer-links">
				<div className="footer-link-wrapper">
					<div class="footer-link-items">
						<h2>About Us</h2>
						<Link to="/sign-up">How it works</Link>
						<Link to="/">Testimonials</Link>
						<Link to="/">Investors</Link>
						<Link to="/">Terms of Service</Link>
						<h4>Buisness # (757) SWS-4792</h4>
					</div>
					<div class="footer-link-items">
						<h2>Strong Willed Survivor</h2>
						<a href="https://www.facebook.com/BeyondtheScar/" target="_blank">
							FaceBook
						</a>
						<Link to="/">Support</Link>
						<Link to="/">Destinations</Link>
						<Link to="/">Sponsorships</Link>
					</div>
				</div>
				<div className="footer-link-wrapper">
					<div class="footer-link-items">
						<h2>Kidz Link</h2>
						<a href="https://m.facebook.com/SwS4Life/" target="_blank">
							FaceBook
						</a>
						<a
							href="https://www.instagram.com/swskidzlink/?igshid=qfx8ir2ahmzs"
							target="_blank"
						>
							Instagram
						</a>
						{/* <a href="http://info.swskidz@gmail.com" target="_blank">
							Email
						</a> */}
						<input
							type="submit"
							// class="button"
							value="Mail US"
							onclick="window.location.href='http://info.swskidz@gmail.com'"
						></input>

						<Link to="/">Agency</Link>
						<Link to="/">Influencer</Link>
						<Link to="/">Sponsorships</Link>
					</div>
					<div class="footer-link-items">
						<h2>Beyond Scares</h2>
						<Link to="/">Instagram</Link>
						<Link to="/">Facebook</Link>
						<Link to="/">Youtube</Link>
						<Link to="/">Twitter</Link>
						<Link to="/">Sponsorships</Link>
					</div>
				</div>
			</div>
			<section class="social-media">
				<div class="social-media-wrap">
					<div class="footer-logo">
						<Link to="/" className="social-logo">
							SWS
							<i class="fab fa-typo3" />
						</Link>
					</div>
					<small class="website-rights">SWS ?? 2021</small>
					<div class="social-icons">
						<Link
							class="social-icon-link facebook"
							to="/"
							target="_blank"
							aria-label="Facebook"
						>
							<i class="fab fa-facebook-f" />
						</Link>
						<Link
							class="social-icon-link instagram"
							to="/"
							target="_blank"
							aria-label="Instagram"
						>
							<i class="fab fa-instagram" />
						</Link>
						<Link
							class="social-icon-link youtube"
							to="/"
							target="_blank"
							aria-label="Youtube"
						>
							<i class="fab fa-youtube" />
						</Link>
						<Link
							class="social-icon-link twitter"
							to="/"
							target="_blank"
							aria-label="Twitter"
						>
							<i class="fab fa-twitter" />
						</Link>
						<Link
							class="social-icon-link twitter"
							to="/"
							target="_blank"
							aria-label="LinkedIn"
						>
							<i class="fab fa-linkedin" />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
