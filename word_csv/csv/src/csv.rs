use crate::value::Value;

pub struct CSV<'a> {
  pub header: Vec<&'a str>,
  pub record: Vec<Vec<Value<'a>>>
}

impl<'a> CSV<'a> {
  pub fn new(s: &str){
    
  }
}