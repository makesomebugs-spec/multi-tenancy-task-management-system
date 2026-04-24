"use client";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Productss from "../components/Productss";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Productss />
      <Testimonial />
    </div>
  );
}
