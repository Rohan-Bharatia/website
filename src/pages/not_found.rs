use yew::prelude::*;

#[function_component(NotFound)]
pub fn not_found() -> Html {
    html! {
        <div class="not-found">
            <h1>{"Error 404"}</h1>
            <h2>{"Page Not Found"}</h2>
            <p>{"The page you are looking for does not exist or has been moved"}</p>
        </div>
    }
}
