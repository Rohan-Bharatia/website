use yew::prelude::*;

use crate::components::project_card::ProjectCard;

#[function_component(Projects)]
pub fn projects() -> Html {
    html! {
        <div class="projects">
            <section class="text">
                <h1>{"Projects"}</h1>
                <p>{"What I've built or am currently working on."}</p>
            </section>
            <hr />
            <section class="projects">
                <ProjectCard
                    title={"Bert XIV".to_string()}
                    description={"Source code for the FRC 4750 Beʳᵗ Rebuilt season".to_string()}
                    tags={vec![
                        "Python".to_string(),
                        "Robotics".to_string(),
                        "Scheduling".to_string(),
                    ]}
                    links={vec![
                        ("GitHub".to_string(), "https://www.github.com/FRC-4750-Bishop-Eustace/Bert-XIV.git".to_string())
                    ]}
                />
                <ProjectCard
                    title={"Bert XIII".to_string()}
                    description={"Source code for the FRC 4750 Beʳᵗ Reefscape season".to_string()}
                    tags={vec![
                        "Python".to_string(),
                        "Robotics".to_string(),
                        "Scheduling".to_string(),
                    ]}
                    links={vec![
                        ("GitHub".to_string(), "https://www.github.com/FRC-4750-Bishop-Eustace/Bert_XIII.git".to_string())
                    ]}
                />
                <ProjectCard
                    title={"Nautilus Engine".to_string()}
                    description={"A modular 3d game engine focused on cross-platform support.".to_string()}
                    tags={vec![
                        "C/C++".to_string(),
                        "GLSL".to_string(),
                        "OpenGL".to_string(),
                    ]}
                    links={vec![
                        ("GitHub".to_string(), "https://www.github.com/Rohan-Bharatia/Nautilus-Engine.git".to_string())
                    ]}
                />
                <ProjectCard
                    title={"Arch Dotfiles".to_string()}
                    description={"Configuration files for my Arch Linux setup".to_string()}
                    tags={vec![
                        "Linux".to_string(),
                        "Bash".to_string(),
                        "Lua".to_string(),
                    ]}
                    links={vec![
                        ("GitHub".to_string(), "https://www.github.com/Rohan-Bharatia/Arch-Dots.git".to_string())
                    ]}
                />
                <ProjectCard
                    title={"AP Computer Science A Final Project".to_string()}
                    description={"A simple single-player blackjack game".to_string()}
                    tags={vec![
                        "Java".to_string(),
                        "AWT".to_string(),
                    ]}
                    links={vec![
                        ("GitHub".to_string(), "https://www.github.com/Rohan-Bharatia/APCSA-Final.git".to_string())
                    ]}
                />
                <ProjectCard
                    title={"Peer-to-Peer Terminal Chat".to_string()}
                    description={"A minimal LAN-based in terminal chat app".to_string()}
                    tags={vec![
                        "C".to_string(),
                        "Networking".to_string(),
                        "Cross-platform".to_string(),
                    ]}
                    links={vec![
                        ("GitHub".to_string(), "https://www.github.com/Rohan-Bharatia/PtP-Chat.Configuration".to_string())
                    ]}
                />
                <ProjectCard
                    title={"Virtual Computer".to_string()}
                    description={"A simulated 4-bit CPU using only AND and NOT gates".to_string()}
                    tags={vec![
                        "C++".to_string(),
                        "Computer Architecture".to_string(),
                    ]}
                    links={vec![
                        ("GitHub".to_string(), "https://www.github.com/Rohan-Bharatia/Virtual-Computer.git".to_string())
                    ]}
                />
            </section>
        </div>
    }
}
