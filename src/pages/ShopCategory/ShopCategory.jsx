import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ShopCategory = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="mt-5 md:mt-10">
      <div class=" capitalize text-2xl pt-10 pb-7 text-center font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Catagories
      </div>
      <hr class="w-1/4 h-1 mx-auto bg-blueGray-200 border-0 rounded dark:bg-gray-700" />

      <div className="px-10 pt-10">
        <Tabs forceRenderTabPanel defaultIndex={1}>
          <TabList>
            <Tab>Main Catagorieds 1</Tab>
            <Tab>Main Catagorieds 2</Tab>
            <Tab>Main Catagorieds 3</Tab>
          </TabList>
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList>
                <Tab>Main Catagorieds 1 withi Sub-1</Tab>
                <Tab>Main Catagorieds 1 withi Sub-2</Tab>
                <Tab>Main Catagorieds 1 withi Sub-3</Tab>
               
              </TabList>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                  <div className="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
                    <div className="relative flex items-end overflow-hidden rounded-xl">
                      <img
                        src="https://thumbnails.production.thenounproject.com/gA9eZOvsBYSHrMumgrslmRGoBto=/fit-in/1000x1000/photos.production.thenounproject.com/photos/BCBA88B6-5B41-4B50-A786-E60CAA0ECDA3.jpg"
                        alt="wallpaper"
                      />

                      <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <span className="ml-1 text-sm text-slate-400">4.9</span>
                      </div>
                    </div>

                    <div className="mt-1 p-2">
                      <h2 className="text-slate-700">The Malta Hotel</h2>
                      <p className="mt-1 text-sm text-slate-400">
                        Italy, Europe
                      </p>

                      <div className="mt-3 flex items-end justify-between">
                        <p>
                          <span className="text-lg font-bold text-orange-500">
                            $1,421
                          </span>
                          <span className="text-sm text-slate-400">/night</span>
                        </p>

                        <div className="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
                    <div className="relative flex items-end overflow-hidden rounded-xl">
                      <img
                        src="https://thumbnails.production.thenounproject.com/gA9eZOvsBYSHrMumgrslmRGoBto=/fit-in/1000x1000/photos.production.thenounproject.com/photos/BCBA88B6-5B41-4B50-A786-E60CAA0ECDA3.jpg"
                        alt="wallpaper"
                      />

                      <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <span className="ml-1 text-sm text-slate-400">4.9</span>
                      </div>
                    </div>

                    <div className="mt-1 p-2">
                      <h2 className="text-slate-700">The Malta Hotel</h2>
                      <p className="mt-1 text-sm text-slate-400">
                        Italy, Europe
                      </p>

                      <div className="mt-3 flex items-end justify-between">
                        <p>
                          <span className="text-lg font-bold text-orange-500">
                            $1,421
                          </span>
                          <span className="text-sm text-slate-400">/night</span>
                        </p>

                        <div className="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
                    <div className="relative flex items-end overflow-hidden rounded-xl">
                      <img
                        src="https://thumbnails.production.thenounproject.com/gA9eZOvsBYSHrMumgrslmRGoBto=/fit-in/1000x1000/photos.production.thenounproject.com/photos/BCBA88B6-5B41-4B50-A786-E60CAA0ECDA3.jpg"
                        alt="wallpaper"
                      />

                      <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <span className="ml-1 text-sm text-slate-400">4.9</span>
                      </div>
                    </div>

                    <div className="mt-1 p-2">
                      <h2 className="text-slate-700">The Malta Hotel</h2>
                      <p className="mt-1 text-sm text-slate-400">
                        Italy, Europe
                      </p>

                      <div className="mt-3 flex items-end justify-between">
                        <p>
                          <span className="text-lg font-bold text-orange-500">
                            $1,421
                          </span>
                          <span className="text-sm text-slate-400">/night</span>
                        </p>

                        <div className="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                  <div className="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
                    <div className="relative flex items-end overflow-hidden rounded-xl">
                      <img
                        src="https://thumbnails.production.thenounproject.com/gA9eZOvsBYSHrMumgrslmRGoBto=/fit-in/1000x1000/photos.production.thenounproject.com/photos/BCBA88B6-5B41-4B50-A786-E60CAA0ECDA3.jpg"
                        alt="wallpaper"
                      />

                      <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <span className="ml-1 text-sm text-slate-400">4.9</span>
                      </div>
                    </div>

                    <div className="mt-1 p-2">
                      <h2 className="text-slate-700">The Malta Hotel</h2>
                      <p className="mt-1 text-sm text-slate-400">
                        Italy, Europe
                      </p>

                      <div className="mt-3 flex items-end justify-between">
                        <p>
                          <span className="text-lg font-bold text-orange-500">
                            $1,421
                          </span>
                          <span className="text-sm text-slate-400">/night</span>
                        </p>

                        <div className="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
                    <div className="relative flex items-end overflow-hidden rounded-xl">
                      <img
                        src="https://thumbnails.production.thenounproject.com/gA9eZOvsBYSHrMumgrslmRGoBto=/fit-in/1000x1000/photos.production.thenounproject.com/photos/BCBA88B6-5B41-4B50-A786-E60CAA0ECDA3.jpg"
                        alt="wallpaper"
                      />

                      <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <span className="ml-1 text-sm text-slate-400">4.9</span>
                      </div>
                    </div>

                    <div className="mt-1 p-2">
                      <h2 className="text-slate-700">The Malta Hotel</h2>
                      <p className="mt-1 text-sm text-slate-400">
                        Italy, Europe
                      </p>

                      <div className="mt-3 flex items-end justify-between">
                        <p>
                          <span className="text-lg font-bold text-orange-500">
                            $1,421
                          </span>
                          <span className="text-sm text-slate-400">/night</span>
                        </p>

                        <div className="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
                    <div className="relative flex items-end overflow-hidden rounded-xl">
                      <img
                        src="https://thumbnails.production.thenounproject.com/gA9eZOvsBYSHrMumgrslmRGoBto=/fit-in/1000x1000/photos.production.thenounproject.com/photos/BCBA88B6-5B41-4B50-A786-E60CAA0ECDA3.jpg"
                        alt="wallpaper"
                      />

                      <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <span className="ml-1 text-sm text-slate-400">4.9</span>
                      </div>
                    </div>

                    <div className="mt-1 p-2">
                      <h2 className="text-slate-700">The Malta Hotel</h2>
                      <p className="mt-1 text-sm text-slate-400">
                        Italy, Europe
                      </p>

                      <div className="mt-3 flex items-end justify-between">
                        <p>
                          <span className="text-lg font-bold text-orange-500">
                            $1,421
                          </span>
                          <span className="text-sm text-slate-400">/night</span>
                        </p>

                        <div className="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                  <div className="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
                    <div className="relative flex items-end overflow-hidden rounded-xl">
                      <img
                        src="https://thumbnails.production.thenounproject.com/gA9eZOvsBYSHrMumgrslmRGoBto=/fit-in/1000x1000/photos.production.thenounproject.com/photos/BCBA88B6-5B41-4B50-A786-E60CAA0ECDA3.jpg"
                        alt="wallpaper"
                      />

                      <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <span className="ml-1 text-sm text-slate-400">4.9</span>
                      </div>
                    </div>

                    <div className="mt-1 p-2">
                      <h2 className="text-slate-700">The Malta Hotel</h2>
                      <p className="mt-1 text-sm text-slate-400">
                        Italy, Europe
                      </p>

                      <div className="mt-3 flex items-end justify-between">
                        <p>
                          <span className="text-lg font-bold text-orange-500">
                            $1,421
                          </span>
                          <span className="text-sm text-slate-400">/night</span>
                        </p>

                        <div className="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
                    <div className="relative flex items-end overflow-hidden rounded-xl">
                      <img
                        src="https://thumbnails.production.thenounproject.com/gA9eZOvsBYSHrMumgrslmRGoBto=/fit-in/1000x1000/photos.production.thenounproject.com/photos/BCBA88B6-5B41-4B50-A786-E60CAA0ECDA3.jpg"
                        alt="wallpaper"
                      />

                      <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <span className="ml-1 text-sm text-slate-400">4.9</span>
                      </div>
                    </div>

                    <div className="mt-1 p-2">
                      <h2 className="text-slate-700">The Malta Hotel</h2>
                      <p className="mt-1 text-sm text-slate-400">
                        Italy, Europe
                      </p>

                      <div className="mt-3 flex items-end justify-between">
                        <p>
                          <span className="text-lg font-bold text-orange-500">
                            $1,421
                          </span>
                          <span className="text-sm text-slate-400">/night</span>
                        </p>

                        <div className="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
                    <div className="relative flex items-end overflow-hidden rounded-xl">
                      <img
                        src="https://thumbnails.production.thenounproject.com/gA9eZOvsBYSHrMumgrslmRGoBto=/fit-in/1000x1000/photos.production.thenounproject.com/photos/BCBA88B6-5B41-4B50-A786-E60CAA0ECDA3.jpg"
                        alt="wallpaper"
                      />

                      <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <span className="ml-1 text-sm text-slate-400">4.9</span>
                      </div>
                    </div>

                    <div className="mt-1 p-2">
                      <h2 className="text-slate-700">The Malta Hotel</h2>
                      <p className="mt-1 text-sm text-slate-400">
                        Italy, Europe
                      </p>

                      <div className="mt-3 flex items-end justify-between">
                        <p>
                          <span className="text-lg font-bold text-orange-500">
                            $1,421
                          </span>
                          <span className="text-sm text-slate-400">/night</span>
                        </p>

                        <div className="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <p>
                  Middle child and eldest daughter of Homer and Marge; sister of
                  Bart and Maggie.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/200px-Lisa_Simpson.png"
                  alt="Lisa Simpson"
                />
              </TabPanel>
            
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList>
                <Tab>Philip J. Fry</Tab>
                <Tab>Turanga Leela</Tab>
                <Tab>Bender Bending Rodriguez</Tab>
                <Tab>Amy Wong</Tab>
                <Tab>Professor Hubert J. Farnsworth</Tab>
                <Tab>Doctor John Zoidberg</Tab>
              </TabList>
              <TabPanel>
                <p>
                  Protagonist, from the 20th Century. Delivery boy. Many times
                  great-uncle to Professor Hubert Farnsworth. Suitor of Leela.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png"
                  alt="Philip J. Fry"
                />
              </TabPanel>
              <TabPanel>
                <p>
                  Mutant cyclops. Captain of the Planet Express Ship. Love
                  interest of Fry.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png"
                  alt="Turanga Leela"
                />
              </TabPanel>
              <TabPanel>
                <p>
                  A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot
                  who is Fry's best friend. Built in Tijuana, Mexico, he is the
                  Planet Express Ship's cook.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png"
                  alt="Bender Bending Rodriguez"
                />
              </TabPanel>
              <TabPanel>
                <p>
                  Chinese-Martian intern at Planet Express. Fonfon Ru of Kif
                  Kroker.
                </p>
              </TabPanel>
              <TabPanel>
                <p>
                  Many times great-nephew of Fry. CEO and owner of Planet
                  Express delivery company. Tenured professor of Mars
                  University.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/FuturamaProfessorFarnsworth.png/175px-FuturamaProfessorFarnsworth.png"
                  alt="Professor Hubert J. Farnsworth"
                />
              </TabPanel>
              <TabPanel>
                <p>
                  Alien from Decapod 10. Planet Express' staff doctor and
                  steward. Has a medical degree and Ph.D in art history.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png"
                  alt="Doctor John Zoidberg"
                />
              </TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopCategory;
