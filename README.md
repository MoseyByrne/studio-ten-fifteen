### Research & Planning Log
#### Other repos with time commited:

[Next.js Practice](https://github.com/MoseyByrne/next-js-practice)

#### Wednesday, 09/14
* 5pm-6pm: Research to decide if i want to use react in my project. Find more resources online for understanding React components.
#### Friday, 09/16
* 10am-12pm: Meet w/Jam to discuss website.
#### Sunday, 09/18
* 11am-11:20am: Set up initial project files for Studio Ten Fifteen.
* 11:20-12pm: I only wanted to push my readme to github, but because a commit is made when using create-react-app, files that i didn't add to my commit were also pushed. Start with a fresh repository, and try only pushing readme by deleting previous commits.
Compy being slow...
git reset --soft HEAD~2  didn't work, didn't like the ~ .
Ended up using rm -fr .git
* 12-12:15pm : Read up on Capstone assignment.
* 12:45-1:50 : Create capstone-proposal.md, and look into options for a shipping cost calculator.
  
  https://firebase.google.com/products/extensions/shipengine-calculate-rates

* 1:50-3:45 : Research building an ECommerce application
  
  https://www.youtube.com/watch?v=377AQ0y6LPA

#### Monyay, 09/19
* 12:15-12:55 : Update capstone proposal. Install:
  
  npm install @material-ui/core @material-ui/icons @chec/commerce.js @stripe/react-stripe-js @stripe/stripe-js react-router-dom react-hook-form

https://commercejs.com/docs/sdk/concepts/

#### Friday, 09/23
* 4:30-5:30pm : I've decided to use Sanity instead of Commerce.js. Starting over, install dependencies and create new Github repo.
* 5:30-6:30pm : commiting changes, but keeping track of time for myself.
#### Sat 09/24
* 6:30-11:30am
* 7:30-8:30pm
#### Sun 09/25
* 9-11:30am : BUG! Error: Unable to resolve image URL from source (undefined). Checked for typos in schema. Tried reinstalling. npm install --save @sanity/image-url has upstream dependency conflicts. Tried: brew install vips, needed: xcode-select --install(got stuck) - Command Line Tools for Xcode 12.5(from Apple dev site). Installed vips, but didn't fix error.
* 4-5pm : Researching Next.js. Started following tutorial 

https://www.youtube.com/watch?v=Sklc_fQBmcs

#### 09/26
* noon-12:45
#### 09/27
* 4:45-7pm
#### 10/04
* 9-10 Research to get some ideas for styling
   







# Studio Ten Fifteen

#### By Mo Byrne

#### ECommerce site for a clothing company

## Technologies Used

* React
* Next.js
* JavaScript
* HTML
* Sanity.io
* Node.js
* CSS
* Stripe

## Description

This is a website for the clothing company Studio Ten Fifteen, based out of Eureka California. Sanity is used for backend, and Stripe for payments. 

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ Mo Byrne


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
