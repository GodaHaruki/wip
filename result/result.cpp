#include "result.hpp"

template <typename T, typename E>
result<T, E>::result(T const& v): is_ok(true) {
    value = v;
}

template <typename T, typename E>
result<T, E>::result(E const& v): is_ok(false) {
    value = v;
}


template <typename T>
ok<T>::ok(T v): value(v) {}

template <typename T>
template <typename V, typename E>
ok<T>::operator result<V, E> () const {
    return result<V, E>(value);
}

template <typename T>
err<T>::err(T v): value(v) {}

template <typename E>
template <typename V>
err<E>::operator result<V, E> () const {
    return result<V, E>(value);
}