use yew::prelude::*;
use yew_router::prelude::*;

mod pages;
use pages::{
    home::HomePage,
    projects::Projects,
    contact::ContactMe,
    not_found::NotFound,
};

mod components;

#[derive(Clone, Routable, PartialEq)]
pub enum Route {
    #[at("/")]
    Home,
    #[at("/projects")]
    Projects,
    #[at("/contact")]
    ContactMe,
    #[not_found]
    #[at("/404")]
    NotFound,
}

#[allow(dead_code)]
pub fn switch(route: Route) -> Html {
    match route {
        Route::Home => html! { <HomePage /> },
        Route::Projects => html! { <Projects /> },
        Route::ContactMe => html! { <ContactMe /> },
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
                     <Link<Route> to={Route::Projects}>{"Projects"}</Link<Route>>
                     <Link<Route> to={Route::ContactMe}>{"Contact Me"}</Link<Route>>
                 </nav>
            </header>
            <main>
                <div class="app-container">
                    <Switch<Route> render={switch} />
                </div>
            </main>
            <footer>
                <p>{"Copyright © 2025 Rohan Bharatia. All Rights Reserved."}</p>
            </footer>
        </BrowserRouter>
    }
}
