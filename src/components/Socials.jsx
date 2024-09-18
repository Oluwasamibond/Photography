import React from "react";
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from "react-icons/im";

const Socials = () => {
  return <div className="flex max-md:hidden  xl:flex ml-24">
    <ul className="flex gap-4">
        <li>
            <a href="http://www.facebook.com" target='blank'>
            <ImFacebook/>
            </a>
        </li>
        <li>
            <a href="http://www.twitter.com" target='blank'>
            <ImTwitter/>
            </a>
        </li>
        <li>
            <a href="http://www.pininterest.com" target='blank'>
            <ImPinterest/>
            </a>
        </li>
        <li>
            <a href="http://www.instagram.com" target='blank'>
            <ImInstagram/>
            </a>
        </li>
        <li>
            <a href="http://www.youtube.com" target='blank'>
            <ImYoutube/>
            </a>
        </li>
    </ul>
  </div>;
};

export default Socials;
