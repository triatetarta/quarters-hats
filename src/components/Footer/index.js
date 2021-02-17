import React from 'react';
import { FooterWrapper, Text, Social, Copyright } from './styles';
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaPinterest,
} from 'react-icons/fa';

export function Footer() {
  return (
    <FooterWrapper>
      <Text>
        <a href="https://en.wikipedia.org/wiki/Privacy">Privacy policy</a>
        <a href="https://en.wikipedia.org/wiki/Terms_of_service#:~:text=Terms%20of%20service%20(also%20known,wants%20to%20use%20that%20service.&text=Terms%20of%20service%20can%20also,regarding%20the%20use%20of%20websites.">
          Terms of service
        </a>
        <a href="https://www.gov.uk/accepting-returns-and-giving-refunds">
          Refund policy
        </a>
      </Text>
      <Social>
        <a href="https://twitter.com/">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/">
          <FaYoutube />
        </a>
        <a href="https://www.facebook.com/">
          <FaFacebook />
        </a>
        <a href="https://www.pinterest.co.uk/">
          <FaPinterest />
        </a>
      </Social>
      <Copyright>
        &copy; {new Date().getFullYear()} - Quarter Hats HQ, Southwark, London,
        UK
      </Copyright>
    </FooterWrapper>
  );
}
