import React from "react";
import { useSelector } from "react-redux";

const Card = () => {
    //  ngambil increment dan decrement atau state dan value dari counterSlice
    const count = useSelector((state) => state.counter.value);

    return (
      <>
        <div className="mx-auto py-10 object-center">
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 object-center"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions {count}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of {count}{" "}
              so far, in reverse chronological order.
            </p>
          </a>
        </div>
      </>
    );
}
export default Card;