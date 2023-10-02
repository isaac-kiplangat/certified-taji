const CardThree = () => {
  return (
    <div className="rounded-lg border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <svg
          width="28"
          height="28"
          className="fill-primary dark:fill-white"
          fill="none"
          viewBox="0 0 1920 1920"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              d="M1750.21 0v1468.235h-225.882v338.824h169.412V1920H451.387c-82.447 0-161.506-36.141-214.701-99.388-43.934-51.953-67.652-116.33-67.652-182.965V282.353C169.034 126.494 295.528 0 451.387 0H1750.21Zm-338.823 1468.235H463.81c-89.223 0-166.136 59.86-179.576 140.047-1.242 9.036-2.259 18.07-2.259 27.106v2.26c0 40.658 13.553 77.928 40.659 109.552 32.753 38.4 79.059 59.859 128.753 59.859h960v-112.941H409.599v-112.942h1001.788v-112.94Zm225.882-1355.294H451.387c-92.725 0-169.412 75.67-169.412 169.412v1132.8c50.824-37.27 113.958-59.859 181.835-59.859h1173.46V112.941ZM1354.882 903.53v112.942H564.294V903.529h790.588Zm56.47-564.705v451.764H507.825V338.824h903.529Zm-112.94 112.94H620.765v225.883h677.647V451.765Z"
              fill-rule="evenodd"
            ></path>{' '}
          </g>
        </svg>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            93
          </h4>
          <span className="text-sm font-medium">Total Courses</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
          2.59%
          <svg
            className="fill-meta-3"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
              fill=""
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CardThree;
