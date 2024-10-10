use std::{borrow::Borrow, char};

use crate::{csv::CSV, value::{value, Value}};

pub fn parser(s: &str) -> CSV {
  let res = CSV {
    header: Vec::new(),
    record: Vec::new()
  };
  
  parser_impl(s, res)
}

fn parser_impl<'a, 'b>(s: &'a str, mut csv: CSV<'b>) -> CSV<'b> {
  let next = s.chars().next();
  
  if next == None {
    return csv;
  } else if next == Some('"'){
    let (v, s) = escaped(s, 0);
    
    return parser_impl(s, CSV {
      header: csv.header,
      record: unimplemented!()
    })
  }

  return parser_impl(s, csv);
}

fn field(s: &str) -> (Value, &str){
  let (p, s) = until::<','>(s);

  (value(&s[..p]), &s[p..])
}

fn escaped(s: &str, pos: usize) -> (Value, &str){
  let (p, _) = until::<'"'>(&s[pos..]);

  let next = s.chars().next();
  if next == Some(',') {
    return (value(&s[..pos + p]), &s[pos + p..]);
  } else if next == Some('"') {
    return escaped(s, pos + p + 1)
  }

  return escaped(s, pos + p)
}

fn until<const C: char>(s: &str) -> (usize, &str){

  for (i, c) in s.chars().enumerate() {
    if c == C {
      return  (i + 1, &s[i..]);
    }
  }

  panic!("didn't find {}", C)
}