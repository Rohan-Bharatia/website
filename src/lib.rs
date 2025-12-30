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
fn switch(route: Route) -> Html {
    match route {
        Route::Home => html! { <HomePage /> },
        Route::NotFound => html! { <NotFound /> },
    }
}

#[function_component(App)]
fn app() -> Html {
    html! {
        <BrowserRouter>
            <header>
                <nav>
                    <Link<Route> to={Route::Home}>{ "Home" }</Link<Route>>
                </nav>
            </header>

            <main>
                <Switch<Route> render={switch} />
            </main>
        </BrowserRouter>
    }
}
