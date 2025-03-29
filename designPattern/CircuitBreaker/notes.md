+-------------------------------------------+
|             Client (Frontend)             |
+-------------------------------------------+
                  ↓
          (HTTP Requests)
                  ↓
+-------------------------------------------+
|        API Gateway (Node.js)               |
| - Rate Limiting with Redis                 |
| - Request Routing                          |
+-------------------------------------------+
       ↓                      ↓
+----------------+     +-------------------+
|  Service Auth  |     | Service Products   |
| - Circuit Brkr |     | - Circuit Brkr     |
| - RabbitMQ Pub |     | - RabbitMQ Sub     |
| - MongoDB      |     | - MongoDB          |
+----------------+     +-------------------+
                  ↓
            Redis (Cache Layer)
                  ↓
       MongoDB (Persistent Storage)