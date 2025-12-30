use yew::prelude::*;

#[function_component(NotFound)]
pub fn not_found() -> Html {
    let onclick = Callback::from(move |_| {
        // TODO: Make home button actually travel the user back to the homepage
        print!("Go Home!");
    });
    html! {
        <div class="not-found">
            <h1>{"404 - Page Not Found!"}</h1>
            <button {onclick}>{"Go Home"}</button>
        </div>
    }
}
