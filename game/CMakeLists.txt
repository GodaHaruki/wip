cmake_minimum_required(VERSION 3.0)

set(CMAKE_CXX_STANDARD 17)
add_library(Game game.cpp)

add_subdirectory(glfw-3.4)
target_link_libraries(Game glfw)