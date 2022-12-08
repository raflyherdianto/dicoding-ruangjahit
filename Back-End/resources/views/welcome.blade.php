<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RuangJahit API Documentation</title>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    * {
        box-sizing: border-box;
        font-family: "Poppins";
        scroll-padding-top: 100px;
        scroll-behavior:smooth
    }

    header {
        display: inline;
    }

    body {
        margin: 0;
        padding: 20px;
        background-color: #FFFDD0;
    }

    .jumbotron {
        padding: 60px;
        background-color: #FF8A00;
        text-align: center;
        font-size: 20px;
        color: #2E2252;
        border-radius: 10px 10px 0px 0px;
    }

    .jumbotron h1{
        color: #2E2252;
    }

    nav {
        background-color: #ffa53e;
        padding: 5px;
        border-radius: 0px 0px 10px 10px;
        position: sticky;
        top: 0;
        text-align: center;
    }

    nav select {
        display: none;
    }

    nav a {
        color: #2E2252;
        font-size: 18px;
        font-weight: 400;
        text-decoration: none;
    }

    nav a:hover{
        font-weight: bold;
    }

    nav ul {
        padding-left: 0px;
    }

    nav li {
        display: inline;
        list-style-type: none;
        margin-right: 20px;
    }

    .selection{
        text-align: center;
    }

    .selection select{
        width: 70%;
        background-color: white;
        border-radius: 5px;
    }

    main{
        padding: 0px 20px 20px 20px;
        overflow: auto;
    }

    main h2{
        margin-top: 0px;
    }

    h1, h2, h3{
        color: #2E2252;
    }

    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        padding: 50px;
        margin-top: 20px;
        background-color: white;
    }

    .card h3{
        text-align: center;
    }

    .card p {
        text-align: justify;
    }

    #account, #products, #categories, #reviews, #appointments, #carts, #favorites, #links, #mainlink{
        font-size: 2.5rem;
        text-align: center;
    }

    table{
        width: 100%;
        text-align: center;
        border-collapse: collapse;
        table-layout: fixed;
    }

    table, th, td{
        border: 1px solid black;
    }

    .usefullinks{
        text-align: center;
    }

    .link {
        text-decoration: none;
        font-weight: bold;
        font-size: 1.25rem;
    }

    footer {
        text-align: center;
        padding: 20px;
        color: #ffa53e;
        background-color: #2E2252;
        border-radius: 10px;
    }

    @media screen and (max-width: 960px) {

        .jumbotron h1{
            font-size: 1.5rem;
        }

        nav ul{
            display: none;
        }

        nav select {
            display: inline-block;
        }

        #content {
            float: none;
            width: 100%;
        }

        main{
            padding: 0px;
            overflow: auto;
        }
    }
    </style>

</head>

