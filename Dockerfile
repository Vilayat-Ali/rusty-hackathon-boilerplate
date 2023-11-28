FROM alpine:latest

WORKDIR /app

COPY . .

RUN apk add curl gcc nodejs npm

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

RUN cd frontend && npm run build && npm run preview

RUN cd server && cargo run --release

CMD ["/bash"]