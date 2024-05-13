#include "game.hpp"
#include <iostream>
#include <GLFW/glfw3.h>
#include "../result/result.hpp"

game::game(){}

result<game, std::nullptr_t> game::init(int size[2], char* title){
    if(glfwInit() == GL_FALSE) {
        std::cerr << "GLFW Initialization failed" << std::endl;
        return err<std::nullptr_t>(nullptr);
    }

    window = glfwCreateWindow(size[0], size[1], title, NULL, NULL);

    if(window == NULL){
        std::cerr << "GLFW Window creation failed" << std::endl;
        glfwTerminate();
        return err<std::nullptr_t>(nullptr);
    }

    glfwMakeContextCurrent(window);
}