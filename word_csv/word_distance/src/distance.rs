pub trait DistanceFn {}

impl<F> DistanceFn for F where F: Fn(&str, &str) -> usize {}