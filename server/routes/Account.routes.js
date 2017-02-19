import { Router } from 'express';
// import PostController from '../controllers/A';
const router = new Router();

// Get all Posts
router.route('/posts').get((req, res) => {
  res.json({ hello: 'world' });
});

// // Get one post by cuid
// router.route('/posts/:cuid').get(PostController.getPost);

// // Add a new Post
// router.route('/posts').post(PostController.addPost);

// // Delete a post by cuid
// router.route('/posts/:cuid').delete(PostController.deletePost);

export default router;