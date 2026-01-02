use yew::prelude::*;

#[function_component(HomePage)]
pub fn home_page() -> Html {
    html! {
        <div class="home">
            <section class="hero">
                <h1>{"Rohan Bharatia"}</h1>
                <h2>{"Student & Aspiring Engineer"}</h2>
                <p>{"Interested in robotics, systems engineering, and building things that matter."}</p>
            </section>
            <hr />
            <section class="about">
                <h2>{"About Me"}</h2>
                <p>{"I focus on understanding how things work on a low level, from embedded systems and robotics to operating systems (more specifically Linux) and performance-focused software."}</p>
                <p>{"My goal is to design systems that are reliable, efficient, and meaningful"}</p>
            </section>
            <hr />
            <section class="skills">
                <h2>{"Skills & Interests"}</h2>
                <ul>
                    <li>{"C, C++, Python, Java, Rust"}</li>
                    <li>{"Embedded Systems & Microcontrollers"}</li>
                    <li>{"Robotics & Control Systems"}</li>
                    <li>{"Linux, Low-Level Systems, Performance Tuning"}</li>
                    <li>{"Graphics Programming with OpenGL & Vulkan"}</li>
                </ul>
            </section>
        </div>
    }
}
