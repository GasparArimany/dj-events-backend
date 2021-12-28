module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a020b97aecc9da75b14fbe29825621e2'),
  },
});
