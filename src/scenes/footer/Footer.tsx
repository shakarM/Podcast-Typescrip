import React, { useEffect } from "react";
import "./Footer.css";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from 'mapbox-gl';
import { ActionButton } from "@/shares/ActionButton";

const Footer = () => {
  const MAPBOX_ACCESS_TOKEN = 'ADD YOUR ACCESS TOKEN';

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [67.0425, 24.8790], // Karachi coordinates
      zoom: 14
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([67.0425, 24.8790]) // Coordinates of the marker's position
      .addTo(map);
    marker.setLngLat([67.0425, 24.8790]);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <footer id="footer" className="bg-black-20 text-white py-12">

      <div className="container mx-auto text-[1rem] flex flex-wrap justify-between">

        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <h4 className="text-[1.4rem] font-semibold mb-4">Stay Tuned with Our Episodes</h4>
          <div className="subscribe-container ">
          <input type="email" placeholder="Enter your Email*" className="w-full  px-4 py-2 mb-2" />

          <ActionButton>Subscribe </ActionButton>
          </div>
          <p className="text-sm pt-3">Stay informed with our latest episodes and exclusive content.</p>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <h1 className="text-3xl font-bold mb-4">Shakar's Podcast </h1>
          <p>We will grow together!</p>
          <p className="text-sm">&copy; 2023 Shakar. All Rights Reserved.</p>
          <h4 className="text-xl mt-4 mb-2">Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/saadamin662/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/saad662">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <h4 className="text-xl font-semibold mb-4">Our Location</h4>
          <div id="map" className="w-full h-48"></div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
