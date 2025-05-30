import React, { useState, useEffect } from "react";

const ExampleProjects = () => {
    const projects = [
        {
            feature: "Capstone Project",
            title: "Edu Resource Management",
            description: (
                <>
                    Edu Resource Management is a web platform designed for FPT University Can Tho to manage educational resources efficiently. It integrates AI facial recognition for secure room booking, along with features for managing teaching schedules and borrowing/returning equipment. The back-end is built with ASP.NET Core to implement a robust RESTful API, while the AI component is developed using FastAPI for efficient facial recognition processing. The front-end is crafted with Vite-React, delivering a fast, responsive, and user-friendly interface. <br />
                    <a
                        href="https://drive.google.com/file/d/1RtKHFQMM5hps-8fVzQiBv5B_BkWsMR37/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Demo
                    </a>
                </>
            ),
            images: [
                "https://i.ibb.co/7xT40HhC/ex1-1.jpg",
                "https://i.ibb.co/5V918vz/ex1-2.jpg",
                "https://i.ibb.co/XxqVyFn5/ex1-3.jpg",
                "https://i.ibb.co/x8fcWdqD/ex1-4.jpg",
                "https://i.ibb.co/fVZHCNrB/ex1-5.jpg",
            ],
        },
        {
            feature: "Featured Project",
            title: "MultiShop E-Commerce Web application",
            description:
                "MultiShop is an e-commerce web application focused on footwear, offering a seamless online shopping experience. The back-end is built with ASP.NET Core to create a RESTful API, ensuring high performance and security. The front-end is designed using React JS, providing a user-friendly and responsive interface. The application supports product browsing, cart management, secure checkout, and user management.",
            images: [
                "https://i.ibb.co/zWfkzY8w/ex2-1.png",
                "https://i.ibb.co/pBrxvY2P/ex2-2.png",
                "https://i.ibb.co/PGxkVZCf/ex2-3.png",
                "https://i.ibb.co/ccJ50ZNM/ex2-4.png",
            ],
        },
        {
            feature: "Featured Project",
            title: "iVerdant - Bagasse Products Web application",
            description:
                "iVerdant is a static web application designed to promote eco-friendly products crafted from bagasse, a sustainable byproduct of sugarcane processing. The platform serves as a digital storefront and educational hub, highlighting the environmental benefits of bagasse-based products such as biodegradable tableware, packaging, and other green alternatives.",
            images: [
                "https://i.ibb.co/jZbWHtLx/ex3-1.png",
                "https://i.ibb.co/xqz5vB5s/ex3-2.png",
                "https://i.ibb.co/tTHy2gv5/ex3-3.png",
                "https://i.ibb.co/C5ZmpF5c/ex3-4.png",
            ],
        },
    ];

    // State để lưu trữ chỉ số ảnh hiện tại cho từng dự án
    const [currentImageIndex, setCurrentImageIndex] = useState(
        Array(projects.length).fill(0)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndexes) =>
                prevIndexes.map((index, i) => (index + 1) % projects[i].images.length)
            );
        }, 3000); // Thay đổi ảnh mỗi 3 giây

        return () => clearInterval(interval); // Dọn dẹp interval khi component bị unmount
    }, [projects]);

    return (
        <section id="example-projects" className="example-projects">
            <div className="container">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`project ${index % 2 !== 0 ? "reverse" : ""}`}
                    >
                        <div className="project-image">
                            {project.images.map((image, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={image}
                                    alt={project.title}
                                    className={imgIndex === currentImageIndex[index] ? "active" : ""}
                                />
                            ))}
                        </div>
                        <div className="project-content">
                            <p className="featured">{project.feature}</p>
                            <h3>{project.title}</h3>
                            <p className="description">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExampleProjects;