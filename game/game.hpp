#pragma once
#include "glfw-3.4/include/GLFW/glfw3.h"
#include "../result/result.hpp"
#include <type_traits>

class game {
    private:
    GLFWwindow *window;
    
    public:
    game();
    result<game, std::nullptr_t> init(int size[2], char* title);
};