import React from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div className="min-h-[calc(100vh-136px)] bg-blueGray-100 ">
      <Helmet>
        <title>Toy Market | Blog </title>
      </Helmet>
      <div className="p-6">
        <div>
          <p className="pt-3 font-semibold">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </p>
          <p className="pt-1">
            The first option is to store the access token and refresh token on
            the client, whether that is a browser, desktop or native
            application. Only the access token is presented to APIs or protected
            resources. <br />
          </p>
        </div>
        <div>
          <p className="pt-3 font-semibold">Compare SQL and NoSQL databases?</p>
          <p className="pt-1">
            Structured Query Language (SQL) is a programming language that
            allows both technical and non-technically-minded users to query,
            manipulate, and change data in a relational database. <br />
            NoSQL databases are non-relational databases that store data in a
            manner other than the tabular relations used within SQL databases.
            While SQL databases are best used for structured data, NoSQL
            databases are suitable for structured, semi-structured, and
            unstructured data. As a result, NoSQL databases don't follow a rigid
            schema but instead have more flexible structures to accommodate
            their data-types. <br />
            SQL and a relational database make it easy to handle a great deal of
            information, scale as necessary and allow flexible access to data
            only needing to update data once instead of changing multiple files,
            for instance. It’s also best for assessing data integrity. Since
            each piece of information is stored in a single place, there’s no
            problem with former versions confusing the picture. While NoSQL is
            good when the availability of big data is more crucial, SQL is
            valued for ensuring data validity. It’s also a wise decision when a
            business needs to expand in response to shifting customer demands.
            NoSQL offers high performance, flexibility, and ease of use.
          </p>
        </div>
        <div>
          <p className="pt-3 font-semibold">What is express js? What is Nest JS?</p>
          <p className="pt-1">
            Express is a node js web application framework that provides broad
            features for building web and mobile applications. It is used to
            build a single page, multipage, and hybrid web application.
            <br />
            Nest. js is one of the fastest-growing Node. js frameworks for
            building efficient, scalable, and enterprise-grade backend
            applications using Node. js <br />
          </p>
        </div>
        <div>
          <p className="pt-3 font-semibold">What is MongoDB aggregate and how does it work?</p>
          <p className="pt-1">
            MongoDB Aggregation is a way of processing a large number of
            documents in a collection by means of passing them through different
            stages. The stages make up what is known as a pipeline. The stages
            in a pipeline can filter, sort, group, reshape and modify documents
            that pass through the pipeline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
