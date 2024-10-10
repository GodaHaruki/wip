pub enum Value<'a> {
    String(&'a str),
    Number(i32), // int 32bit
    Float(f32),  // float 32bit
}

pub fn value(s: &str) -> Value {
    s.parse::<i32>().map_or_else(
        move |_| {
            s.parse::<f32>()
                .map_or_else(move |_| Value::String(s), Value::Float)
        },
        Value::Number,
    )
}
