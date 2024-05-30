import React from "react";

const Downloads = () => {
  return (
    <>
      <section className="bg-indigo-400 font-mono text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-black sm:text-4xl">
              Trusted by Banking Services
            </h2>

            <p className="mt-4 text-black font-serif sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolores laborum labore provident impedit esse recusandae facere
              libero harum sequi.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-extrabold  text-black">
                  Total Downloads
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  10k
                </dd>
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-extrabold text-black">
                  Official Addons
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  24
                </dd>
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-extrabold text-black ">
                  Total Reviews
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  86
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
};

export default Downloads;
