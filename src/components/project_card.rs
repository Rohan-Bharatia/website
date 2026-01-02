use yew::prelude::*;

#[derive(Properties, PartialEq)]
pub struct ProjectCardProps {
    pub title: String,
    pub description: String,

    #[prop_or_default]
    pub tags: Vec<String>,

    #[prop_or_default]
    pub links: Vec<(String, String)>, // label, url
}

#[function_component(ProjectCard)]
pub fn project_card(props: &ProjectCardProps) -> Html {
    html! {
        <div class="project-card">
            <h3>{&props.title}</h3>
            <p>{&props.description}</p>
            if !props.tags.is_empty() {
                <div class="project-tags">
                    {
                        props.tags.iter().map(|tag| {
                            html! {
                                <span class="tag">{tag}</span>
                            }
                        }).collect::<Html>()
                    }
                </div>
            }
            if !props.links.is_empty() {
                <div class="project-links">
                    {
                        props.links.iter().map(|(label, url)| {
                            html! {
                                <a href={url.clone()} target="_BLANK" rel="noopener noreferrer">{label}</a>
                            }
                        }).collect::<Html>()
                    }
                </div>
            }
        </div>
    }
}
