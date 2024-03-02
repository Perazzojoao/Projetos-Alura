# Builder stage
FROM golang:1.22.0-alpine as builder
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN go build -o brokerApp ./cmd/api
RUN chmod +x /app/brokerApp

# Production stage
FROM alpine:latest as production
RUN mkdir /app
COPY --from=builder /app/brokerApp /app
CMD [ "/app/brokerApp" ]
