FROM rust:slim

RUN ["/bin/bash", "-c", "apt-get", "update"]
RUN ["/bin/bash", "-c", "apt-get", "install", "-y", "git-all"]