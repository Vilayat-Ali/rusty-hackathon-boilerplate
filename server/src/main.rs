use axum::{
    http::StatusCode,
    routing::{get, post},
    Json, Router,
};
use server::{env::provide_envs, routes::BaseAPI};
use tracing::Level;

#[tokio::main]
async fn main() {
    // env
    let envs = provide_envs();

    // log tracing
    tracing_subscriber::fmt()
        .with_max_level(Level::TRACE)
        .init();

    // router
    let app: Router = Router::new().nest("/api", BaseAPI::set_routing());

    let listener = tokio::net::TcpListener::bind(format!("0.0.0.0:{}", envs.port))
        .await
        .unwrap();

    axum::serve(listener, app).await.unwrap();
}
