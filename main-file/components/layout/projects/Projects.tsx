"use client";
import React, { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import "@/public/styles/project.css";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/constants/projectsData";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  //Getting Categories
  const categories = [
    "All",
    ...Array.from(
      new Map(
        projectsData
          .flatMap((item) => item.categories)
          .map((category) => [category, true])
      ).keys()
    ),
  ];

  //Filtering projects based on the selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((item) =>
          item.categories.includes(selectedCategory)
        );

  return (
    <>
      <div>
        <div className="career-header">
          <div className="career-title">
            <div className="career-title-text">
              <h2 className="project-heading" style={{ lineHeight: "1.2" }}>
                A Glimpse Into Hexler Tech&apos;s Digital Journey
              </h2>
            </div>
          </div>

          {/* tab btns */}
          <div className="category-tabs">
            {categories.map((category, index) => (
              <button
                key={index}
                className={` tab-button ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="project-listings">
            {filteredProjects.map((item, index) => (
              <Link
                href={item.path}
                target="_blank"
                key={index}
                className="project-card"
              >
                <img
                  src={
                    item.image ||
                    "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt={item.name}
                  className="bg-image project-img"
                  width={"100%"}
                />

                <div className="view-project-listing-wrapper">
                  <h3 className="project-title">{item.name}</h3>
                  <p style={{ textAlign: "center" }}>{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
