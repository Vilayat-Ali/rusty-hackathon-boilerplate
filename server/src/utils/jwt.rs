use jsonwebtoken::{decode, encode, DecodingKey, EncodingKey, Header, Validation};
use serde::{de::DeserializeOwned, Serialize};

pub struct JWT;

impl JWT {
    pub fn generate<T>(payload: &T) -> Option<String>
    where
        T: Serialize,
    {
        match encode(
            &Header::default(),
            payload,
            &EncodingKey::from_secret("secret".as_ref()),
        ) {
            Ok(token) => Some(token),
            Err(_) => None,
        }
    }

    pub fn verify<'a, T>(token: &String) -> (bool, Option<T>)
    where
        T: Serialize + DeserializeOwned,
    {
        match decode(
            token,
            &DecodingKey::from_secret("secret".as_ref()),
            &Validation::default(),
        ) {
            Ok(data) => (true, Some(data.claims)),
            Err(_) => (false, None),
        }
    }
}
