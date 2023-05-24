let blogs = [];
let active = null;

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      blogs.push(post);
      resolve();
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      active = new Date().toString();
      resolve();
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (blogs.length > 0) {
        let deletedPost = blogs.pop();
        resolve(deletedPost);
      } else {
        reject('ERROR: No posts available');
      }
    }, 1000);
  });
}

async function a() {
  try {
    const post1 = { title: 'Post 1' };
    const post2 = { title: 'Post 2' };

    await Promise.all([updateLastUserActivityTime(), createPost(post1)]);

    console.log('User last active on: ' + active);
    console.log('Posts:');
    blogs.forEach((post, index) => {
      console.log(`Post ${index + 1}: ${post.title}`);
    });

    await createPost(post2);

    console.log('Updated posts:');
    blogs.forEach((post, index) => {
      console.log(`Post ${index + 1}: ${post.title}`);
    });

    await deletePost();
    console.log('Posts after deletion:');
    blogs.forEach((post, index) => {
      console.log(`Post ${index + 1}: ${post.title}`);
    });
  } catch (error) {
    console.log(error);
  }
}

a();