<body>
    <header>
        <div class="jumbotron">
            <h1>RuangJahit API Documentation</h1>
            <p>Capstone Project Team C22-120</p>
        </div>
        <nav>
            <ul>
                <li><a href="#account">Account</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#categories">Categories</a></li>
                <li><a href="#carts">Carts</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#favorites">Favorites</a></li>
                <li><a href="#appointments">Appointments</a></li>
                <li><a href="#links">Useful Links</a></li>
            </ul>

            <div class="selection">
            <select id="select" onchange="select()">
                <option value="#account">Account</option>
                <option value="#products">Products</option>
                <option value="#categories">Categories</option>
                <option value="#carts">Carts</option>
                <option value="#reviews">Reviews</option>
                <option value="#favorites">Favorites</option>
                <option value="#appointments">Appointments</option>
            </select>
            </div>
        </nav>
    </header>

    <main>
        <div id="content">
            <article class="card">
                <h2 id="mainlink">Main Link</h2>
                <h2 style="text-align: center"><strong>https://backend-ruangjahit-production.up.railway.app/api</strong></h2>
            </article>
            <article class="card">
                <h2 id="account">Account</h2>
                <h2><strong>Register</strong></h2>
                <p><em>Mendaftarkan akun pengguna/admin</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/register</td>
                      <td>POST</td>
                      <td>Public</td>
                    </tr>
                </table>
                <ul>
                    <li><p><strong>Authorization</strong></p>
                        <ul>
                            <li>Bearer Token: User Login Token</li>
                        </ul>
                    </li>

                    <li><p><strong>Headers</strong></p>
                        <ul>
                            <li>Accept: <code>application/json</code></li>
                            <li>Content-Type: <code>application/json</code></li>
                        </ul>
                    </li>

                    <li><p><strong>Body</strong></p>
                        <p>JSON : <code>{"name" : string, "username" : string, "email" : string, "password" : string, "first_address" : string, "province_id" : number, <br>
                            "regency_id" : number, "zip_code" : number, "first_phone" : number, "password_confirmation" : string}</code></p>
                    </li>
                </ul><br><br>

                <h2><strong>Login</strong></h2>
                <p><em>Memasukkan pengguna pada aplikasi web</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/login</td>
                      <td>POST</td>
                      <td>Public</td>
                    </tr>
                </table>
                <ul>
                    <li><p><strong>Authorization</strong></p>
                        <ul>
                            <li>Bearer Token: User Login Token</li>
                        </ul>
                    </li>

                    <li><p><strong>Headers</strong></p>
                        <ul>
                            <li>Accept: <code>application/json</code></li>
                            <li>Content-Type: <code>application/json</code></li>
                        </ul>
                    </li>

                    <li><p><strong>Body</strong></p>
                        <p>JSON : <code>{"username" : string, "password" : string}</code></p>
                    </li>
                </ul><br><br>

                <h2><strong>Get User/Admin Login</strong></h2>
                <p><em>Mendapatkan data user/admin setelah log-in</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/user</td>
                      <td>GET</td>
                      <td>Admin, User</td>
                    </tr>
                </table><br><br>

                <h2><strong>Edit User Info</strong></h2>
                <p><em>Mengedit data user</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/users/edit</td>
                      <td>PUT</td>
                      <td>User</td>
                    </tr>
                </table>
                <ul>
                    <li><p><strong>Authorization</strong></p>
                        <ul>
                            <li>Bearer Token: User Login Token</li>
                        </ul>
                    </li>

                    <li><p><strong>Headers</strong></p>
                        <ul>
                            <li>Accept: <code>application/json</code></li>
                            <li>Content-Type: <code>application/json</code></li>
                        </ul>
                    </li>

                    <li><p><strong>Body</strong></p>
                        <p>JSON : <code>{"name" : string, "username" : string, "email" : string, "password" : string, "first_address" : string, "province_id" : number, <br>
                            "regency_id" : number, "zip_code" : number, "first_phone" : number, "password_confirmation" : string}</code></p>
                    </li>
                </ul><br><br>

                <h2><strong>Logout</strong></h2>
                <p><em>Keluar dari Aplikasi Web</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/logout</td>
                      <td>POST</td>
                      <td>Admin, User</td>
                    </tr>
                </table>
            </article>

            <article class="card">
                <h2 id="products">Products</h2>
                <h2><strong>Get All Products</strong></h2>
                <p><em>Mendaftarkan semua produk yang ada</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/products</td>
                      <td>GET</td>
                      <td>Public</td>
                    </tr>
                </table><br><br>

                <h2><strong>Get One Specific Product</strong></h2>
                <p><em>Mendapatkan data satu produk</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/products/{products}</td>
                      <td>GET</td>
                      <td>Public</td>
                    </tr>
                </table><br><br>

                <h2><strong>Get All Products' Image</strong></h2>
                <p><em>Mendapatkan semua foto dari produk</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/images</td>
                      <td>GET</td>
                      <td>Public</td>
                    </tr>
                </table><br><br>

                <h2><strong>Adding a Product</strong></h2>
                <p><em>Menambahkan sebuah produk</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/products</td>
                      <td>POST</td>
                      <td>Admin</td>
                    </tr>
                </table>
                <ul>
                    <li><p><strong>Authorization</strong></p>
                        <ul>
                            <li>Bearer Token: User Login Token</li>
                        </ul>
                    </li>

                    <li><p><strong>Headers</strong></p>
                        <ul>
                            <li>Accept: <code>application/json</code></li>
                            <li>Content-Type: <code>application/json</code></li>
                        </ul>
                    </li>

                    <li><p><strong>Body</strong></p>
                        <p>JSON : <code>{"name" : string, "user_id" : number, "price" : number, "description" : string, "stock" : number, "category_product_id" : number, "size" : number, , "color" : string, "weight" : number}</code></p>
                    </li>
                </ul><br><br>

                <h2><strong>Editing a Product</strong></h2>
                <p><em>Mengubah detail sebuah produk</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/products</td>
                      <td>PUT</td>
                      <td>Admin</td>
                    </tr>
                </table>
                <ul>
                    <li><p><strong>Authorization</strong></p>
                        <ul>
                            <li>Bearer Token: User Login Token</li>
                        </ul>
                    </li>

                    <li><p><strong>Headers</strong></p>
                        <ul>
                            <li>Accept: <code>application/json</code></li>
                            <li>Content-Type: <code>application/json</code></li>
                        </ul>
                    </li>

                    <li><p><strong>Body</strong></p>
                        <p>JSON : <code>{"name" : string, "user_id" : number, "price" : number, "description" : string, "stock" : number, "category_product_id" : number, "size" : number, , "color" : string, "weight" : number}</code></p>
                    </li>
                </ul><br><br>

                <h2><strong>Deleting a Product</strong></h2>
                <p><em>Menghapus satu produk</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/products/{products}</td>
                      <td>DELETE</td>
                      <td>Public</td>
                    </tr>
                </table>
            </article>

            <article class="card">
                <h2 id="categories">Categories</h2>
                <h2><strong>Get All Categories</strong></h2>
                <p><em>Mendapatkan semua kategori produk yang ada</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/categories</td>
                      <td>GET</td>
                      <td>Public</td>
                    </tr>
                </table><br><br>

                <h2><strong>Adding a Category</strong></h2>
                <p><em>Menambahkan sebuah kategori produk</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/categories</td>
                      <td>POST</td>
                      <td>Admin</td>
                    </tr>
                </table>
                <ul>
                    <li><p><strong>Authorization</strong></p>
                        <ul>
                            <li>Bearer Token: User Login Token</li>
                        </ul>
                    </li>

                    <li><p><strong>Headers</strong></p>
                        <ul>
                            <li>Accept: <code>application/json</code></li>
                            <li>Content-Type: <code>application/json</code></li>
                        </ul>
                    </li>

                    <li><p><strong>Body</strong></p>
                        <p>JSON : <code>{"name" : string, "slug" : string}</code></p>
                    </li>
                </ul><br><br>

                <h2><strong>Editing a Category</strong></h2>
                <p><em>Mengubah data sebuah kategori produk</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/categories/{name}</td>
                      <td>PUT</td>
                      <td>Admin</td>
                    </tr>
                </table>
                <ul>
                    <li><p><strong>Authorization</strong></p>
                        <ul>
                            <li>Bearer Token: User Login Token</li>
                        </ul>
                    </li>

                    <li><p><strong>Headers</strong></p>
                        <ul>
                            <li>Accept: <code>application/json</code></li>
                            <li>Content-Type: <code>application/json</code></li>
                        </ul>
                    </li>

                    <li><p><strong>Body</strong></p>
                        <p>JSON : <code>{"name" : string, "slug" : string}</code></p>
                    </li>
                </ul><br><br>

                <h2><strong>Deleting a Category</strong></h2>
                <p><em>Menghapus satu kategori produk</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/categories/{name}</td>
                      <td>DELETE</td>
                      <td>Public</td>
                    </tr>
                </table>
            </article>

            <article class="card">
                <h2 id="carts">Carts</h2>
                <h2><strong>Get All Categories</strong></h2>
                <p><em>Mendaftarkan semua kategori produk yang ada</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/categories</td>
                      <td>GET</td>
                      <td>Public</td>
                    </tr>
                </table><br><bR>

                <h2><strong>Add to Carts</strong></h2>
                <p><em>Menambahkan item ke keranjang</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/carts/{product}</td>
                      <td>POST</td>
                      <td>User</td>
                    </tr>
                </table>
                <ul>
                    <li><p><strong>Authorization</strong></p>
                        <ul>
                            <li>Bearer Token: User Login Token</li>
                        </ul>
                    </li>

                    <li><p><strong>Headers</strong></p>
                        <ul>
                            <li>Accept: <code>application/json</code></li>
                            <li>Content-Type: <code>application/json</code></li>
                        </ul>
                    </li>

                    <li><p><strong>Body</strong></p>
                        <p>JSON : <code>{"user_id" : number, "product_id" : number, "quantity" : number, "custom_size" : number}</code></p>
                    </li>
                </ul><br><br>

                <h2><strong>Checkout Carts</strong></h2>
                <p><em>Check-out item dari keranjang</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/carts/checkout/{cart}</td>
                      <td>PUT</td>
                      <td>User</td>
                    </tr>
                </table>
                <ul>
                    <li><p><strong>Authorization</strong></p>
                        <ul>
                            <li>Bearer Token: User Login Token</li>
                        </ul>
                    </li>

                    <li><p><strong>Headers</strong></p>
                        <ul>
                            <li>Accept: <code>application/json</code></li>
                            <li>Content-Type: <code>application/json</code></li>
                        </ul>
                    </li>

                    <li><p><strong>Body</strong></p>
                        <p>JSON : <code>{"user_id" : number, "insurance_price" : number, "shipping_price" : number, "total_price" : number, "code" : number, "product_id" : number,
                            "quantity" : number, "price" : number, "custom_size" : number}</code></p>
                    </li>
                </ul>
            </article>

            <article class="card">
                <h2 id="reviews">Reviews</h2>
                <h2><strong>Get All Reviews</strong></h2>
                <p><em>Mendapatkan semua review</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/reviews</td>
                      <td>GET</td>
                      <td>Public</td>
                    </tr>
                </table><br><br>

                <h2><strong>Adding a Review</strong></h2>
                <p><em>Menambahkan sebuah review produk</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/reviews</td>
                      <td>POST</td>
                      <td>Admin</td>
                    </tr>
                </table>
                <ul>
                    <li><p><strong>Authorization</strong></p>
                        <ul>
                            <li>Bearer Token: User Login Token</li>
                        </ul>
                    </li>

                    <li><p><strong>Headers</strong></p>
                        <ul>
                            <li>Accept: <code>application/json</code></li>
                            <li>Content-Type: <code>application/json</code></li>
                        </ul>
                    </li>

                    <li><p><strong>Body</strong></p>
                        <p>JSON : <code>{"user_id : number, "product_id" : number, "star" : number, "description" : string}</code></p>
                    </li>
                </ul><br><br>

                <h2><strong>Editing a Review</strong></h2>
                <p><em>Mengubah data sebuah review produk</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/reviews/{product_id}</td>
                      <td>PUT</td>
                      <td>Admin</td>
                    </tr>
                </table>
                <ul>
                    <li><p><strong>Authorization</strong></p>
                        <ul>
                            <li>Bearer Token: User Login Token</li>
                        </ul>
                    </li>

                    <li><p><strong>Headers</strong></p>
                        <ul>
                            <li>Accept: <code>application/json</code></li>
                            <li>Content-Type: <code>application/json</code></li>
                        </ul>
                    </li>

                    <li><p><strong>Body</strong></p>
                        <p>JSON : <code>{"user_id : number, "product_id" : number, "star" : number, "description" : string}</code></p>
                    </li>
                </ul><br><br>

                <h2><strong>Deleting a Review</strong></h2>
                <p><em>Menghapus satu review produk</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/reviews/{product_id}</td>
                      <td>DELETE</td>
                      <td>Public</td>
                    </tr>
                </table>
            </article>

            <article class="card">
                <h2 id="favorites">Favorites</h2>
                <h2><strong>Get All Favorites</strong></h2>
                <p><em>Mendapatkan semua item favorit</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/favorites</td>
                      <td>GET</td>
                      <td>Public</td>
                    </tr>
                </table><br><br>

                <h2><strong>Add item to Favorites</strong></h2>
                <p><em>Menambahkan item ke daftar favorit</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/favorites</td>
                      <td>POST</td>
                      <td>User</td>
                    </tr>
                </table>
                <ul>
                    <li><p><strong>Authorization</strong></p>
                        <ul>
                            <li>Bearer Token: User Login Token</li>
                        </ul>
                    </li>

                    <li><p><strong>Headers</strong></p>
                        <ul>
                            <li>Accept: <code>application/json</code></li>
                            <li>Content-Type: <code>application/json</code></li>
                        </ul>
                    </li>

                    <li><p><strong>Body</strong></p>
                        <p>JSON : <code>{"user_id : number, "product_id" : number, "status" : number}</code></p>
                    </li>
                </ul><br><br>

                <h2><strong>Delete an item from favorites</strong></h2>
                <p><em>Menghapus item dari daftar favorit</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/favorites/{user_id}</td>
                      <td>DELETE</td>
                      <td>Public</td>
                    </tr>
                </table>
            </article>

            <article class="card">
                <h2 id="appointments">Appointments</h2>
                <h2><strong>Get All Appointments</strong></h2>
                <p><em>Mendapatkan semua appointment</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/appointments</td>
                      <td>GET</td>
                      <td>Public</td>
                    </tr>
                </table><br><br>

                <h2><strong>Adding an Appointment</strong></h2>
                <p><em>Menambahkan appointment</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/appointments</td>
                      <td>POST</td>
                      <td>User</td>
                    </tr>
                </table>
                <ul>
                    <li><p><strong>Authorization</strong></p>
                        <ul>
                            <li>Bearer Token: User Login Token</li>
                        </ul>
                    </li>

                    <li><p><strong>Headers</strong></p>
                        <ul>
                            <li>Accept: <code>application/json</code></li>
                            <li>Content-Type: <code>application/json</code></li>
                        </ul>
                    </li>

                    <li><p><strong>Body</strong></p>
                        <p>JSON : <code>{"user_id" : number, "product_id" : number, "deadline : date, "status" : number}</code></p>
                    </li>
                </ul><br><br>

                <h2><strong>Deleting an Appointment</strong></h2>
                <p><em>Menghapus detail perjanjian</em></p>
                <table>
                    <tr>
                      <th>URL</th>
                      <th>Method</th>
                      <th>Roles</th>
                    </tr>
                    <tr>
                      <td>/appointments/{user_id}</td>
                      <td>DELETE</td>
                      <td>Public</td>
                    </tr>
                </table>
            </article>

            <article class="card">
            <h2 id="links">Useful Links</h2>
                <div class="usefullinks">
                    <a href="https://github.com/raflyherdianto/dicoding-ruangjahit" class="link">GitHub Repository</a><br>
                    <a href="/" class="link">Web Application</a><br>
                    <a href="/" class="link">Presentation Slide</a><br>
                    <a href="/" class="link">Presentation Video</a>
                </div>
            </article>

        </div>
    </main>

    <footer class="footer">
        <p class="mb-1">&copy; 2022 C22-120 Capstone Project Team<br>Capstone Project Submission - Dicoding Academy</p>
    </footer>
</body>
</html>
