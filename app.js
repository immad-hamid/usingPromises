// existing posts
const posts = [
    { title: 'Title One', body: 'This is Post One' },
    { title: 'Title Two', body: 'This is Post Two' }
];

// create post function
function createPost (post) {
    return new Promise (
        function (resolve, reject) {
            setTimeout (
                function () {
                    posts.push(post);
                    const error =  false;

                    error ? reject('Error: An error occured...') : resolve();
                }, 
            2000);
        }
    );
}

function getPosts () {
    setTimeout (
        function () {
            let output = '';
            posts.forEach (
                function (post) {
                    output += `
                                <li>${post.title}</li>
                                <li>${post.body}</li>
                                <br>
                              `
                }
            );
            document.body.innerHTML = output;
        }, 
    2000);
}

createPost({ title: 'Title Two', body: 'This is Post Two' })
.then(getPosts)
.catch( 
    function (err) {
        console.log(err);
    }
);