const HOST = process.env.HOST ||  '127.0.0.1';
const PORT = process.env.PORT || 4000;

console.log(`woker pid=${process.pid}`);

// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/recipes/:id', async (req, reply) => {
    console.log(`worker request pid=${process.pid}`);
    const id = Number(req.params.id);

    if (id !== 42) {
        reply.statusCode = 404;
        return { error: 'not_found' };
    }
    return {
        producer_pid: process.pid,
        recipe: {
            id, name: 'Children Tikka Masala',
            steps: 'Throw it in a pot...',
            ingredients: [
                {
                    id: 1, name: 'Children', 
                    quantity: '1 lb',
                }, 
                {
                    id: 2, name: 'Sauce', 
                    quantity: '2 cups',
                }
            ]
        }
    };
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()