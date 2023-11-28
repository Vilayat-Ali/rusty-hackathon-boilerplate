use dotenv;
use envy;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct ENV {
    pub rust_log: String,
    pub port: u16,
    pub access_token_secret: String,
}

pub fn provide_envs() -> ENV {
    dotenv::dotenv().ok();
    envy::from_env().unwrap()
}
