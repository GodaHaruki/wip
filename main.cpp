#include <variant>
#include <iostream>
#include <functional>
#include <string>

enum Result {
    Ok,
    Err,
};

template <typename T>
class ParseResult {
    std::variant<T, std::string> value;
    Result tag;

    public:
        ParseResult(T v){
            this->value = v;
            this->tag = Result::Ok;
        }

        ParseResult(std::string v){
            this->value = v;
            this->tag = Result::Err;
        }

        ParseResult(Result t, std::variant<T, std::string> v){
            this->value = v;
            this->tag = t;
        }


        T unwrap(){
            if(this->tag == Result::Err){
                throw std::get<std::string>(this->value);
            }

            return std::get<T>(this->value);
        }
};

template <typename F>
using Parser = std::function<ParseResult<F>(std::string::iterator input)>;

ParseResult<char> str(std::string::iterator input){
    ParseResult<char> res(*input);
    return res;
}

int main(){
    std::string s = "samplestring";
    std::cout << str(s.begin()).unwrap() << std::endl;
}