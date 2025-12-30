use yew::prelude::*;
use yew_router::prelude::*;

mod pages;
use pages::{home::HomePage, not_found::NotFound};

#[derive(Clone, Routable, PartialEq)]
pub enum Route {
    #[at("/")]
    Home,
    #[not_found]
    #[at("/404")]
    NotFound,
}

#[allow(dead_code)]
pub fn switch(route: Route) -> Html {
    match route {
        Route::Home => html! { <HomePage /> },
        Route::NotFound => html! { <NotFound /> },
    }
}

#[function_component(App)]
pub fn app() -> Html {
    html! {
        <BrowserRouter>
            <header>
                <nav>
                    <Link<Route> to={Route::Home}>{"Home"}</Link<Route>>
                </nav>
            </header>
            <main>
                <Switch<Route> render={switch} />
            </main>
            <footer>
                <p>{"&copy; 2025 Rohan Bharatia"}</p>
                <a href="https://github.com/Rohan-Bharatia/website" target="_BLANK">{"GitHub"}</a>
            </footer>
        </BrowserRouter>
    }
}
