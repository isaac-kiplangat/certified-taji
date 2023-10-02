import Breadcrumb from '../../components/Breadcrumb';
import FileUpload from './FileUpload';
// import CheckboxFive from '../../components/CheckboxFive';
// import CheckboxFour from '../../components/CheckboxFour';
// import CheckboxOne from '../../components/CheckboxOne';
// import CheckboxThree from '../../components/CheckboxThree';
// import CheckboxTwo from '../../components/CheckboxTwo';
import FormFilter from './FormFilter';

const GraduateSetup = () => {
  return (
    <>
      <Breadcrumb pageName="Graduate List" />

      <div className=" gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Graduate Search
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <FormFilter />

              {/* <div>
                
              <div>
                <label className="mb-3 block font-medium text-black dark:text-white">
                  Disabled label
                </label>
                <input
                  type="text"
                  placeholder="Disabled label"
                  disabled
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black"
                />
              </div>*/}
            </div>
          </div>

          {/* <!-- Toggle switch input -->
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white"></h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <ul>
                <li>
                  <a href="">Add Student</a>
                </li>
              </ul>
            </div>
          </div> */}

          <div className=" text-white p-4 rounded ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {/* User Management */}
              <div className="bg-white p-4 gap-2 rounded shadow   dark:border-grey-300 dark:bg-boxdark">
                <div className="flex items-center justify-start gap-2 m-2">
                  <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
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
                          d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                          stroke="#10B981"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{' '}
                        <path
                          d="M3.40991 22C3.40991 18.13 7.25991 15 11.9999 15C12.9599 15 13.8899 15.13 14.7599 15.37"
                          stroke="#10B981"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{' '}
                        <path
                          d="M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.92 14.43 15.93 15.13 15.21C15.86 14.46 16.88 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z"
                          stroke="#10B981"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{' '}
                        <path
                          d="M19.49 17.98H16.51"
                          stroke="#10B981"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{' '}
                        <path
                          d="M18 16.52V19.51"
                          stroke="#10B981"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{' '}
                      </g>
                    </svg>
                  </div>
                  <h2 className="text-xl  text-primary font-semibold mb-2">
                    User Management
                  </h2>
                </div>
                <div className=" flex justify-around  dark:border-grey-300 dark:bg-boxdark">
                  <button className="bg-primary text-white px-4 py-2 rounded hover:bg-green-600">
                    Graduate Registration
                  </button>
                  <button className="bg-primary ml-4 text-white px-4 py-2 rounded hover:bg-green-600">
                    User Activation
                  </button>
                </div>
              </div>

              {/* Profile Management */}
              <div className="bg-white p-4 rounded shadow  dark:border-strokedark dark:bg-boxdark">
                <div className="flex items-center justify-start m-2 gap-2">
                  <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                    <svg
                      width="26"
                      height="26"
                      fill="#10B981"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <g>
                            <path d="M99.216,44.288c-24.96,0-45.248,20.592-45.248,45.904s20.304,45.888,45.248,45.888c24.96,0,45.248-20.592,45.248-45.888 C144.464,64.896,124.176,44.288,99.216,44.288z M99.216,120.08c-16.128,0-29.248-13.408-29.248-29.888 c0-16.48,13.12-29.904,29.248-29.904s29.248,13.408,29.248,29.904C128.464,106.688,115.344,120.08,99.216,120.08z"></path>{' '}
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M142.72,146.576l-3.936-1.2l-39.568,30.336l-39.552-30.336l-3.952,1.2C-0.064,163.6,0,221.408,0,222l0.096,7.904h198.24 v-0.016l0.096-7.904C198.432,221.408,198.48,163.6,142.72,146.576z M16.672,213.888c1.968-13.296,9.68-39.632,39.872-50.72 l42.672,32.72l42.672-32.72c30.192,11.088,37.904,37.408,39.872,50.72H16.672z"></path>{' '}
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect
                              x="248.24"
                              y="63.728"
                              width="263.76"
                              height="16"
                            ></rect>
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect
                              x="248.24"
                              y="127.872"
                              width="263.76"
                              height="16"
                            ></rect>
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect
                              x="248.24"
                              y="192"
                              width="263.76"
                              height="16"
                            ></rect>
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M99.216,282.112c-24.944,0-45.248,20.592-45.248,45.888c0,25.312,20.304,45.904,45.248,45.904 c24.944,0,45.248-20.592,45.248-45.904C144.464,302.704,124.16,282.112,99.216,282.112z M99.216,357.904 c-16.128,0-29.248-13.424-29.248-29.904c0-16.48,13.12-29.888,29.248-29.888S128.464,311.52,128.464,328 C128.464,344.48,115.344,357.904,99.216,357.904z"
                              stroke="#10B981"
                            ></path>
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M142.72,384.384l-3.936-1.2l-39.568,30.352l-39.568-30.352l-3.936,1.2C-0.064,401.424,0,459.232,0,459.808l0.096,7.904
                           h198.24l0.096-7.904C198.432,459.232,198.48,401.424,142.72,384.384z M16.672,451.728c1.968-13.328,9.68-39.664,39.872-50.736 
                           l42.672,32.72l42.672-32.72c30.192,11.072,37.904,37.424,39.872,50.736H16.672z"
                              stroke="#10B981"
                            ></path>
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect
                              x="248.24"
                              y="301.568"
                              width="263.76"
                              height="16"
                            ></rect>
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect
                              x="248.24"
                              y="365.696"
                              width="263.76"
                              height="16"
                            ></rect>
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect
                              x="248.24"
                              y="429.824"
                              width="263.76"
                              height="16"
                            ></rect>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h2 className="text-xl text-primary font-semibold mb-2">
                    Profile Management
                  </h2>
                </div>

                <div className=" flex justify-around">
                  <button className="bg-primary text-white px-4 py-2 rounded hover:bg-green-600  dark:border-strokedark dark:bg-boxdark">
                    Update Profiles
                  </button>
                  <button className="bg-primary ml-2 text-white px-4 py-2 rounded hover:bg-green-600  dark:border-strokedark dark:bg-boxdark">
                    Profile Deactivation
                  </button>
                </div>
              </div>

              {/* Certificate Generation */}
              <div className="bg-white p-4 rounded shadow  dark:border-strokedark dark:bg-boxdark">
                <div className="flex items-center justify-start gap-2 m-2">
                  <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M6.5 20H5C3.89543 20 3 19.1046 3 18V4C3 2.89543 3.89543 2 5 2H19C20.1046 2 21 2.89543 21 4V18C21 19.1046 20.1046 20 19 20H17.5M12 19C13.6569 19 15 17.6569 15 16C15 14.3431 13.6569 13 12 13C10.3431 13 9 14.3431 9 16C9 17.6569 10.3431 19 12 19ZM12 19L12.0214 18.9998L8.82867 22.1926L6.00024 19.3641L9.01965 16.3447M12 19L15.1928 22.1926L18.0212 19.3641L15.0018 16.3447M9 6H15M7 9.5H17"
                          stroke="#10B981"
                          stroke-width="1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <h2 className="text-xl text-primary font-semibold mb-2">
                    Certificate Generation
                  </h2>
                </div>
                <div className=" flex justify-around">
                  <button className="bg-primary text-white px-4 py-2 rounded hover:bg-green-600">
                    Generate Certificates
                  </button>
                  <button className="bg-primary ml-2 text-white px-4 py-2 rounded hover:bg-green-600">
                    Edit certificate
                  </button>
                </div>
              </div>

              {/* Add more cards for other actions */}
            </div>
          </div>
          <FileUpload />

          {/* <!-- Time and date --> */}
          <div className="rounded-sm border  border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                File Upload
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Date picker
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Select date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="custom-input-date custom-input-date-2 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col gap-9"> */}
        {/* <!-- Textarea Fields --> */}
        {/* <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Textarea Fields
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Default textarea
                </label>
                <textarea
                  rows={6}
                  placeholder="Default textarea"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></textarea>
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Active textarea
                </label>
                <textarea
                  rows={6}
                  placeholder="Active textarea"
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                ></textarea>
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Disabled textarea
                </label>
                <textarea
                  rows={6}
                  disabled
                  placeholder="Disabled textarea"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black"
                ></textarea>
              </div>
            </div>
          </div> */}

        {/* <!-- Checkbox and radio --> */}
        {/* <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Checkbox and radio
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <CheckboxOne />
              <CheckboxTwo />
              <CheckboxThree />
              <CheckboxFour />
              <CheckboxFive />
            </div>
          </div> */}

        {/* <!-- Select input --> */}
        <div className="rounded-sm border mt-8 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Select input
            </h3>
          </div>
          <div className="flex flex-col gap-5.5 p-6.5">
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Select Country
              </label>
              <div className="relative z-20 bg-white dark:bg-form-input">
                <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.0007 2.50065C5.85852 2.50065 2.50065 5.85852 2.50065 10.0007C2.50065 14.1428 5.85852 17.5007 10.0007 17.5007C14.1428 17.5007 17.5007 14.1428 17.5007 10.0007C17.5007 5.85852 14.1428 2.50065 10.0007 2.50065ZM0.833984 10.0007C0.833984 4.93804 4.93804 0.833984 10.0007 0.833984C15.0633 0.833984 19.1673 4.93804 19.1673 10.0007C19.1673 15.0633 15.0633 19.1673 10.0007 19.1673C4.93804 19.1673 0.833984 15.0633 0.833984 10.0007Z"
                        fill="#637381"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.833984 9.99935C0.833984 9.53911 1.20708 9.16602 1.66732 9.16602H18.334C18.7942 9.16602 19.1673 9.53911 19.1673 9.99935C19.1673 10.4596 18.7942 10.8327 18.334 10.8327H1.66732C1.20708 10.8327 0.833984 10.4596 0.833984 9.99935Z"
                        fill="#637381"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.50084 10.0008C7.55796 12.5632 8.4392 15.0301 10.0006 17.0418C11.5621 15.0301 12.4433 12.5632 12.5005 10.0008C12.4433 7.43845 11.5621 4.97153 10.0007 2.95982C8.4392 4.97153 7.55796 7.43845 7.50084 10.0008ZM10.0007 1.66749L9.38536 1.10547C7.16473 3.53658 5.90275 6.69153 5.83417 9.98346C5.83392 9.99503 5.83392 10.0066 5.83417 10.0182C5.90275 13.3101 7.16473 16.4651 9.38536 18.8962C9.54325 19.069 9.76655 19.1675 10.0007 19.1675C10.2348 19.1675 10.4581 19.069 10.6159 18.8962C12.8366 16.4651 14.0986 13.3101 14.1671 10.0182C14.1674 10.0066 14.1674 9.99503 14.1671 9.98346C14.0986 6.69153 12.8366 3.53658 10.6159 1.10547L10.0007 1.66749Z"
                        fill="#637381"
                      ></path>
                    </g>
                  </svg>
                </span>
                <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                  <option value="">USA</option>
                  <option value="">UK</option>
                  <option value="">Canada</option>
                </select>
                <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                        fill="#637381"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Multiselect Dropdown
              </label>
              <div className="relative z-20 w-full rounded border border-stroke p-1.5 pr-8 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                <div className="flex flex-wrap items-center">
                  <span className="m-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray py-1.5 px-2.5 text-sm font-medium dark:border-strokedark dark:bg-white/30">
                    Design
                    <span className="cursor-pointer pl-2 hover:text-danger">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </span>
                  <span className="m-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray py-1.5 px-2.5 text-sm font-medium dark:border-strokedark dark:bg-white/30">
                    Development
                    <span className="cursor-pointer pl-2 hover:text-danger">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <select
                  name=""
                  id=""
                  className="absolute top-0 left-0 z-20 h-full w-full bg-transparent opacity-0"
                >
                  <option value="">Option</option>
                  <option value="">Option</option>
                </select>
                <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                        fill="#637381"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="items-center mt-4 gap-2 flex justify-center">
        <h1>Copyright 2023</h1>
        <span>
          Supported by
          <a className="text-primary ml-2 font-semibold" href="/">
            Taji.io
          </a>
        </span>
      </div>
    </>
  );
};

export default GraduateSetup;
