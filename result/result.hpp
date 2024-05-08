#pragma once
#include <variant>

template <typename T, typename E>
class result {
    private:
    const bool is_ok;
    std::variant<T, E> value;
    
    public:
    result(T const& v);
    result(E const& v);
};

template <typename T>
class ok {
    private:
    T value;

    public:
    explicit ok(T v);

    template <typename V, typename E>
    operator result<V, E> () const;
};

template <typename E>
class err {
    private:
    E value;

    public:
    explicit err(E v);
    
    template <typename V>
    operator result<V, E> () const;
};