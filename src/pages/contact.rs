use yew::prelude::*;
// use yew::html::TargetCast;

#[function_component(ContactMe)]
pub fn contact() -> Html {
    let name = use_state(|| String::new());
    let email = use_state(|| String::new());
    let message = use_state(|| String::new());

    let on_name_input = {
        let name = name.clone();
        Callback::from(move |e: InputEvent| {
            let input: web_sys::HtmlInputElement = e.target_unchecked_into();
            name.set(input.value());
        })
    };
    let on_email_input = {
        let email = email.clone();
        Callback::from(move |e: InputEvent| {
            let input: web_sys::HtmlInputElement = e.target_unchecked_into();
            email.set(input.value());
        })
    };
    let on_message_input = {
        let message = message.clone();
        Callback::from(move |e: InputEvent| {
            let input: web_sys::HtmlInputElement = e.target_unchecked_into();
            message.set(input.value());
        })
    };

    let mailto_link = {
        let subject = "Website Contact";
        let body = format!("{} <{}>:\n\n{}", *name, *email, *message);
        // John Doe <johndoe@email.com>:
        //
        // ...

        format!("mailto:rohan.bharatia@outlook.com?subject={}&body={}", urlencoding::encode(subject), urlencoding::encode(&body))
    };

    html! {
        <div class="contact">
            <section class="text">
                <h1>{"Contact Me"}</h1>
                <p>{"Feel free to reach out via email or any platform below."}</p>
            </section>
            <hr />
            <section class="contact-links">
                <a href="https://www.github.com/Rohan-Bharatia" target="_BLANK">{"GitHub"}</a>
                <a href="https://www.linkedin.com/in/rohan-bharatia-273374399/" target="_BLANK">{"LinkedIn"}</a>
            </section>
            <hr />
            <section class="contact-form">
                <h2>{"Send an Email"}</h2>
                <div class="input">
                    <input type="text" placeholder="John Doe" value={(*name).clone()} oninput={on_name_input} />
                    <input type="text" placeholder="johndoe@email.com" value={(*email).clone()} oninput={on_email_input} />
                    <textarea placeholder="..." rows="6" value={(*message).clone()} oninput={on_message_input} />
                </div>
                <a href={mailto_link} target="_BLANK">
                    <button class="primary">{"Open Email Client"}</button>
                </a>
            </section>
        </div>
    }
}
