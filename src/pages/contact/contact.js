import React from "react";
import './contact.css';

export default function Contact() {
	window.addEventListener("DOMContentLoaded", function() {
		const form = document.getElementById("my-form");
		const button = document.getElementById("contact-button");
		const status = document.getElementById("my-form-status");

		function success() {
			form.reset();
			button.style = "display: none ";
			status.innerHTML = "Your message has been sent. Thanks!";
		}
		function error() {
			status.innerHTML = "Oops! There was a problem.";
		}
		form.addEventListener("submit", function(ev) {
			ev.preventDefault();
			let data = new FormData(form);
			ajax(form.method, form.action, data, success, error);
		});
	});

	function ajax(method, url, data, success, error) {
		let xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = function() {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				success(xhr.response, xhr.responseType);
			} else {
				error(xhr.status, xhr.response, xhr.responseType);
			}
		};
		xhr.send(data);
	}

	return (
		<form id="my-form" action="https://formspree.io/mwkrnppq" method="POST">
			<input placeholder="Name"
			       type="text"
			       name="name"
			       className="form-name-field" required/>
			<input placeholder="Email"
			       type="email"
			       name="email"
			       className="form-email-field" required/>
			<textarea placeholder="Message"
			          name="message"
			          className="form-textarea"></textarea>
			<button id="contact-button" className="form-btn">Submit</button>
			<p id="my-form-status"></p>
		</form>
	);
};
