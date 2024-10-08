pub trait DistanceFn {}

pub type Distance = i8;

impl<F> DistanceFn for F where F: Fn(&str, &str) -> Distance {}