import React from "react";
import { Link } from "react-router-dom";
import featured from "../../../../public/assets/featured.webp";

export default function FeaturedCollection() {
  return (
    <section className="py-16 px-8 lg:px-6">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Comfort And Styles
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Apparel made for your everyday life
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat unde
            doloribus ipsam, quis suscipit perferendis vitae ad cum, nihil iure
            facilis consequuntur aperiam?
          </p>
          <Link
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-700 "
            to="/collection/all"
          >
            Shop Now
          </Link>
        </div>

        <div className="lg:w-1/2">
          <img
            src={featured}
            alt="Featured collections"
            className="w-full h-full object-cover lg:rounded-br-3xl lg:rounded-tr-3xl"
          />
        </div>
      </div>
    </section>
  );
}
