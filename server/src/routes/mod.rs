use axum::{
    http::StatusCode,
    routing::{get, post},
    Router,
};

async fn handler() -> &'static str {
    "asd"
}

pub struct BaseAPI;

impl BaseAPI {
    pub fn set_routing() -> Router {
        Router::new()
            // handle logins and signups
            .route("/user", get(handler))
    }
}
