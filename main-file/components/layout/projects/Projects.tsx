"use client";
import React, { useEffect, useState } from "react";
import { MdArrowForward } from "react-icons/md";
import "@/public/styles/project.css";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/constants/projectsData";
import { projectServices } from "@/services/projectServices";
import toast from "react-hot-toast";
import Loader from "@/components/layout/Loader";
import { Project } from "@/types/projectTypes";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const fetchProjects = async () => {
    setLoading(true);
    const result = await projectServices.getProjects();

    if (result.success) {
      setProjects(result.data);
      console.log(result.data);

      // Getting Categories dynamically based on fetched projects
      const allCategories: (any)[] = [
        "All",
        ...Array.from(
          new Map(
            result.data
              .flatMap((item: Project) => item.projectCategory)
              .map((category: string) => [category, true])
          ).keys(),
        ),
      ];
      setCategories(allCategories);

      // Filtering projects based on the selected category
      const projectsAfterFilteration =
        selectedCategory === "All"
          ? result.data
          : result.data.filter((project: Project) =>
            project.projectCategory.includes(selectedCategory)
          );
      setFilteredProjects(projectsAfterFilteration);
      setLoading(false);
    } else {
      setError(result.message);
      toast.error(result.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [selectedCategory]);

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

          {loading ? (
            <Loader />
          ) : (
            <>
              {/* Tab Buttons for Categories */}
              <div className="category-tabs">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`tab-button ${selectedCategory === category ? "active" : ""}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Project Listings */}
              <div className="project-listings">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project: Project, index: number) => (
                    <Link
                      href={project.projectLink}
                      target="_blank"
                      key={index}
                      className="project-card"
                    >
                      <Image
                        src={project.projectImage || "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        alt={project.projectName}
                        className="bg-image project-img"
                        width={1200}
                        height={800}
                        layout="responsive"
                      />

                      <div className="view-project-listing-wrapper">
                        <h3 className="project-title">{project.projectName}</h3>
                        <p style={{ textAlign: "center" }}>{project.projectTagline}</p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p>No projects available in this category.</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
