<html>
    <head>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
        <link
            rel="stylesheet"
            as="style"
            onload="this.rel='stylesheet'"
            href="https://fonts.googleapis.com/css2?display=swap&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&amp;family=Plus+Jakarta+Sans%3Awght%40400%3B500%3B700%3B800"
        />

        <title>Galileo Design</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />

        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    </head>
    <body>
        <div
            class="relative flex size-full min-h-screen flex-col bg-slate-50 justify-between group/design-root overflow-x-hidden"
            style='font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;'
        >
            <div>
                <div class="flex items-center bg-slate-50 p-4 pb-2 justify-between">
                    <div class="text-[#0d141c] flex size-12 shrink-0 items-center" data-icon="ArrowLeft" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                        </svg>
                    </div>
                    <h2 class="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Flights</h2>
                </div>
                <div class="pb-3">
                    <div class="flex border-b border-[#cedbe8] px-4 justify-between">
                        <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#49739c] pb-[13px] pt-4 flex-1" href="#">
                            <p class="text-[#49739c] text-sm font-bold leading-normal tracking-[0.015em]">Round-trip</p>
                        </a>
                        <a class="flex flex-col items-center justify-center border-b-[3px] border-b-[#0d80f2] text-[#0d141c] pb-[13px] pt-4 flex-1" href="#">
                            <p class="text-[#0d141c] text-sm font-bold leading-normal tracking-[0.015em]">One-way</p>
                        </a>
                        <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#49739c] pb-[13px] pt-4 flex-1" href="#">
                            <p class="text-[#49739c] text-sm font-bold leading-normal tracking-[0.015em]">Multi-city</p>
                        </a>
                    </div>
                </div>
                <div class="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
                    <label class="flex flex-col min-w-40 flex-1">
                        <div class="flex w-full flex-1 items-stretch rounded-xl">
                            <input
                                placeholder="Departure city"
                                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d141c] focus:outline-0 focus:ring-0 border-none bg-[#e7edf4] focus:border-none h-14 placeholder:text-[#49739c] p-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                                value=""
                            />
                            <div
                                class="text-[#49739c] flex border-none bg-[#e7edf4] items-center justify-center pr-4 rounded-r-xl border-l-0"
                                data-icon="AirplaneTakeoff"
                                data-size="24px"
                                data-weight="regular"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                    <path
                                        d="M176,216a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H168A8,8,0,0,1,176,216ZM247.86,93.15a8,8,0,0,1-3.76,5.39l-147.41,88a40.18,40.18,0,0,1-20.26,5.52,39.78,39.78,0,0,1-27.28-10.87l-.12-.12L13,145.8a16,16,0,0,1,4.49-26.21l3-1.47a8,8,0,0,1,6.08-.4l28.26,9.54L75,115.06,53.17,93.87A16,16,0,0,1,57.7,67.4l.32-.13,7.15-2.71a8,8,0,0,1,5.59,0L124.7,84.38,176.27,53.6a39.82,39.82,0,0,1,51.28,9.12l.12.15,18.64,23.89A8,8,0,0,1,247.86,93.15Zm-19.74-3.7-13-16.67a23.88,23.88,0,0,0-30.68-5.42l-54.8,32.72a8.06,8.06,0,0,1-6.87.64L68,80.58l-4,1.53.21.2L93.57,110.8a8,8,0,0,1-1.43,12.58L59.93,142.87a8,8,0,0,1-6.7.73l-28.67-9.67-.19.1-.37.17a.71.71,0,0,1,.13.12l36,35.26a23.85,23.85,0,0,0,28.42,3.18Z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </label>
                </div>
                <div class="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
                    <label class="flex flex-col min-w-40 flex-1">
                        <div class="flex w-full flex-1 items-stretch rounded-xl">
                            <input
                                placeholder="Arrival city"
                                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d141c] focus:outline-0 focus:ring-0 border-none bg-[#e7edf4] focus:border-none h-14 placeholder:text-[#49739c] p-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                                value=""
                            />
                            <div
                                class="text-[#49739c] flex border-none bg-[#e7edf4] items-center justify-center pr-4 rounded-r-xl border-l-0"
                                data-icon="AirplaneLanding"
                                data-size="24px"
                                data-weight="regular"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                    <path
                                        d="M248,216a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16H240A8,8,0,0,1,248,216Zm-26.16-24.3L45.21,142.24A40.12,40.12,0,0,1,16,103.72V48A16,16,0,0,1,37.06,32.82l5.47,1.82a8,8,0,0,1,5,4.87L58.13,68.88,88,77.39V48a16,16,0,0,1,21.06-15.18l5.47,1.82a8,8,0,0,1,4.85,4.5l22.5,53.63,60.84,17A40.13,40.13,0,0,1,232,148.32V184a8,8,0,0,1-10.16,7.7ZM216,148.32a24.09,24.09,0,0,0-17.58-23.13l-64.57-18a8,8,0,0,1-5.23-4.61L106,48.67,104,48V88a8,8,0,0,1-10.19,7.7l-44-12.54a8,8,0,0,1-5.33-5L33.79,48.59,32,48v55.72a24.09,24.09,0,0,0,17.53,23.12L216,173.45Z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </label>
                </div>
                <div class="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
                    <label class="flex flex-col min-w-40 flex-1">
                        <div class="flex w-full flex-1 items-stretch rounded-xl">
                            <input
                                placeholder="Departure date"
                                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d141c] focus:outline-0 focus:ring-0 border-none bg-[#e7edf4] focus:border-none h-14 placeholder:text-[#49739c] p-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                                value=""
                            />
                            <div
                                class="text-[#49739c] flex border-none bg-[#e7edf4] items-center justify-center pr-4 rounded-r-xl border-l-0"
                                data-icon="Calendar"
                                data-size="24px"
                                data-weight="regular"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                    <path
                                        d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </label>
                </div>
                <h3 class="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Options</h3>
                <div class="flex flex-wrap gap-3 p-4">
                    <label
                        class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#cedbe8] px-4 h-11 text-[#0d141c] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#0d80f2] relative cursor-pointer"
                    >
                        1 Traveler
                        <input type="radio" class="invisible absolute" name="1c931be9-23c2-4d5c-89bf-a8bccae43017" />
                    </label>
                    <label
                        class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#cedbe8] px-4 h-11 text-[#0d141c] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#0d80f2] relative cursor-pointer"
                    >
                        Economy
                        <input type="radio" class="invisible absolute" name="1c931be9-23c2-4d5c-89bf-a8bccae43017" />
                    </label>
                    <label
                        class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#cedbe8] px-4 h-11 text-[#0d141c] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#0d80f2] relative cursor-pointer"
                    >
                        0 carry-ons
                        <input type="radio" class="invisible absolute" name="1c931be9-23c2-4d5c-89bf-a8bccae43017" />
                    </label>
                    <label
                        class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#cedbe8] px-4 h-11 text-[#0d141c] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#0d80f2] relative cursor-pointer"
                    >
                        Any stops
                        <input type="radio" class="invisible absolute" name="1c931be9-23c2-4d5c-89bf-a8bccae43017" />
                    </label>
                </div>
            </div>
            <div>
                <div class="flex px-4 py-3">
                    <button
                        class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#0d80f2] text-slate-50 text-base font-bold leading-normal tracking-[0.015em]"
                    >
                        <span class="truncate">Search flights</span>
                    </button>
                </div>
                <div class="h-5 bg-slate-50"></div>
            </div>
        </div>
    </body>
</html>
