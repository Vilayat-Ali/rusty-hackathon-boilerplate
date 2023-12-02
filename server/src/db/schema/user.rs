use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub enum UserRole {
    USER,
    ADMIN,
}

#[derive(Serialize, Deserialize)]
struct UserName {
    first: String,
    last: String,
}

#[derive(Serialize, Deserialize)]
pub struct UserSchema {
    name: UserName,
    email: String,
    role: UserRole,
    password: String,
}

impl UserSchema {
    // validation logic
    pub fn validate_schema<T>(doc: &T) -> Result<UserSchema, &'static str>
    where
        T: Serialize + Deserialize,
    {
        todo!()
    }
}
